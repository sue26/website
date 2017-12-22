'use strict';

angular.module('clientApp')
  .controller('NoteViewCtrl', function ($scope, $routeParams, Note) {
    $scope.note = Note.one($routeParams.id).get().$object;
  });
