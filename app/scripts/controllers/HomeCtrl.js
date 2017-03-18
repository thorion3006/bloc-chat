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
        };
        
        $scope.send = function(newMessage) {
            var roomID = $scope.activeRoom.$id;
            Message.send(newMessage, roomID);
            $scope.message.$setPristine();
        };
        
        $scope.getTime = function(epochTime) {
            var today = new Date().toLocaleDateString();
            var time = new Date(epochTime);
            var day = time.toLocaleDateString();
            var localTime = time.toLocaleString();
            if(day !== today){
                return localTime;
            }else if(day === today){
                return time.toLocaleTimeString();
            }  
        };
        
        return $scope.rooms;
    }
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$uibModal', HomeCtrl]);
})();