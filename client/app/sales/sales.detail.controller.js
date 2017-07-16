(function () {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController)

    SalesDetailController.$inject = ['salesFactory', '$stateParams', '$state', 'productsFactory', 'saleitemFactory'];

    function SalesDetailController(salesFactory, $stateParams, $state, productsFactory, saleitemFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;
        vm.create = create;
        vm.addProduct = addProduct

        activate();

        function activate() {
            salesFactory
                .getById($stateParams.id)
                .then(function (sale) {
                    vm.sale = sale;
                });

            productsFactory
                .getAll()
                .then(function(products) {
                    vm.products = products;
                }); 
        }

        function save(sale) {
            salesFactory
                .update(sale)
                .then(function (sale) {
                    alert('You updated the drink!');
                    $state.go('sale-grid');
                });
        }

        function create(sale) {
            salesFactory
                .create(sale)
                .then(function (sale) {
                    vm.sale = sale;
                    alert('You created a drink!');
                    $state.go('sale-grid');
                })
        }

        function addProduct(product) {
            alert(product.name);
            saleitemFactory
                .create({
                    saleId: $stateParams.id,
                    productId: product.id,
                    quantity: 1
                })
                .then(function() {
                    activate();
                });
        }

        
    }
})();
