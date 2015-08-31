// create the controller and inject Angular's $scope
app.controller('homeController', [
  '$scope',
  '$cookies',
  '$cookieStore',
  '$window',
  '$location',
  '$http',
  function($scope, $cookies, $cookieStore, $window, $location, $http) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    var apiURI = 'http://localhost:8080/broteinshakes/';
    var user = $cookies.getObject('user');
    if (user) {

    } else {
      $location.url('login');
    }

    //$http.get(apiURI).success(function(response) {
    //    console.log(response);
    //    $window.location.href = response.location;
    //  });

  }
]);
