(function () {
    'use strict';

    angular
        .module('app.customers')
        .controller('CustomersDetailController', CustomersDetailController)

    CustomersDetailController.$inject = ['customersFactory', '$stateParams', '$state'];

    function CustomersDetailController(customersFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;
        vm.create = create;

        activate();

        function activate() {
            if ($stateParams.id) {
                customersFactory
                    .getById($stateParams.id)
                    .then(function (customer) {
                        vm.customer = customer;
                    });
            } else {
                vm.customer = {}
            }
        }

        function save(customer) {
            customersFactory
                .update(customer)
                .then(function(customer) {
                    alert('You updated the customer!');
                    $state.go('customer-grid');
                });
        }

        function create(customer) {
            customersFactory
                .create(customer)
                .then(function(customer) {
                    vm.customer = customer;
                    alert('You created a customer!');
                    $state.go('customer-grid');
                })
        }
        
    }
})();
