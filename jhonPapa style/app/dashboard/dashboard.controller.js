(function () {
    'use strict';

    angular
        .module('Momentum')
        .controller('DashboardCtrl', DashboardCtrl);

    
    DashboardCtrl.$inject = ['getDataService', 'saveDataService'];
    
    function DashboardCtrl(getDataService) {
        var vm = this;
        vm.collectionOriginal = [];
        
        initializeData();
        
        function initializeData() {
            return getData().then(function () {
                console.info('Activated Dashboard view');
            });
        }
        
        function getData() {
            return getDataService.getData()
                .then(function (data) {
                    vm.collectionOriginal = data;
                    vm.collection = angular.copy(vm.collectionOriginal);
                });
        }
        
        vm.collection = angular.copy(vm.collectionOriginal);
        vm.showDetails = [];
        vm.editDetails = [];
        vm.displayNodeDetails = false;
        vm.editNodeDetails = false;
        vm.showImage = false;
        vm.showNode = showNode;
        vm.editNode = editNode;
        vm.saveNode = saveNode;
        vm.unSaveNode = unSaveNode;
        vm.addImage = addImage;
        
        function showNode(currentObject) {
            if ('isSelected' in vm.showDetails) {
                delete vm.showDetails.isSelected;
            }
            if (vm.editNodeDetails) {
                vm.editNodeDetails = false;
            }
            if (vm.showImage) {
                vm.showImage = false;
            }
            vm.showDetails = currentObject;
            vm.displayNodeDetails = true;
            vm.showDetails.isSelected = true;
        }
        
        function editNode() {
            if (vm.displayNodeDetails) {
                vm.displayNodeDetails = false;
            }
            vm.editDetails = vm.showDetails;
            vm.editNodeDetails = true;
        }
        
        function saveNode() {
            if ('isSelected' in vm.showDetails) {
                delete vm.showDetails.isSelected;
            }
            vm.displayNodeDetails = false;
            vm.editNodeDetails = false;
            //Send vm.collection to server
            vm.collectionOriginal = angular.copy(vm.collection);
        }
        
        function unSaveNode() {
            vm.displayNodeDetails = false;
            vm.editNodeDetails = false;
            vm.collection = angular.copy(vm.collectionOriginal);
        }
        
        function addImage() {
            if (!angular.isArray(vm.showDetails.equipments)) {
                vm.showDetails.equipments = [];
            }
            vm.showDetails.equipments.push(vm.temp.equipments);
            vm.temp.equipments = angular.copy({});
        }
    }
}());