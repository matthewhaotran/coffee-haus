(function () {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesGridController', SalesGridController)

    SalesGridController.$inject = ['salesFactory', '$state'];

    function SalesGridController(salesFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.remove = remove;

        activate();

        function activate() {
            salesFactory
                .getAll()
                .then(function (sales) {
                    vm.sales = sales;
                })
        }

        function remove(sale) {
            salesFactory
                .remove(sale)
                .then(function () {
                    alert('You deleted a sale!');
                    activate();
                });

        }
    }
})();
