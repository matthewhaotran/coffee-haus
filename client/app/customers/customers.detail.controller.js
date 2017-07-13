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
                })
        }

        
    }
})();
