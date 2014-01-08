define([
    'angular',
    'app/constants',
    'app/controllers',
    'app/directives',
    'app/factories',
    'app/filters',
    'app/providers',
    'app/services',
    'app/values'
],
    function (angular, constants, controllers, directives, factories, filters, providers,services, values) {

        var app = angular.module('meanSeed', ['ngRoute']);

        app.constant(constants);
        app.controller(controllers);
        app.directive(directives);
        app.factory(factories);
        app.filter(filters);
        app.provider(providers);
        app.service(services);
        app.value(values);

        app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

            $locationProvider.html5Mode(false).hashPrefix('!');

            $routeProvider.when('/view1', {

                controller: 'meanSeed.feature1.controllers.feature1Controller',
                templateUrl: '/app/src/templates/view1/view1.html'

                })
                .when('/', {

                    controller: 'meanSeed.controllers.mainController'
                })
                .otherwise(
                {
                    redirectTo: '/'

                });
        }]);
    });