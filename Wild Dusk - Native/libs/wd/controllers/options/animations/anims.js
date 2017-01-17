var Animations = {
  top: {
    loading: function () {
      var container = $$('body');
      if (container.children('.progressbar, .progressbar-infinite').length) return;
      wd.showProgressbar(container, 0);

      var progress = 0;

      function simulateLoading() {
        setTimeout(function () {
          var progressBefore = progress;
          progress += Math.random() * 20;
          wd.setProgressbar(container, progress);
          if (progressBefore < 100) {
            simulateLoading();
          } else {
            wd.hideProgressbar(container);
          }
        }, Math.random() * 200 + 200);
      }
      simulateLoading();
    }
  },
  full: {
    preloader: function () {
      wd.showPreloader();
      setTimeout(function () {
        document.getElementById('static-hide').style.display = 'block';
        wd.hidePreloader();
      }, 1900);
    }
  }
}

/* Auto trigger animatins */

var ptrContent = $$('.pull-to-refresh-content');
ptrContent.on('ptr:pullend', function () {

  setTimeout(function () {

    var i = Math.floor(Math.random() * 5);
    var time = i * 1000;
    var newVersion =
      '<li>' +
      '<a class="item-content item-link" onclick="versionPage(' + LocalDb.Version.get[LocalDb.Version.get.versions[0]].vName + ');">' +
      '<div class="item-media">' +
      '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get[LocalDb.Version.get.versions[0]].vName + '/icon.128.png" width="44">' +
      '</div>' +
      '<div class="item-inner">' +
      '<div class="item-title-row">' +
      '<div class="item-title">' + LocalDb.Version.get[LocalDb.Version.get.versions[0]].vName + '</div>' +
      '</div>' +
      '<div class="item-subtitle version-name">Version ' + LocalDb.Version.get[LocalDb.Version.get.versions[0]].vParse + '</div>' +
      '</div>' +
      '</a>' +
      '</li>';
    if (LocalDb.Version.get[LocalDb.Version.get.versions[0]].vName != "Submarine") {
      ptrContent.find('ul').prepend(newVersion);
    }
    wd.pullToRefreshDone();
  }, 2000);

});