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
    
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if(!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/set-user.html',
                controller: 'UserModalInstanceCtrl',
                backdrop: false,
                size: 'sm'
            });
            
            currentUser = $cookies.get('blocChatCurrentUser');
        }
    }
    
    angular
        .module('blocChat', ['ui.router', 'ui.bootstrap', 'firebase', 'ngCookies'])
        .config(config)
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();