// configure our routes
app.config(function($routeProvider) {
  $routeProvider

  // route for the home page
    .when('/', {
    templateUrl: 'app/components/home/home.html',
    controller: 'homeController'
  })

  // route for the about page
  .when('/about', {
    templateUrl: 'app/components/about/about.html',
    controller: 'aboutController'
  })

  // route for the contact page
  .when('/contact', {
    templateUrl: 'app/components/about/contact.html',
    controller: 'contactController'
  });
});
