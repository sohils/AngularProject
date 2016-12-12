(function () {
  'use strict';
angular.module('myFirstApp',[])

.controller('controller1',function ($scope) {
  $scope.name = "";
  $scope.totalValue=0;
  $scope.displayNumeric=function () {
    //var totalNumVal=calculateStringValue($scope.name);
    $scope.totalValue=calculateStringValue($scope.name);
  }
});

function calculateStringValue(string) {
  var total=0;
  for(var i=0;i<string.length;i++){
    total+=string.charCodeAt(i);
  }
  return total;
}

})();
