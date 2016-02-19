/* global angular */

(function(){
    
    angular.module('devMtIn').service('profileService', function($http){
        
        this.baseUrl = 'http://connections.devmounta.in/';
        
        this.checkForProfile = function(profileId){
            return $http({
                method: 'GET',
                url: this.baseUrl + 'api/profiles/' + profileId
            });
             console.log('service.checkForProfile checked');
//          if(localStorage.getItem('profile')) {
//            return JSON.parse(localStorage.getItem('profile'));  
//          };
        };
      
        
        this.serviceTest = function() {
            console.log('profileService is connected');
        };
        
        this.saveProfile = function(profile) {
            return $http({
               method: 'POST', //request method
               url: this.baseUrl + 'api/profiles', //url we are making the request to
               data: profile  //the data we are requesting to be posted
            }).then(function(profileResponse){
                localStorage.setItem('profile', JSON.stringify({profileId:profileResponse.data._id}));
            }).catch(function(err){
                console.error(err);
            });
        };
        
        this.deleteProfile = function() {
            localStorage.removeItem('profile');
        };
        

        
    });
    
}());

