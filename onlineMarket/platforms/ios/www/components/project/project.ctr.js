(function() {

  "use strict";

  angular
    .module('ngProjects')
    .controller('projectsController', function($scope, $mdSidenav, $mdDialog, $mdToast, projectsFactory) {
     projectsFactory.getProjects().then(function(data) {
        $scope.projects = data.data;
        $scope.categories = getCategories($scope.projects);
      });

      var contact = {
        name: "Farid Marashinia",
        phone: "(000) 000-000",
        email: "fmarashi@uab.edu"
      }

      function showToast(message) {
        $mdToast.show(
          $mdToast.simple()
            .content(message)
            .position('top, right')
            .hideDelay(3000)
        );
      }
        $scope.rightSidebar2 = function() {
            $scope.sidebarTitle = 'ABOUT US';
            $mdSidenav('right').open();
        }
        $scope.closeRightSidebar2 = function() {
            $scope.project = {};
            $mdSidenav('right').close();
        }
        


        $scope.rightSidebar1 = function() {
            $scope.sidebarTitle = 'CONTACT';
            $mdSidenav('right').open();
        }
        $scope.closeRightSidebar1 = function() {
            $scope.project = {};
            $mdSidenav('right').close();
        }

      $scope.openSidebar = function() {
        $scope.sidebarTitle = 'Add an Item';
        $mdSidenav('left').open();
      }

      $scope.closeSidebar = function() {
        $scope.project = {};
        $mdSidenav('left').close();
      }

      $scope.saveProject = function(project) {
          if(project) {
          $scope.project.contact = contact;
          $scope.projects.push(project);
          $scope.project = {};
          $scope.closeSidebar();
          showToast('Item Saved');
        }
      }

      $scope.editProject = function(project) {
        $scope.editing = true;
          $scope.openSidebar();
        $scope.sidebarTitle = 'Edit Item';
        $scope.project = project;
          $mdSidenav('left').open();
      }

      $scope.saveEdit = function() {
        $scope.editing = false;
        $scope.project = {};
        $mdSidenav('left').close();
        showToast('Edit Saved');
      }

      $scope.deleteProject = function(event, project) {
        var confirm = $mdDialog.confirm()
            .title('Are you sure you want to delete ' + project.title + '?')
            .targetEvent(event)
            .ok('Yes')
            .cancel('No');
        $mdDialog.show(confirm).then(function() {
          var index = $scope.projects.indexOf(project);
          $scope.projects.splice(index, 1);
          showToast('Item Deleted');
        }, function() {
          $scope.status = project.title + ' is still here.';
        });
      };

    });
    
    function getCategories(projects) {

        var categories = [];

        angular.forEach(projects, function(ad) {
          angular.forEach(ad.categories, function(category) {
            categories.push(category);
          });
        });

        return _.uniq(categories);
      }

})();