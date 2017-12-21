'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the clientApp
 */
angular.module('mainApp')
  .controller('NotesCtrl', function ($scope) {
    $scope.notes = [
      {
        title: "First Note",
        body: "Fist Body",
        date: {
          month: "Jan",
          day: "1",
          year: "2000"
        }
      },
      {
        title: "Second Note",
        body: "Second Body",
        date: {
          month: "Feb",
          day: "2",
          year: "2000"
        }
      }
    ]
  });
