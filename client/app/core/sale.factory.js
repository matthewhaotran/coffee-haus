(function () {
    'use strict';

    angular
        .module('app')
        .factory('salesFactory', salesFactory)

    salesFactory.$inject = ['$http'];

    function salesFactory($http) {
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
                .get('/api/sale/')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/sale/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(sale) {
            return $http
                .post('/api/sale/', sale)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(sale) {
            return $http
                .put('/api/sale/' + sale.id, sale)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(sale) {
            return $http
                .delete('/api/sale/' + sale.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
