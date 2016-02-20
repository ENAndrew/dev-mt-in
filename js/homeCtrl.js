/* global angular */

(function(){
    
    angular.module('devMtIn').controller('homeCtrl', function($scope, profileService){
        
        $scope.editing = false;
        
        //this is now held in localStorage via service
//        $scope.myProfile = {
//            friends: [{name: 'Bryan'}, {name: 'Ryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}],
//            name: '',
//            myLikes: '',
//            myFavColor: ''
//        };
        
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
        
       
    });
    
}());

