(function () {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsGridController', ProductsGridController)

    ProductsGridController.$inject = ['productsFactory', '$state'];

    function ProductsGridController(productsFactory, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.remove = remove;

        activate();

        function activate() {
            productsFactory
                .getAll()
                .then(function (products) {
                    vm.products = products;
                })
        }

        function remove(product) {
            productsFactory
                .remove(product)
                .then(function () {
                    alert('You deleted the drink!');
                    activate();
                });

        }
    }
})();
