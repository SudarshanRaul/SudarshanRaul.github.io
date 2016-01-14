(function () {
    'use strict';
    
    angular
        .module("DrawApp")
        .config(config);
    
    function config($routeProvider) {
        $routeProvider
            .when('/editor', {
                templateUrl : 'partials/editor.html',
                controller : 'EditorCtrl',
                controllerAs : 'vm'
            })
            .otherwise({
                redirectTo : '/editor'
            });
    }
}());