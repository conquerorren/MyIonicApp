/**
 * Created by Administrator on 2017/02/23.
 */
angular.module('MyIonicApp.news-detail-controller', [])

  .controller('NewsDetailCtrl', function($scope, $stateParams, NewsService) {
    $scope.newsItem = NewsService.get($stateParams.newsId);
  })
