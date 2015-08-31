app.controller('loginController', [
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

    //$http.get(apiURI).success(function(response) {
    //    console.log(response);
    //    $window.location.href = response.location;
    //  });
    $('#loginModal').modal('show');

    $scope.checkUser = function(user) {

      if (user.email === userList[0].email &&
        user.password === userList[0].password) {
        console.log("success");
        $cookies.putObject('user', user);
        $('#loginModal').modal('hide');
        $('body').removeClass('modal-open');

        $('.modal-backdrop').remove();
        $location.url('/');
      } else {
        console.log("fail");
      }
    };

  }
]);
var userList = [{
  email: 'user@email.com',
  password: 'pass'
}];
