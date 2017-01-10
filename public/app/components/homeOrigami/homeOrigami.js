(function() {
  'use strict'

  var homeOrigami = {
    controller: homeCtrl,
    templateUrl: 'app/components/homeOrigami/homeOrigami.html'
  }

  angular
    .module('origamiCreativa')
    .component('homeOrigami', homeOrigami)

  function homeCtrl() {
    var home = this;

    // Lista de fondos posibles junto con su color de letra y hover
    home.backgrounds = [
      { image: 'o.gif', color: '#fff', hover: '#4f4f4f' },
      { image: 'r.gif', color: '#000', hover: '#ff0033' },
      { image: 'i.gif', color: '#cdcdce', hover: '#000' },
      { image: 'g.gif', color: '#711f71', hover: '#fff' },
      { image: 'a.gif', color: '#00ffff', hover: '#fff' },
      { image: 'i.gif', color: '#cdcdce', hover: '#000' },
      { image: 'origami.gif', color: '#cdcdce', hover: '#000' },
      { image: 'operadora.gif', color: '#fff', hover: '#fff' },
      { image: 'zone.gif', color: '#ff0033', hover: '#000' },
    ];

    // Funcion para tener un fondo aleatorio y que cambie cada cierto tiempo
    home.cambiaFondo = function() {
      // Variable que toma el valor de un objeto de la lista home.backgrounds aleatoriamente.
      var random = home.backgrounds[Math.floor(Math.random()*home.backgrounds.length)]

      $('.home-background').css("background-image", "url(/assets/img/homeBackgrounds/" + random.image + ")");
      $('.side-menu a').css("color", random.color );
      $('.side-menu a').mouseover(function(){
        $(this).css("color", random.hover );
      })
      $('.side-menu a').mouseleave(function(){
        $(this).css("color", random.color );
      })
      setTimeout(home.cambiaFondo, 5000);
    };
    setTimeout(home.cambiaFondo, 5000);
  };

})();


// function homeCtrl($firebaseArray) {
//   var home = this;
//   home.nombre;
//   // Referencia a base de datos de Firebase
//   var refPortafolio = firebase.database().ref('portafolio');
//
//   home.subir = function() {
//     refPortafolio.push({
//       nombre: home.nombre,
//       cliente: home.cliente,
//       categoria: home.categoria,
//     })
//   };
//
//   refPortafolio.on('value', function(data) {
//     home.proyectos = data.val();
//     console.log(home.proyectos);
//   });
//
// }
//
// })();
