(function() {
    function HomeCtrl($scope, Room, Message, $uibModal) {
        $scope.rooms = Room.all;
        $scope.openModal = function(){
           $uibModal.open({
                    templateUrl: '/templates/newroom.html',
                    size: 'md',
                    controller: 'ModalInstanceCtrl',
                    animation: true
                });
            };
        
        $scope.getActiveRoom = function(room) {
            $scope.activeRoom = room;
            $scope.messages = Message.getByRoomId(room);
        }
        
        return $scope.rooms;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();