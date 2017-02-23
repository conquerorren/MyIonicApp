/**
 * Created by Administrator on 2017/02/21.
 */
angular.module('MyIonicApp.homepage-controller', [])

.controller('HomePageCtrl', function($scope, NewsService) {
  // 轮播图
  $scope.coursels = [
    {
      id: 0,
      imageurl: 'img/homepage/coursel-1.jpg',
      linkurl: 'coursel-1',
  },
    {
      id: 1,
      imageurl: 'img/homepage/coursel-2.jpg',
      linkurl: 'coursel-2',
    },
    {
      id: 2,
      imageurl: 'img/homepage/coursel-3.jpg',
      linkurl: 'coursel-3',
    },
  ];

  // 获得新闻信息列表
  $scope.news = NewsService.all();
  // 删除任一新闻列表
  $scope.remove = function(newsItem) {
    NewsService.remove(newsItem);
  };
})
