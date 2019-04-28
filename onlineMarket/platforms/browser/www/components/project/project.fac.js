(function() {

    "use strict";

    angular
        .module('ngProjects')
        .factory('projectsFactory', function($http) {

            function getProjects() {
                return $http.get('data/project.json');
            }

            return {
                getProjects: getProjects
            }

        });

})();