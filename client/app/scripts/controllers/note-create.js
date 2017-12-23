'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NoteCreateCtrl
 * @description
 * # NoteCreateCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NoteCreateCtrl', function ($scope, Note, $location) {
    $scope.note = {};
    var today = new Date();
    var date = {
      month: today.getMonth() + 1,
      day: today.getDate(),
      year: today.getFullYear()
    };
    $scope.note.date = date;

    //Bind fucntions
    $scope.saveNote = function() {
      Note.post($scope.note).then(function() {
        $location.path("/notes");
      });
    };
  });
