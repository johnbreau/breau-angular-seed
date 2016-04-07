
  angular
    .module('myApp')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/views/main.html'
      })
      .when('/view1', {
        templateUrl: 'assets/views/view1.html'
      })
      .when('/view2', {
        templateUrl: 'assets/views/view2.html'
      })

      .otherwise({
        redirectTo: '/'
      });
  }
