(function () {
    'use strict';

    angular
        .module('app')
        .factory('saleitemFactory', saleitemFactory)

    saleitemFactory.$inject = ['$http'];

    function saleitemFactory($http) {
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
                .get('/api/saleitem/')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/saleitem/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(saleitem) {
            return $http
                .post('/api/saleitem/', saleitem)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(saleitem) {
            return $http
                .put('/api/saleitem/' + saleitem.id, saleitem)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(saleitem) {
            return $http
                .delete('/api/saleitem/' + saleitem.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
