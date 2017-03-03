(function() {
    function ModalInstanceCtrl($scope, $uibModalInstance, Room) {
        $scope.rooms = Room.all;
            $scope.create = function() {
                $scope.rooms.$add($scope.newRoom);
                $uibModalInstance.close();
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'Room',  ModalInstanceCtrl]);
})();