angular.module('AJTodos', ['ui.router','AJTodos.controllers'])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('loginview', {
                url: '/loginview',
                controller: 'LoginViewController',
                templateUrl: 'views/loginview.html'
            })

            .state('listview', {
                url: '/listview/:userName',
                controller: 'ListViewController',
                templateUrl: 'views/listview.html'
            });

        $urlRouterProvider.otherwise('/loginview');

    });
