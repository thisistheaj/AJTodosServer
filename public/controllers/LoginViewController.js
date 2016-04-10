angular.module('AJTodos.LoginViewController', [])

    .controller('LoginViewController', function($scope,$state,$http) {
        $scope.userName = "";
        $scope.password = "";
        $scope.wrongPw = "";

        $scope.login = function (un, pw) {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/userName/' + un
            }).then(function successCallback(response) {
                if (response.data.length > 0) {
                    if (response.data[0].password === pw){
                        $state.go('listview',{userName:un});
                    } else {
                        alert("error: incorrect password");
                    }
                } else {
                    $http({
                        method: 'POST',
                        url: 'http://localhost:3000',
                        headers: {'Content-Type': 'application/json'},
                        data: JSON.stringify({userName:un,password:pw,data:[]})
                    }).then(function successCallback(response) {
                        $state.go('listview',{userName:un});
                    }, function errorCallback(response) {
                        alert("Error: could not connect");
                    });
                }
            }, function errorCallback(response) {
                alert("Error: could not connect");
            });
        }

    });
