(function() {
  'use strict'

  var contactoOrigami= {
    controller: contactoCrtl,
    templateUrl: '/app/components/contactoOrigami/contactoOrigami.html'
  }

  angular
    .module('origamiCreativa')
    .component('contactoOrigami', contactoOrigami)

  function contactoCrtl() {
    var contacto = this;

    function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });
      }

  }
})();


// Map API Key: AIzaSyBZDFCkjX9lqZgTQc2Qf4DWT4NiPdi3hxQ
