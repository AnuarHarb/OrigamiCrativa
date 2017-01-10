(function() {
  'use strict'

  var sideMenu = {
    controller: sideCrl,
    templateUrl: 'app/components/sideMenu/sideMenu.html'
  }

  angular
    .module('origamiCreativa')
    .component('sideMenu', sideMenu)

  function sideCrl() {

  }

})();
