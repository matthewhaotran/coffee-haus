(function(){
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsDetailController', ProductsDetailController)

    ProductsDetailController.$inject = ['productsFactory', '$stateParams', '$state'];

    function ProductsDetailController(productsFactory, $stateParams, $state) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;
        vm.create = create;

        activate();

        function activate() {
            if ($stateParams.id) {
                productsFactory
                    .getById($stateParams.id)
                    .then(function (product) {
                        vm.product = product;
                    });
            } else {
                vm.product = {}
            }
        }

        function save(product) {
            productsFactory
                .update(product)
                .then(function(product) {
                    alert('You updated the drink!');
                    $state.go('product-grid');
                });
        }

        function create(product) {
            productsFactory
                .create(product)
                .then(function(product) {
                    vm.product = product;
                    alert('You created a drink!');
                    $state.go('product-grid');
                })
        }
    }
})();
