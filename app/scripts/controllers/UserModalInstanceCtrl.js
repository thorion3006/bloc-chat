(function() {
    function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
        $scope.create = function() {
            $cookies.put('blocChatCurrentUser', $scope.newUser);
            $uibModalInstance.close();
        };
    }
    
    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();