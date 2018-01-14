(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('customerFactory', customerFactory)

    customerFactory.$inject = ['$http'];

    function customerFactory($http) {
        var service = {
            getAll: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                    .get('/api/customer')
                    .then(function(response) {
                        return response.data;
                    });
        }

        function getById(id) {
            return $http
                    .get('/api/customer/' + id)
                    .then(function(response) {
                        return response.data;
                    })
        }

        function create(customer) {
            return $http
                    .post('/api/customer', customer)
                    .then(function(response) {
                        return response.data;
                    })
        }
    }
})();