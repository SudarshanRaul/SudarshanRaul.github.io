(function () {
    'use strict';
    
    angular
        .module('Momentum')
        .factory('getDataService', getDataService);
    
    getDataService.$inject = ['$http'];
    
    function getDataService($http) {
        return {
            getData : getData
        };
        
        function getData(){
            return $http.get('/momentum.json')
                .then(getDataSuccess)
                .catch(getDataFailed);

            function getDataSuccess(response) {
                return response.data;
            }

            function getDataFailed(error) {
                console.error('XHR failed for ' + error.data);
            }
        }
        
    }
}());