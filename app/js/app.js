'use strict';

angular.module('f9-matching-squares', ['ionic', 'ngDragDrop', 'angular.filter', 'btford.socket-io'])


    //.controller('MainCtrl', ['$scope',
    //    function($scope) {
    //        $scope.data = {};
    //        $scope.loading = false;
    //
    //        console.log('main 21:10!');
    //    }])


    .config(function($stateProvider, $urlRouterProvider) {

        console.log('hi!');

        $stateProvider
            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'partials/app.html'
            })
            .state('app.main', {
                url: '/main',
                controller: 'MainCtrl',
                templateUrl: 'partials/main.html'
            });
        $urlRouterProvider.otherwise('/app/main');
    })


    .run(function(_, $ionicPlatform) {
        $ionicPlatform.ready(function() {
            StatusBar.hide();
        });
    });
