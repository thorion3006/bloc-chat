(function() {
    function Message($firebaseArray, $cookies) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function(room) {
                var newRef = ref.orderByChild('roomID').equalTo(room.$id);
                messages = $firebaseArray(newRef);
                return messages;
            },
            
            send: function(newMessage, room) {
                messages.$add({
                    content: newMessage,
                    roomID: room,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    username: $cookies.get('blocChatCurrentUser')
                });
            }
        };
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();