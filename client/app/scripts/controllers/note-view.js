'use strict';

angular.module('clientApp')
  .controller('NoteViewCtrl', function ($scope, $routeParams, Note) {
    $scope.note = Note.one($routeParams.id).get().$object;
    //_.replace($scope.note.body, /\r?\n/g, '<br />');
    var note = $scope.note;
  });
