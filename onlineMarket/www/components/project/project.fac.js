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
var database = firebase.database();
function writeUserData(title, description, price, email) {
    firebase.database().ref('users/' + title).set({
        username: description,
        email: email,
        price : price
    });
}