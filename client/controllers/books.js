var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    console.log('BooksController Loded...');
    $scope.getBooks = function() {
        $http({
            method: 'GET',
            url: 'api/books'
        }).then(function(response) {
            $scope.books = response.data;
            console.log($scope.books);
            console.log("Letest Books Show Successfully");
        }, function(error) {
            console.log("Unable to fetch please check...");
        });
    };

    $scope.getBook = function() {
        var id = $routeParams.id;
        $http({
            method: 'GET',
            url: 'api/books/' + id
        }).then(function(response) {
            $scope.book = response.data;
            console.log($scope.books);
            console.log("Letest Books Show Successfully");
        }, function(error) {
            console.log("Unable to fetch please check...");
        });
    };
}]);