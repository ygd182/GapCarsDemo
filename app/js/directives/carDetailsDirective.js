'use strict';

carDirectives.directive('cardetailsdirective', function () {
    return {
        restrict: 'A',
        scope:{ carid:'='},
        templateUrl: 'partials/car-detail-partial.html',
        controller: ['$scope', 'carServices', function($scope, carServices) {
          function onGetPhoneDetailSuccess(response){
            $scope.car = response.data;
          }

          function onGetPhoneDetailFailure(data, status, headers, config){
              console.log('error');
          }
          carServices.getCarById($scope.carid).then(onGetPhoneDetailSuccess, onGetPhoneDetailFailure);

        }]
    };
});
