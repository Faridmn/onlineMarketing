'use strict';

angular.module('ngProjects.About', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/About', {
            templateUrl: 'components/project/About.html',
            controller: 'AboutCtrl'
        });
    }])

    .controller('AboutCtrl', [function() {

    }]);