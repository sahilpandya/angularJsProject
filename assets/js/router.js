(function() {
    'use strict';
    angular.module('AppSecure')
    .config(function($httpProvider, $routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'assets/partials/home.html',
                controller: 'MainController'
            })
            .when('/settings', {
                templateUrl: 'assets/partials/settings.html',
                controller: 'SettingsController'
            })
            .when('/programs', {
                templateUrl: 'assets/partials/programs.html',
                controller: 'MainController'
            })
            .when('/reports', {
                templateUrl: 'assets/partials/reports.html',
                controller: 'MainController'
            })
            .when('/report-bug', {
                templateUrl: 'assets/partials/report-bug.html',
                controller: 'MainController'
            })
            .when('/company-profile', {
                templateUrl: 'assets/partials/company-profile.html',
                controller: 'MainController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
})();