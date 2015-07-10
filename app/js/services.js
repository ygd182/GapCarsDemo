'use strict';

/* Services */

var carServices = angular.module('carServices', []);

carServices.service('carServices', ['$http',
  function($http) {
  	var getCars = function () {
  		return $http.get('cars/cars.json');
  	};

  	var getCarById = function(id) {
  		return $http.get('cars/'+id+'.json');
  	};

  	return {
  			 getCars: getCars,
			   getCarById: getCarById
		};
  }]);