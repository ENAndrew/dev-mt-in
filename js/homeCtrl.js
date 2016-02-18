/* global angular */

(function(){
    
    angular.module('devMtIn').controller('homeCtrl', function($scope, profileService){
        
        $scope.editing = false;

        $scope.myProfile = {
            friends: [{name: 'Bryan'}, {name: 'Ryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}],
            myName: '',
            myLikes: '',
            myFavColor: ''
        };
        
        $scope.sortOptions = [{
            display: 'Ascending',
            value: false
        },
        {
            display:'Descending',
            value: true
        }];
    
    
        profileService.serviceTest();
        
        $scope.saveProfile = function(profile) {
            
            profile.Service.saveProfile(profile);
            console.log($scope.myProfile);
            $scope.editing = false;
            
        };
        
       
    });
    
}());

