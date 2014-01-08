'use strict';

define([
    './mainController',
    './feature1/controllers/feature1Controller'
],
    function (mainController, feature1Controller) {

        return {
            'meanSeed.controllers.mainController': mainController,
            'meanSeed.feature1.controllers.feature1Controller': feature1Controller
        };
    });