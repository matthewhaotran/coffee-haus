(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        

        // Custom modules
        'app.core',

        // 3rd Party Modules
        'ui.router'

    ]).config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/dashboard');

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            controller: 'dashboardController as dashboardCtrl',
            templateUrl: 'app/dashboard/dashboard.template.html'
        });
    };
})();
