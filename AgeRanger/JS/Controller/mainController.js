(function () {
    'use strict';
    var app = angular.module('AgeRangerApp', ['ngRoute']);
    app.controller('mainController', mainController);


    $('#tabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })


    function mainController($scope)
    {
    }
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: '../../UI/Template/Home.html',
            controller: 'homeController'
        })
        .when('/Search', {
            templateUrl: '../../UI/Template/Search.html',
            controller: 'searchController'
        })
        .when('/Add', {
            templateUrl: '../../UI/Template/Add.html',
            controller: 'addController'
        })
        .when('/error', {
            templateUrl: '../../UI/Template/Error.html',
        })
        .otherwise({ redirectTo: '/' });
    }]);

})();
