/* global angular */

(function(){
    
    angular.module('devMtIn').service('profileService', function($http){
        
        var baseUrl = 'http://connections.devmounta.in/';
        
        this.checkForProfile = function(profileId){
            return $http({
                method: 'GET',
                url: baseUrl + 'api/profiles/' + profileId
            });
             console.log('service.checkForProfile checked');
        };
      
        
        this.serviceTest = function() {
            console.log('profileService is connected');
        };
        
        this.saveProfile = function(profile) {
            console.log('saveProfile ran');
            return $http({
               method: 'POST', //request method
               url: baseUrl + 'api/profiles', //url we are making the request to
               data: profile  //the data we are requesting to be posted
            })
                    .then(function(res){
                        localStorage.setItem('profileId', JSON.stringify({profileId: res.data._id}));
                        console.log(res);
            })
                    .catch(function(err){
                        console.error(err);
            });
        };
        
        this.deleteProfile = function() {
            var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;
            
            return $http({
                method: 'DELETE',
                url: baseUrl + '/api/profiles/' + profileId
            });
        };
        

        
    });
    
}());

