(function () {
    'use strict';

    angular
        .module('app')
        .factory('customerFactory', customerFactory)

    customerFactory.$inject = ['$http'];

    function customerFactory($http) {
        var service = {
            getall: getAll,
            getById: getById,
            create: create,
            update: update,
            remove: remove
        };

        return service;

        function getAll() {
            return $http
                .get('/api/customer/')
                .then(function (response) {
                    return response.data;
                });
        }

        function getById(id) {
            return $http
                .get('/api/customer/' + id)
                .then(function (response) {
                    return response.data;
                });
        }

        function create(note) {
            return $http
                .post('/api/customer/', note)
                .then(function (response) {
                    return response.data;
                });
        }

        function update(note) {
            return $http
                .put('/api/customer/' + note.id, note)
                .then(function (response) {
                    return response.data;
                });
        }

        function remove(note) {
            return $http
                .delete('/api/customer/' + note.id)
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();
