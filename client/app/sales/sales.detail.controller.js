(function(){
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController)

    SalesDetailController.$inject = ['salesFactory', '$stateParams', '$state'];

    function SalesDetailController(salesFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;
        vm.create = create;

        activate();

        function activate() {
            if ($stateParams.id) {
                salesFactory
                    .getById($stateParams.id)
                    .then(function (sale) {
                        vm.sale = sale;
                    });
            } else {
                vm.sale = {}
            }
        }

        function save(sale) {
            salesFactory
                .update(sale)
                .then(function(sale) {
                    alert('You updated the drink!');
                    $state.go('sale-grid');
                });
        }

        function create(sale) {
            salesFactory
                .create(sale)
                .then(function(sale) {
                    vm.sale = sale;
                    alert('You created a drink!');
                    $state.go('sale-grid');
                })
        }
    }
})();
