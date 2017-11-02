(function () {
    //initilaize the bab
    init();
    //disable gravity
    toggleGravity();
    var maxSplit = 10;
    var currentSplit = 0;
    //split every 40 seconds
    var babSpliter = window.setInterval(function() {
        blobColl.split();
        currentSplit++;
        if (currentSplit > 9) {
            currentSplit = 0;
            window.clearInterval(babSpliter);
        }
    }, 40*1000);
    //join every 40 seconds
    var babJoin = window.setInterval(function() {
        blobColl.join();
        currentSplit++;
        if (currentSplit > 9) {
            currentSplit = 0;
            window.clearInterval(babJoin);
        }
    }, 40 * 1000);
}());
