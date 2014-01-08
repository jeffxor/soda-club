requirejs.config({
    baseUrl: '',
    paths: {
        'app': 'app/src/js',
        'jquery': 'lib/jquery/jquery',
        'angular': 'lib/angular/angular',
        'angular-route': 'lib/angular-route/angular-route',
        'underscore': 'lib/underscore/underscore'
    },
    shim: {
        'jquery': {
            exports: 'jquery'
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'underscore': {
            exports: '_'
        }
    },
    map: {
        '*': {
            'css': 'lib/require-css/css'
        }
    }
});

requirejs(['angular', 'angular-route', 'underscore', 'app/app', 'css!lib/bootstrap/dist/css/bootstrap'],
    function (angular) {
        angular.bootstrap(document, ['meanSeed']);
    });