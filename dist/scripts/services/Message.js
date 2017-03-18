(function() {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(room) {
                var newRef = ref.orderByChild('roomID').equalTo(room.$id);
                messages = $firebaseArray(newRef);
                return messages;
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();