(function() {
  'use strict'

  var homeOrigami = {
    controller: homeCtrl,
    templateUrl: 'app/components/homeOrigami/homeOrigami.html'
  }

  angular
    .module('origamiCreativa')
    .component('homeOrigami', homeOrigami)

  function homeCtrl($firebaseArray) {
    var home = this;
    home.nombre;
    // Referencia a base de datos de Firebase
    var refPortafolio = firebase.database().ref('portafolio');

    home.subir = function() {
      refPortafolio.push({
        nombre: home.nombre,
        cliente: home.cliente,
        categoria: home.categoria,
      })
    };

    refPortafolio.on('value', function(data) {
      home.proyectos = data.val();
      console.log(home.proyectos);
    });

  }

})();
