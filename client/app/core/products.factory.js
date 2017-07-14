(function () {
    'use strict';

    angular
        .module('app')
        .factory('productsFactory', productsFactory)

    productsFactory.$inject = ['$http'];

    function productsFactory($http) {
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
                .get('/api/product/')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/product/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(product) {
            return $http
                .post('/api/product/', product)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(product) {
            return $http
                .put('/api/product/' + product.id, product)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(product) {
            return $http
                .delete('/api/product/' + product.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
