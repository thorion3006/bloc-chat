(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        $scope.open = function(){
                $uibModal.open({
                templateUrl: '/templates/new-room.html',
                ariaLabelledBy: 'modal-header',
                ariaDescribedBy: 'modal-body',
                controller: 'ModalInstanceCtrl',
                size: 'md'
                });
            };
            return $scope.rooms;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();