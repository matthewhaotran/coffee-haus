(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('productFactory', productFactory)

    productFactory.$inject = ['$http'];

    function productFactory($http) {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() { }
    }
})();