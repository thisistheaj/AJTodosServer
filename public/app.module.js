(function () {
    'use strict';
    
    angular.module('AJTodos', [
        'ui.router',
        'AJTodos.LoginController',
        'AJTodos.ListController',
        'AJTodos.UserService',
    ])
    
})();