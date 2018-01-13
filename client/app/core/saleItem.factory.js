(function(){
    'use strict';

    angular
        .module('app.core')
        .factory('saleItemFactory', saleItemFactory)

    saleItemFactory.$inject = ['$http'];

    function saleItemFactory($http) {
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() { }
    }
})();   