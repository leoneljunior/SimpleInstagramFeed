angular.module('starter.controllers', [])

.controller('FeedCtrl', function($scope, $http) {
    var BASE_URL = "https://api.instagram.com/v1/tags/programming/media/recent?access_token=3210548664.5468d74.9a036c53afd640e1a417aa44b815bcff&callback=JSON_CALLBACK";
    $scope.getMedia = function(){
    $http.jsonp(BASE_URL).then(function(response) {
      data = response.data.data;
      //nextUrl = response.data.pagination.next_max_tag_id;
      //NewInsta = response.data.pagination.min_tag_id;
      //console.log(nextUrl, NewInsta);
      console.log(data);
      $scope.data = data;
    });
  };

  $scope.getMedia();
})

.controller('MapCtrl', function($scope, Chats) {
  
});
