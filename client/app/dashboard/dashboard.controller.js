(function(){
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController)

    DashboardController.$inject = [];

    function DashboardController() {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();
