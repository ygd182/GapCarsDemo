carControllers.controller('CarDetailCtrl', ['$scope', '$routeParams', 'carServices',
  function($scope, $routeParams, CarServices) {


    function init(){
      $scope.carIdArray = [];
      for (var property in $routeParams) {
          if ($routeParams.hasOwnProperty(property)) {

              $scope.carIdArray.push($routeParams[property])
          }
      }
    }
    init();
}]);