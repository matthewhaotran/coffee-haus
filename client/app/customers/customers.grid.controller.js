(function(){
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersGridController', CustomersGridController)

    CustomersGridController.$inject = ['customersFactory'];

    function CustomersGridController(customersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.remove = remove;

        activate();

        function activate() {
            customersFactory
                .getAll()
                .then(function(customers) {
                    vm.customers = customers;
                })
        }

        function remove(customer) {
            customersFactory
                .remove(customer)
                .then(function() {
                    alert('You deleted the customer!');
                });

        }
    }
})();
