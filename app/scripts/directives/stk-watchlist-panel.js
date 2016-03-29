'use strict';

/**
 * @ngdoc directive
 * @name stockDogApp.directive:stkWatchlistPanel
 * @description
 * # stkWatchlistPanel
 */
angular.module('stockDogApp')
  .directive('stkWatchlistPanel', ['$location','$modal','WatchlistService',function () {
    return {
      templateUrl: 'views/templates/watchlist-panel.html',
      restrict: 'E',
      scope:{},
      link: function ($scope, $element, $attrs) {
        // element.text('this is the stkWatchlistPanel directive');
        $scope.watchlist={};
        var addListModal=$modal({
          scope:$scope,
          template:'views/templates/addlist-modal.html',
          show:false
        });
        $scope.watchlists=WatchlistService.query();
        //display add list modal dialog
        $scope.showModal=function(){
          addListModal.$promise.then(addListModal.show);

        };

        //create new list from modal
        $scope.createList=function(){
          WatchlistService.save($scope.watchlist);
          addListModal.hide();
          $scope.watchlist={};

        };

        $scope.deleteList=function(list){
          WatchlistService.remove(list);
          $location.path('/');
        };


      }
    };
  }]);

