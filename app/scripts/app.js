(function() {
    function config('$locationProvider', '$stateProvider', '$urlRouterProvider') {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $urlRouterProvider.otherwise('/landing');
        
        $stateProvider
            .state('landing', {
                url: "/",
                templateUrl: "/templates/landing.html"
            });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();