'use strict';
angular.module('mainApp', ['ui.router','mainApp.mainCtrl'])

    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('state1', {
                url: "/state1",
                templateUrl: "views/state1.html",
                controller: "mainCtrl"
            });

        $urlRouterProvider.otherwise("/state1");

    });