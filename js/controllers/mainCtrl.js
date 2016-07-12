angular.module('friendsList')
  .controller('mainCtrl', function($scope){
    $scope.name = "Michael";
    $scope.friends = ["Mike D", "James", "Kyle", "Evan", "Joshua"];

    $scope.addFriend = function(newFriend) {
      $scope.friends.push(newFriend);
    }


  });
