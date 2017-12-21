'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the clientApp
 */
angular.module('mainApp')
  .controller('MoviesCtrl', function ($scope, Movie) {
    $scope.movies = Movie.getList().$object;
  });
