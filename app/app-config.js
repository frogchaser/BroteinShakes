app.config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {
      $routeProvider.when('/login', {
        templateUrl: '/app/components/login/login.html',
        controller: 'loginController'
      });

      $routeProvider.when('/', {
        templateUrl: '/app/components/home/home.html',
        controller: 'homeController'
      });

      $routeProvider.otherwise({
        redirectTo: '/login'
      });

    }
  ])
  .factory('authHttpResponseInterceptor', [
    '$q',
    '$location',
    function($q, $location) {
      return {
        response: function(response) {
          if (response.status === 250) {}
          if (response.status === 401) {
            console.log("Response 401");
          }
          return response || $q.when(response);
        },
        responseError: function(rejection) {
          if (rejection.status === 401) {
            console.log("Response Error 401", rejection);
            $location.path('/login')
              .search('returnTo', $location.path());
          }
          return $q.reject(rejection);
        }
      }
    }
  ])
  .config([
    '$httpProvider',
    function($httpProvider) {
      // Http Intercpetor to check auth failures for xhr requests
      $httpProvider.interceptors.push('authHttpResponseInterceptor');
    }
  ]);
