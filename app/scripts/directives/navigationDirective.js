angular.module('myApp')
.directive('navigationDirective', function(){
  return {
    restrict: 'EA',
    templateUrl: 'assets/views/navigationdirective.html'
  };
});
