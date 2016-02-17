/* global angular */

(function(){
    
    angular.module('devMtIn').controller('homeCtrl', function($scope){
        $scope.myProfile = {
            friends: [{name: 'Bryan'}, {name: 'Ryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
        };
        
        $scope.sortOptions = [{
            display: 'Ascending',
            value: false
        },
        {
            display:'Descending',
            value: true
        }];
        
       
    });
    
}());

