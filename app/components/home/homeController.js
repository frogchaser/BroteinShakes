// create the controller and inject Angular's $scope
app.controller('homeController', [
  '$scope',
  '$http',
  function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    // var apiURI = 'http://localhost:8080/broteinshakes/';

    //$http.get(apiURI).success(function(response) {
    //  console.log(response);
    //});

  }
]);
