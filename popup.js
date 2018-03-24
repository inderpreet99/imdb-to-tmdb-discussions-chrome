chrome.tabs.getSelected(null, function(tab) {
  var parser = document.createElement('a');
  parser.href = tab.url;
  if (parser.href.indexOf('imdb') < 0) {
    // @todo: show error not an imdb page
    return;
  }
  
  document.getElementById("content").src = 'https://us-central1-imdb-discussions.cloudfunctions.net/imdb-discussions?href='+parser.href;
});
