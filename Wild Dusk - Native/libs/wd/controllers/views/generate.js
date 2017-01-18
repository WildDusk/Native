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
    var showV =
      '<div class="popup popup-' + vName + '">' +
      '<div class="navbar">' +
      '<div class="navbar-inner">' +
      '<div class="left"><a href="" class="link back" onclick="wd.closeModal();wd.hidePreloader();"><i class="icon icon-back"></i>Aceptar</a></div>' +
      '<div class="center">' + vName + '</div>' +
      '<div class="right">' + gen.version + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="timeline" id="static-hide">' +
      '<div class="timeline-item">' +
      '<div class="timeline-item-date">' + gen.version + '</div>' +
      '<div class="timeline-item-divider"></div>' +
      '<div class="timeline-item-content card">' +
      '<div class="card-header">' + vName + '</div>' +
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
      '<div class="timeline-item-time">' + '</div>' +
      '<div class="timeline-item-title"><b>Cambios</b></div>' +
      '<div class="timeline-item-subtitle">' + gen.changes + '</div>' +
      '<div class="timeline-item-text">Item Text</div>' +
      '</div>' +
      '<div class="timeline-item-inner">' +
      '<div class="timeline-item-time">' + gen.api + '</div>' +
      '<div class="timeline-item-title">' + gen.name + '</div>' +
      '<div class="timeline-item-subtitle">' + gen.info + '</div>' +
      '<div class="timeline-item-text">Item Text</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>' +
      '</div>';
    return wd.popup(showV);
  } else if (!LocalDb.Version.get[vName]) {
    wd.addNotification({
      title: 'Error',
      subtitle: 'No se ha encontrado la version.'
    });
    return console.error("ERROR: La base de datos no ha regresado ninguna informacion.");
  }
}