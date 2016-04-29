(function () {
    'use strict';


    angular.module('AJTodos.LoginController')
        .controller('LoginController', LoginController);

    function LoginController($state, UserService) {
        var vm = this;

        vm.userNameLogin = "";
        vm.passwordLogin = "";
        vm.userNameCreate = "";
        vm.passwordCreate = "";
        vm.loginUser = loginUser;
        vm.createUser = createUser;

        function loginUser(un, pw) {
            UserService.loginUser(un, pw).then(function (response) {
                if (response.data.length > 0 && response.data[0].password === pw) {
                    $state.go('listview');
                }
            }, function (error) {
                alert('Error: ' + error);
            });
        }

        function createUser(un, pw) {
            UserService.createUser(un, pw).then(function (response) {
                if (!response.data[0]) {
                    $state.go('listview');
                } else {
                    alert("Username Already Taken")
                }
            }, function (error) {
                alert('Error: ' + error);
            });
        }

    }

})();

