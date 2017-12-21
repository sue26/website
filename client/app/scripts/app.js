'use strict';

/**
 * @ngdoc overview
 * @name mainApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('mainApp', [
    'ngRoute',
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://localhost:3000');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl',
        controllerAs: 'movies'
      })
      .when('/create/movie', {
        templateUrl: 'views/movie-add.html',
        controller: 'MovieAddCtrl',
        controllerAs: 'movieAdd'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie-view.html',
        controller: 'MovieViewCtrl',
        controllerAs: 'movieView'
      })
      .when('/movie/:id/delete', {
        templateUrl: 'views/movie-delete.html',
        controller: 'MovieDeleteCtrl',
        controllerAs: 'movieDelete'
      })
      .when('/movie/:id/edit', {
        templateUrl: 'views/movie-edit.html',
        controller: 'MovieEditCtrl',
        controllerAs: 'movieEdit'
      })
      .when('/notes', {
        templateUrl: 'views/notes.html',
        controller: 'NotesCtrl',
        controllerAs: 'notes'
      })
      .when('/note-create', {
        templateUrl: 'views/note-create.html',
        controller: 'NoteCreateCtrl',
        controllerAs: 'noteCreate'
      })
      .when('/note-view', {
        templateUrl: 'views/note-view.html',
        controller: 'NoteViewCtrl',
        controllerAs: 'noteView'
      })
      .otherwise({
        redirectTo: '/'
      });

  })
  .factory('MovieRestangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      });
    });
  })
  .factory('Movie', function (MovieRestangular) {
    return MovieRestangular.service('movie');
  })
  .factory('NoteRestangular', function (Restangular) {
    return Restangular.withConfig(function (RestangularConfigurer) {
      RestangularConfigurer.setRestangularFields({
        id: '_id'
      })
    });
  })
  .factory('Note', function (NoteRestangular) {
    return NoteRestangular.service('note');
  })
  .directive('youtube', function() {
    return {
      restrict: 'E',
      scope: {
        src: '='
      },
      templateUrl: 'views/youtube.html'
    };
  })
  .filter('trusted', function ($sce) {
        return function(url) {
          return $sce.trustAsResourceUrl(url);
    };
  });
