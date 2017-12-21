'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:NotesCtrl
 * @description
 * # NotesCtrl
 * Controller of the clientApp
 */
angular.module('mainApp')
  .controller('NotesCtrl', function ($scope, Note) {
    $scope.notes = Note.getList().$object;
  });

