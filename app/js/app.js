'use strict';

/* App Module */

var carApp = angular.module('carApp', [
  'ngRoute',
  'carAnimations',

  'carControllers',
  'carDirectives',
  //'phonecatFilters',
  'carServices'
]);

carApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/cars', {
        templateUrl: 'partials/car-list.html',
        controller: 'CarListCtrl'
      }).
      when('/cars/:carId', {
        templateUrl: 'partials/car-detail.html',
        controller: 'CarDetailCtrl'
      }).
      when('/cars/:carId1/:carId2', {
        templateUrl: 'partials/car-detail.html',
        controller: 'CarDetailCtrl'
      }).
      when('/cars/:carId1/:carId2/:carId3', {
        templateUrl: 'partials/car-detail.html',
        controller: 'CarDetailCtrl'
      }).
      otherwise({
        redirectTo: '/cars'
      });
  }]);