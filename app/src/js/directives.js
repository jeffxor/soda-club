'use strict';
define([
    './feature1/directives/feature1Directive'
],

function (feature1Directive)
{
    var directives = {
        'myElement': feature1Directive
    };

    return directives;
});
