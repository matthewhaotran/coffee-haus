(function () {
    'use strict';

    angular
        .module('app.sales')
        .controller('SalesDetailController', SalesDetailController)

    SalesDetailController.$inject = ['salesFactory', '$stateParams', '$state', 'productsFactory', 'saleitemFactory', 'customersFactory'];

    function SalesDetailController(salesFactory, $stateParams, $state, productsFactory, saleitemFactory, customersFactory) {
        /* jshint validthis:true */
        var vm = this;
        vm.save = save;
        vm.create = create;
        vm.addProduct = addProduct
        vm.deleteProduct = deleteProduct;

        activate();

        function activate() {
            salesFactory
                .getById($stateParams.id)
                .then(function (sale) {
                    vm.sale = sale;
                });

            productsFactory
                .getAll()
                .then(function (products) {
                    vm.products = products;
                });

            customersFactory
                .getAll()
                .then(function (customers) {
                    vm.customers = customers;
                });
        }

        function save(sale) {
            sale.totalPrice = sale.saleItems.reduce(function(acc, current) {
                return acc + parseFloat(current.product.price);
            }, 0);
            salesFactory
                .update(sale)
                .then(function (sale) {
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
                .then(function () {
                    activate();
                });
        }

        function deleteProduct(saleItem) {
            saleitemFactory
                .remove(saleItem)
                .then(function () {
                    var indexOf = vm.sale.saleItems.indexOf(saleItem);
                    vm.sale.saleItems.splice(indexOf, 1);
                });
        }


    }
})();
