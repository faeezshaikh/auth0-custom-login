angular.module( 'sample.login', [
  'auth0'
])
.controller( 'LoginCtrl', function HomeController( $scope, auth, $location, store) {

  $scope.login = function() {
 
    auth.signin({
	
      connection: 'tangodb',
      email: $scope.email,
      password: $scope.password
    }, function(profile, token) {
      store.set('profile', profile);
      store.set('token', token);
      $location.path("/");
    }, function(error) {
      console.log("There was an error logging in", error);
    });
  }
  
  
});
