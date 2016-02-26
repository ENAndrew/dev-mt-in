/* global angular, $scope */

(function(){    
    angular.module('devMtIn').service('friendService', function($http, $q){
        
        var baseUrl = 'http://connections.devmounta.in/';
        
        this.findFriend = function(userId, query) {
            return $http({
                method: 'GET',
                url: baseUrl + 'api/friends/' + userId + '?name=' + query  
            })
                    .then(function(result){
                        return result.data;
            });        
        };
        
        this.addFriend = function(userId, friendId){
            return $http({
                method: 'PUT',
                url: baseUrl + 'api/friends/' + userId,
                data: { friendId: friendId}
            });
        };
        
        this.removeFriend = function(userId, friendId) {
            return $http({
              method: 'PUT',
              url: baseUrl + '/api/friends/remove/' + userId,
              data: {friendId: friendId}
            });
        };
        
        this.findFriendsFriends = function(profile) {
            var index = 0;
            var deferred = $q.defer();
            
            console.log(profile);
            
            console.log('findFriendsFriends ran');
            
            function getNextFriend() {
                if(profile.friends[index]){
                    $http({
                        method: 'GET',
                        url: baseUrl + '/api/friends-friends/' + profile.friends[index]._id
                    })
                            .then(function(friends){
                                profile.friends[index].friends = friends.data;
                                index++;
                                getNextFriend();
                    })
                            .catch(function(err){
                                return console.log(err);
                    });
                } else {
                    deferred.resolve(profile);
                    return deferred.promise;
                }
            }
            
            getNextFriend();
        };
        
        
    });

}());
