'use strict';

define(['./feature1/filters/feature1Filter'],
    function (feature1Filter) {
        return {
            'myFilter': feature1Filter
        };
    });