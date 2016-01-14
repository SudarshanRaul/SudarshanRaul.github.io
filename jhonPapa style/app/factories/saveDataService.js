(function () {
    'use strict';
    
    angular
        .module('Momentum')
        .factory('saveDataService', saveDataService);
    
    saveDataService.$inject = ['$http'];
    
    function saveDataService($http) {
        return {
            saveData : saveData
        };
        
        function saveData(updatedData){
            return $http.post('/momentum.json', updatedData)
                .then(saveDataSuccess)
                .catch(saveDataFailed);

            function saveDataSuccess(response) {
                console.info('Data saved successfully.');
            }

            function saveDataFailed(error) {
                console.error('XHR failed saving data for ' + error.data);
            }
        }
        
    }
}());