(function () {
    'use strict';
    var app = angular.module('AgeRangerApp');
    app.controller('homeController', function ($scope, $http, $location) {
        $scope.loader = true;
        $http({
            method: 'GET',
            url: '/people '
        }).then(function successCallback(response) {
            $scope.peopleList = response.data;
            $scope.loader = false;
            $scope.editablilty = new Array();
            for (var i = 0; i < $scope.peopleList.length; i++) {
                $scope.editablilty[i] = true;
            }

            $scope.hideEdit = new Array();
            for (var i = 0; i < $scope.peopleList.length; i++) {
                $scope.hideEdit[i] = false;
            }
        }, function errorCallback(response) {
            $location.path("#/Error")
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });
        

        $scope.edit = function(index)
        {
            $scope.hideEdit[index] = !$scope.hideEdit[index];
            $scope.editablilty[index] = !$scope.editablilty[index];
        }
        $scope.saveEdit = function(index)
        {
            $scope.edit(index);
            $http({
                method: 'PUT',
                url: '/people/' + $scope.peopleList[index].Id,
                data: $scope.peopleList[index]
            }).then(function successCallback(response) {
            $scope.peopleList[index] = response.data;
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                $location.path("#/Error")
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }
        $scope.delete = function(index)
        {
            var result = confirm("Are you sure you want to delete?");
            if (result) {

                $http({
                    method: 'DELETE',
                    url: '/people/' + $scope.peopleList[index].Id,
                }).then(function successCallback(response) {
                    $scope.peopleList.splice(index, 1);
                    $scope.hideEdit.splice(index, 1);
                    $scope.editablilty.splice(index, 1);
                    // this callback will be called asynchronously
                    // when the response is available
                }, function errorCallback(response) {
                    $location.path("#/Error")
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
            }
        }
    });

   

})();
