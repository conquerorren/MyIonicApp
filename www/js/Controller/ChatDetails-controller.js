/**
 * Created by Administrator on 2017/02/21.
 */
angular.module('MyIonicApp.ChatDetailCtrl', [])

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })
