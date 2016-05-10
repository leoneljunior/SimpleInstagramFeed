angular.module('starter.controllers', [])

.controller('FeedCtrl', function($scope, $http) {
  var BASE_URL_1 = "https://api.instagram.com/v1/tags/";
  var BASE_URL_2 = "/media/recent?access_token=3210548664.5468d74.9a036c53afd640e1a417aa44b815bcff&callback=JSON_CALLBACK";
  $scope.hashtag = {name:"amor"};
  $scope.data = [];
  $scope.getMedia = getMedia;
  
  //console.log(linkHashtags());

  function getMedia(){
    $http.jsonp(BASE_URL_1 + $scope.hashtag.name + BASE_URL_2).then(function(response) {
      data = response.data.data;
      $scope.data = data;
    });
  };

  $scope.searchHashtag = function(hashtag){
    $scope.hashtag.name = hashtag;
    getMedia();
  };

  $scope.getMedia();
})

.controller('MapCtrl', function($scope) {
  
});
