'use strict';

function userCard(user) {

  if (LocalDb.Users.Located[user]) {

    var card = {
      name: LocalDb.Users.Located[user].username,
      rank: function () {
        if (LocalDb.Users.Located[user].rank == 4) {
          return "OP";
        } else if (LocalDb.Users.Located[user].rank == 3) {
          return "Admin";
        } else if (LocalDb.Users.Located[user].rank == 2) {
          return "Moderator";
        } else if (LocalDb.Users.Located[user].rank == 1) {
          return "Pro";
        } else if (LocalDb.Users.Located[user].rank == 0) {
          return "User";
        } else {
          return "Unknow";
        }
      }
    };
    var cardSend =
      '<div class="popup popup-unique" data-popup="' + card.name + '">' +
      '<div class="navbar">' +
      '<div class="navbar-inner">' +
      '<div class="left"><a href="" class="link back" onclick="wd.hidePreloader();wd.closeModal();"><i class="icon icon-back"></i>Aceptar</a></div>' +
      '<div class="center">' + card.name + '</div>' +
      '<div class="right"><i class="icon fa fa-address-card-o"></i></div>' +
      '</div>' +
      '</div>' +
      '<div class="list-block">' +
      '<ul>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-user-circle-o"></i>' +
      '</div>' +
      '<div class="item-inner">' +
      '<div class="item-title">Usuario</div>' +
      '<div class="item-after">' + card.name + '</div>' +
      '</div>' +
      '</li>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-bullseye"></i>' +
      '</div>' +
      '<div class="item-inner">' +
      '<div class="item-title">Rango</div>' +
      '<div class="item-after">' + card.rank() + '</div>' +
      '</div>' +
      '</li>' +
      '<li class="item-content">' +
      '<div class="item-media">' +
      '<i class="icon fa fa-bullseye"></i>' +
      '</div>' +
      '<div class="item-inner">' +
      '<div class="item-title">Rango</div>' +
      '<div class="item-after">' + card.rank() + '</div>' +
      '</div>' +
      '</li>' +
      '</ul>' +
      '</div>' +
      '</div>';
    return wd.popup(cardSend);
  } else {
    return console.error("Unexpected error has ocurred.");
  }
}