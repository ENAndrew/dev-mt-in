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
        }();  //immediately invoked
        
        $scope.saveProfile = function(profile) {
            profileService.saveProfile(profile);
            $scope.editing = false;        
        };
        
        $scope.deleteProfile = function() {
            profileService.deleteProfile();
            $scope.myProfile = profileService.checkForProfile();
        };
        
        $scope.findFriend = function(query) {
            console.log('findFriend ran');
            friendService.findFriend($scope.myProfile._id, query);
            
        };
        
        $scope.addFriend = function(friendId) {
            friendService.addFriend($scope.myProfile._id, friendId);
        };
       
    });
    
}());

