/**
 * Created by eon-1 on 10/23/14.
 */

var myApp = angular.module('eon-modal',['ui.bootstrap','ngSanitize']);

myApp.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });

myApp.controller('modalCtrl', ['$scope', '$modal', '$log', function($scope, $modal, $log) {

        $scope.open = function (size,contenido) {

            var modalInstance = $modal.open({
                templateUrl: 'views/'+contenido+'.html',
                controller: 'ModalInstanceCtrl',
                size: size
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
}]);

myApp.directive('eonModal', function($rootScope) {
        return {
            restrict:'A',
            replace: true,
            transclude : true,
            controller: 'modalCtrl',
            template: function(ele, attr){
                console.log(attr.url);
                if (attr.url){
                    $rootScope.url = attr.url;
                }else{
                    $rootScope.url = '';
                }
                switch (attr.type){
                    case 'button':
                        return '<button class="btn btn-default" ng-click="open(\'sm\',\''+attr.contenido+'\')" ng-transclude></button>';
                    case 'link':
                        return '<a class="btn btn-default" ng-click="open(\'sm\',\''+attr.contenido+'\')" ng-transclude></a>';
                    case 'video':
                        return '<a class="btn btn-default" ng-click="open(\'sm\',\'video\')" ng-transclude></a>';
                }
            }
        };
    });