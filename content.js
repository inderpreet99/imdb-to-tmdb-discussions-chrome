
if (window != window.top) {
    // open links in new tabs
    const eles = [...document.getElementsByTagName('a')];
    eles.forEach((ele) => {
        ele.target = "_blank";
    });

    // hide .left_column (really the .sidebar)
    document.getElementsByClassName('left_column')[0].style.display = 'none';
}
