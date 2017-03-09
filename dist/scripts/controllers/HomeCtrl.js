(function() {
    function HomeCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        $scope.openModal = function(){
           $uibModal.open({
                    templateUrl: '/templates/newroom.html',
                    size: 'md',
                    controller: 'ModalInstanceCtrl',
                    animation: true
                });
            };
            return $scope.rooms;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();