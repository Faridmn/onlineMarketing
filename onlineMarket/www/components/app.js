(function() {

  "use strict";

  angular
    .module('ngProjects', ['ngMaterial'])
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('grey');
    });

})();

