(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('productFactory', productFactory)

    productFactory.$inject = ['$http'];

    function productFactory($http) {
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
                    .get('/api/product')
                    .then(function(response) {
                        return response.data;
                    });
        }
    }
})();