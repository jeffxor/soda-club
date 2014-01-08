"use strict";

define([
        './feature1/services/feature1Service'
    ],
    function(feature1Service) {

        return {
            'meanSeed.feature1.services.feature1Service': feature1Service
        };
    });