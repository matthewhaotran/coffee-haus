(function(){
    'use strict';

    angular
        .module('app.core')
        .controller('customerController', customerController)

    // customerController.$inject = ['$location'];

    function customerController() {
        /* jshint validthis:true */
        var vm = this;
        vm.message = "Test angular";

        activate();

        function activate() { }
    }
})();   