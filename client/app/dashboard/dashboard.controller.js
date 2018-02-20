(function(){
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboardController', dashboardController)

    // dashboardController.$inject = ['$location'];

    function dashboardController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();