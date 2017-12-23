'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('NotesCtrl', function ($scope, Note) {
    $scope.notes = Note.getList().$object;

    //Change month from number to string
    $scope.monthInString = ["January", "February", "March", "April",
      "May", "June", "July", "August", "September",
      "October", "November", "December"];

    //Test new line
  });

