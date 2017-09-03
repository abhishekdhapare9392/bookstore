var myApp = angular.module('myApp');

myApp.controller('UsersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('UsersController Loded...');
    $scope.registerUser = function() {
        $http.post('/api/users/', $scope.user).then(function(response) {
            window.location.href = '#!/books';
        });
    };
}]);