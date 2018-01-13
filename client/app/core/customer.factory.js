(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('customerFactory', customerFactory)

    customerFactory.$inject = ['$http'];

    function customerFactory($http) {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            
        }
    }
})();