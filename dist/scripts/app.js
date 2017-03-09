(function() {
    function config($locationProvider, $stateProvider, $urlRouterProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/templates/home.html",
                controller: "HomeCtrl as home"
            });
    }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase'])
        .config(config);
})();