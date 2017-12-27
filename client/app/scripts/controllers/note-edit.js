'use strict';

angular.module('clientApp')
  .controller('NoteEditCtrl', function ($scope, Note, $routeParams, $location) {
    $scope.note = {};

    $scope.note = Note.one($routeParams.id).get().then(function (note) {
      $scope.note = note;
      $scope.title = $scope.note.title;
      $scope.body = $scope.note.body;

      var today = new Date();
      $scope.note.date = {
        month: today.getMonth() + 1,
        day: today.getDate(),
        year: today.getFullYear()
      };

      $scope.contentChanged = function() {
        if (!Object.is($scope.title, $scope.note.title) || !Object.is($scope.body, $scope.note.body)) {
          if(confirm("All of the edited content will be not saved.\nDo you wish to continue?")) {
            $location.path("/note/" + $routeParams.id);
            return true;
          } else {
            return false;
          };
        };
      };

      $scope.saveNote = function () {
        $scope.note.save().then(function () {
          $location.path("/note/" + $routeParams.id);
        });
      };
    });
  });
