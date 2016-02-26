/* global angular */

(function(){
    
    angular.module('devMtIn').controller('homeCtrl', function($scope, profileService, friendService){
        
        $scope.editing = false;
        
        $scope.sortOptions = [{
            display: 'Ascending',
            value: false
        },
        {
            display:'Descending',
            value: true
        }];
    
    
        profileService.serviceTest();
        
        $scope.checkForProfile = function() {
          var profileId = JSON.parse(localStorage.getItem('profileId'));
          
          if(profileId) {
              profileService.checkForProfile(profileId.profileId)
                      .then(function(profile){
                          $scope.myProfile = profile.data;
              })
                      .catch(function(err){
                          console.error(err);
              });
          };
          console.log('checkForProfile ran');
        };
        
        $scope.checkForProfile();
        
        $scope.saveProfile = function(profile) {
            profileService.saveProfile(profile);
            $scope.editing = false;        
        };
        
        $scope.deleteProfile = function() {
            profileService.deleteProfile();
            $scope.myProfile = profileService.checkForProfile();
        };
        
        $scope.findFriend = function(query) {
            friendService.findFriend($scope.myProfile._id, query)
                    .then(function(result){
                        $scope.potentialFriends = result;
            }); 
        };
        
        $scope.addFriend = function(friendId) {
            console.log(friendId);
            friendService.addFriend($scope.myProfile._id, friendId)
                    .then(function(result){
                        console.log(result.data);
                        $scope.checkForProfile();
            });
        };
        
        $scope.removeFriend = function(friendId) {
            friendService.removeFriend($scope.myProfile._id, friendId)
                    .then(function(){
                        $scope.checkForProfile();
            });
        };
       
    });
    
}());

