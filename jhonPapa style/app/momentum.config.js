(function () {
    'use strict';
    
    angular
        .module('Momentum')
        .config(config);
    
    function config($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'dashboard/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    }
}());