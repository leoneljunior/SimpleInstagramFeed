angular.module('starter.directives', [])

.directive('linkedHashtags', function($compile) {
  return {
    restrict: 'EA',
    scope:{
      text: '=info',
      search: '&',
    },
    template: "",   
    link: function ($scope, element, attrs) {
      var hashtags = [];
      var text = $scope.text;
      var urlRegex = /#(.+?)(?=[\s.,:,]|$)/g;
      
      //Select all hashtags and wrapper in to a link.
      text = text.replace(urlRegex, function(text) {
        hashtags.push(text);
        return "<a href id='"+ text +"'>" + text + "</a>";
      });
      element.append(text);

      //Set eventListener for each hashtag.
      for (var i = 0; i < hashtags.length; i++) {
       document.getElementById(hashtags[i])
        .addEventListener('click', function() {
          var hashtag = this.getAttribute('id').substring(1);
          $scope.search({hashtag: hashtag});
        }); 
      }

    }
  };
});
