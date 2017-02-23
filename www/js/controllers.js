angular.module('starter.controllers', [
  'MyIonicApp.tabs-controller',
  'MyIonicApp.homepage-controller',
  'MyIonicApp.category-controller',
  'MyIonicApp.chat-detail-controller',
  'MyIonicApp.follows-controller',
  'MyIonicApp.account-controller',
  'MyIonicApp.news-detail-controller'
])

// .controller('DashCtrl', function($scope) {})

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })


// .controller('FollowsCtrl', function($scope) {})

// .controller('AccountCtrl', function($scope) {
//   $scope.settings = {
//     enableFriends: true
//   };
// });


