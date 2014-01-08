'use strict';

define([],

    function () {
        var feature1Controller = function ($scope) {

            $scope.test = "John";
        };

        feature1Controller.$inject = ['$scope'];

        return feature1Controller;
    });