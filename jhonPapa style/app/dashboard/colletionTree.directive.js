(function () {
    'use strict';
    
    angular
        .module('Momentum')
        .directive('collection', collection);
    
    function collection() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'dashboard/colletionTree.directive.html',
            scope: {
                vm : '=',
                collection : '='
            }
        };
        return directive;
    }
}());