/**
 * Created by Administrator on 2017/02/21.
 */
angular.module('MyIonicApp.tabs-controller', [])

  .controller('TabsCtrl', function($scope, $state) {
    /**
     * Footer bar tab click event.
     */
    $scope.onClickTab = function(index){
      switch(index){
        case 0:
        {
          $state.go('tab.homepage');
        }
          break;

        case 1:
        {
          $state.go('tab.category');
        }
          break;

        case 2:
        {
          $state.go('tab.follows');
        }
          break;

        case 3:
        {
          $state.go('tab.account');
        }
          break;

        default:
        {
          $state.go('tab.homepage');
        }
      }
    }
  })
