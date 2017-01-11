(function() {
  'use strict'

  var navBar = {
    controller: navCrtl,
    templateUrl: 'app/components/navBar/navBar.html'
  }

  angular
    .module('origamiCreativa')
    .component('navBar', navBar)

  function navCrtl() {
    var nav = this;

    
  };

})();
