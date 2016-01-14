(function () {
    'use strict';
    
    angular
        .module('Momentum')
        .directive('member', member);
    
    function member($compile) {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: 'dashboard/member.directive.html',
            scope: {
                vm : '=',
                item : '='
            },
            link: link
        };
        return directive;
        
        function link(scope, element, attr) {
            if (angular.isArray(scope.item.architectureNodes)) {
                element.append("<collection vm='vm' collection='item.architectureNodes'></collection>");
                element.children(".collection-node").append("<span class='glyphicon glyphicon-menu-down collection-node-arrow pull-right'></span><div class='clearfix'></div><hr class='tree-line-sep'>");
            } else {
                element.children(".collection-node").append("<div class='clearfix'></div><hr class='tree-line-sep'>");
            }
            $compile(element.contents())(scope);
        }
    }
}());