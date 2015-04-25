angular.module( 'sample.home', [
'auth0'
])
.controller( 'HomeCtrl', function HomeController( $scope, auth, $http, $location, store ) {

  $scope.auth = auth;

  $scope.callApi = function() {
    // Just call the API as you'd do using $http
    $http({
      url: 'http://localhost:8080/spring-security-auth0-api-example-0.2-SNAPSHOT/secured/ping',
      method: 'GET'
    }).then(function(data) {
      alert("We got the secured data successfully");
	  console.log('data : ' + data.value);
    }, function(response) {
      if (response.status == 0) {
        alert("Please download the API seed so that you can call it.");
      }
      else {
        alert(response.data);
      }
    });
  }

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $location.path('/login');
  }

});
