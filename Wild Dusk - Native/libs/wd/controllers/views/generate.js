function versionPage(vName) {
  var show = "";

  Animations.top.loading();
  if (LocalDb.Version.get[vName]) {
    Animations.full.preloader();
    var gen = {
      version: LocalDb.Version.get[vName].vParse,
      name: LocalDb.Version.get[vName].vName,
      date: LocalDb.Version.get[vName].getDay(),
      feat: LocalDb.Version.get[vName].features.join("<br />- "),
      changes: LocalDb.Version.get[vName].changes.join("<br />- "),
      info: LocalDb.Version.get[vName].info.join("<br />- "),
      api: LocalDb.Version.get[vName].vValue.Minor
    }
    send();
  } else if (LocalDb.Version.get.all[vName]) {
    Animations.full.preloader();
    var gen = {
      version: LocalDb.Version.get[LocalDb.Version.get.all[vName]].vParse,
      name: LocalDb.Version.get[LocalDb.Version.get.all[vName]].vName,
      date: LocalDb.Version.get[LocalDb.Version.get.all[vName]].getDay(),
      feat: LocalDb.Version.get[LocalDb.Version.get.all[vName]].features.join("<br />- "),
      changes: LocalDb.Version.get[LocalDb.Version.get.all[vName]].changes.join("<br />- "),
      info: LocalDb.Version.get[LocalDb.Version.get.all[vName]].info.join("<br />- "),
      api: LocalDb.Version.get[LocalDb.Version.get.all[vName]].vValue.Minor
    }
    send();
  } else {
    wd.addNotification({
      title: 'Error',
      subtitle: 'No se ha encontrado la version.'
    });
    return console.error("ERROR: La base de datos no ha regresado ninguna informacion.");
  }

  function send() {

    var showV =
      '<div class="popup popup-unique" data-popup="' + gen.name + '">' +
      '<div class="navbar">' +
      '<div class="navbar-inner">' +
      '<div class="left"><a href="" class="link back" onclick="wd.hidePreloader();wd.closeModal();"><i class="icon icon-back"></i>Aceptar</a></div>' +
      '<div class="center">' + gen.name + '</div>' +
      '<div class="right">' + gen.version + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="timeline" id="temp-hide">' +
      '<div class="timeline-item">' +
      '<div class="timeline-item-date">' + gen.version + '</div>' +
      '<div class="timeline-item-divider"></div>' +
      '<div class="timeline-item-content card">' +
      '<div class="card-header">' + gen.name + '</div>' +
      '<div class="card-content">' +
      '<div class="card-content-inner">' + gen.feat + '</div>' +
      '</div>' +
      '<div class="card-footer">Updated ' + gen.date + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="timeline-item">' +
      '<div class="timeline-item-date">Logs</div>' +
      '<div class="timeline-item-divider"></div>' +
      '<div class="timeline-item-content">' +
      '<div class="timeline-item-inner">' +
      '<div class="timeline-item-title"><b>Cambios</b></div>' +
      '<div class="timeline-item-subtitle">' + gen.changes + '</div>' +
      '<div class="timeline-item-text">' + '</div>' +
      '</div>' +
      '<div class="timeline-item-inner">' +
      '<div class="timeline-item-title">' + gen.name + '</div>' +
      '<div class="timeline-item-subtitle">' + gen.info + '</div>' +
      '<div class="timeline-item-text">' + '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';

    return wd.popup(showV);
  }
}

function showAllVersion() {
  Animations.top.loading();
  Animations.full.preloader();
  var page =
    '<div class="popup popup-allVersions" data-popup="allvrs">' +
    '<div class="navbar">' +
    '<div class="navbar-inner">' +
    '<div class="left"><a href="" class="link back" onclick="wd.hidePreloader();wd.closeModal();"><i class="icon icon-back"></i>Aceptar</a></div>' +
    '<div class="center">Wild Dusk</div>' +
    '<div class="right">Versions</div>' +
    '</div>' +
    '</div>' +
    '<div class="list-block media-list" id="temp-hide-f">' +
    '<ul>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(0);showandhide();">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Submarine.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Submarine.vName + '</div>' +
    '</div>' +
    '<div class="item-subtitle version-name">Version ' + LocalDb.Version.get.Submarine.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(1);showandhide();">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Feather.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Feather.vName + '</div>' +
    '</div>' +
    '<div class="item-subtitle version-name">Version ' + LocalDb.Version.get.Feather.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(2);showandhide();">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Marble.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Marble.vName + '</div>' +
    '</div>' +
    '<div class="item-subtitle version-name">Version ' + LocalDb.Version.get.Marble.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(3);showandhide();">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Bucket.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Bucket.vName + '</div>' +
    '</div>' +
    '<div class="item-subtitle version-name">Version ' + LocalDb.Version.get.Bucket.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '<li>' +
    '<a class="item-content item-link" onclick="versionPage(4);showandhide();">' +
    '<div class="item-media">' +
    '<img src="./libs/wd/icon/vrs/' + LocalDb.Version.get.Core.vName + '/icon.128.png" width="44">' +
    '</div>' +
    '<div class="item-inner">' +
    '<div class="item-title-row">' +
    '<div class="item-title">' + LocalDb.Version.get.Core.vName + '</div>' +
    '</div>' +
    '<div class="item-subtitle version-name">Version' + LocalDb.Version.get.Core.vParse + '</div>' +
    '</div>' +
    '</a>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</div>';
  wd.popup(page);
}