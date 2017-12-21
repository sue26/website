'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('mainApp')
  .controller('MainCtrl', function ($scope, $interval, $timeout) {
    // Welcome Statement
    var interval = {
      "hello":  500,
      "summary":  100,
      "break":  1000
    };
    welcomePrintLetterByLetter($scope, $interval, $timeout, interval);
    
    //TODO: anchor

  });

function welcomePrintLetterByLetter($scope, $interval, $timeout, interval) {
  /** print helloText letter by letter (0.5 sec interval)
   ** then wait for 1 sec (e.g. $timeout)
   ** then print summaryText letter by letter (0.1 sec interval) */
  $scope.helloText = "";
  var helloText = "HELLO";
  $scope.summaryText = "";
  var summaryText = "Welcome to my website!";
  var helloInterval = interval.hello;
  var summaryInterval = interval.summary;
  var breakInterval = interval.break;

  var i = 0;

  $interval(function() {
    $scope.helloText += helloText.charAt(i);
    i++;
  }, helloInterval, helloText.length).then(function() {
    $timeout(function() {
      i = 0;
      $interval(function () {
        $scope.summaryText += summaryText.charAt(i);
        i++;
      }, summaryInterval, summaryText.length)
    },breakInterval);
  });

}
