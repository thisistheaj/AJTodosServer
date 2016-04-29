(function () {
    'use strict';

    angular.module('AJTodos')

        .config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('loginview', {
                    url: '/loginview',
                    controller: 'LoginController',
                    controllerAs: 'login',
                    templateUrl: 'templates/login/login.html'
                })
                .state('listview', {
                    url: '/listview',
                    controller: 'ListController',
                    controllerAs: 'list',
                    templateUrl: 'templates/list/list.html'
                });

            $urlRouterProvider.otherwise('/loginview');

        });
})();
