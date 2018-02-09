(function () {
    'use strict';
  
    angular
      .module('app.core')
      .factory('customersFactory', customersFactory)
  
    customersFactory.$inject = ['$http'];
  
    function customersFactory($http) {
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
  
      function create(customer) {
        return $http
          .post('/api/customer/', customer)
          .then(function(response) {
            return response.data;
          });
      }
  
      function update(customer) {
        return $http
          .put('/api/customer/' + customer.id, customer)
          .then(function(response) {
            return response.data;
          });
      }
  
      function remove(customer) {
        return $http
          .delete('/api/customer/' + customer.id)
          .then(function(response) {
            return response.data;
          });
      }
    }
  })();
  