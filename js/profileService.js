/* global angular */

(function(){
    
    angular.module('devMtIn').service('profileService', function(){
        
        this.serviceTest = function() {
            console.log('profileService is connected');
        };
        
        this.saveProfile = function(profile) {
            localStorage.setItem('profile', JSON.stringify(profile));
        }
        
    });
    
}());

