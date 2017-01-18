var wd = new Framework7({
  cache: true,
  cacheDuration: 1000 * 60 * 10,
  fastClicks: true,
  fastClicksDelayBetweenClicks: 50,
  fastClicksDistanceThreshold: 10,
  activeState: true,
  activeStateElements: 'a, button, label, span',
  tapHold: true,
  tapHoldDelay: 750,
  tapHoldPreventClicks: true,
  router: true,
  dynamicPageUrl: 'content-{{index}}',
  uniqueHistory: false,
  externalLinks: '.ext',
  allowDuplicateUrls: false,
  animateNavBackIcon: true,
  animatePages: true,
  preloadPreviousPage: true,
  swipeBackPage: true,
  swipeBackPageThreshold: 0,
  swipeBackPageActiveArea: 30,
  swipeBackPageAnimateShadow: true,
  swipeBackPageAnimationOpacity: true,
  sortable: true,
  swipeout: true,
  swipeoutNoFollow: true,
  swipePanel: 'left',
  swipePanelCloseOpposite: true,
  swipePanelOnlyOnClose: true,
  swipePanelActiveArea: 30,
  swipeThreshold: 0,
  panelsCloseByOutside: false,
  modalTitle: 'Confirmacion',
  modalButtonOk: 'Aceptar',
  modalButtonCancel: 'Cancelar',
  modalPreloaderTitle: 'Cargando',
  modalCloseByOutside: false,
  actionsCloseByOutside: false,
  popupCloseByOutside: false,
  modalUsernamePlaceholder: 'Username',
  modalPasswordPlaceholdera: 'Contraseña',
  modalStack: true,
  smartSelectOpenIn: 'page',
  smartSelectBackText: 'Aceptar',
  smartSelectPopupCloseText: 'Cerrar',
  smartSelectPickerCloseText: 'Aceptar',
  smartSelectSearchbar: true,
  smartSelectBackOnSelect: true,
  hideNavbarOnPageScroll: false,
  hideToolbarOnPageScroll: true,
  hideTabbarOnPageScroll: true,
  showBarsOnPageScrollEnd: true,
  showBarsOnPageScrollTop: true,
  scrollTopOnNavbarClick: true,
  notificationTitle: 'Wild Dusk',
  notificationHold: 2000,
  notificationCloseIcon: true,
  statusbarOverlay: false,
  scrollTopStatusbarClick: true
});

var $$ = Dom7;

var wdview = wd.addView('.view-main');