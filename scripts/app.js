var app = angular.module('myApp', []);

const start = "https://restcountries.eu/rest/v2/name/";
const end = "?fullText=true";
const start_country = "https://restcountries.eu/rest/v2/all";
var population=0;
app.controller('countryCtrl', function($scope, $http) {

    $scope.submitSearch = function (isValid){

        console.log("inside submit search");
        $scope.searchHeader = "";
        $scope.urlsearch = start + $scope.search + end;
        $http.get($scope.urlsearch).then(function (response) {
            locate();     
            callPop(response.data[0].population);
          });
    };  
    
});


 

