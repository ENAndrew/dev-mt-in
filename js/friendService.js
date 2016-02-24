/* global angular, $scope */

(function(){    
    angular.module('devMtIn').service('friendService', function($http){
        
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
            })
                    .then(function(result){
                        $scope.checkForProfile();
            });
        };
        
    });

}());
