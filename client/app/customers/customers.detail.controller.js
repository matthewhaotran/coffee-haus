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
        vm.saveOrCreate = saveOrCreate;

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
                })
        }

        function saveOrCreate (customer) {
            if(customer.id === null) {
                create(customer);
            } else {
                update(customer);
            }
        }

        
    }
})();
