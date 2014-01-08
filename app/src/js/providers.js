"use strict";

define([
    './feature1/providers/feature1Provider'
],
    function (feature1Provider) {
        return {
            'meanSeed.feature1.providers.feature1Provider': feature1Provider
        };
    });