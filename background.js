var HEADERS_TO_STRIP_LOWERCASE = [
    'content-security-policy',
    'x-frame-options',
];

/**
 * Strip problematic headers that prevent opening tMDB in the extension.
 * Test URL: data:text/html,<iframe src="https://THEMOVIEDB.org/" width="600" height="600"></iframe>
 */
chrome.webRequest.onHeadersReceived.addListener(
    function(details) {
        return {
            responseHeaders: details.responseHeaders.filter(function(header) {
                return HEADERS_TO_STRIP_LOWERCASE.indexOf(header.name.toLowerCase()) < 0;
            })
        };
    },
    {
        urls: [
            "https://www.themoviedb.org/*",
        ]
    },
    ["blocking", "responseHeaders"]
);

/**
 * Only work for iMDB title pages.
 * 
 * @param {*} tabId 
 * @param {*} changeInfo 
 * @param {*} tab 
 */
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the tabs url is IMDB
    if (tab.url.indexOf('www.imdb.com/title/tt') >= 0) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
