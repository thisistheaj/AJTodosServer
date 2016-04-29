(function () {
    'use strict';


    angular.module('AJTodos.UserService', [])
        .factory('UserService', UserService);

    function UserService($http, $q) {
        var data = {};

        var service = {
            data: function () {
                return data;
            },
            loginUser: loginUser,
            createUser: createUser,
            update: update
        };

        return service;

        function loginUser(un, pw) {
            return $http({
                method: 'GET',
                url: 'http://localhost:3000/userName/' + un
            }).then(function successCallback(response) {
                data = response.data[0];
                return response;
            }, function errorCallback(error) {
                return $q.reject(error);
            });
        }

        function createUser(un, pw) {
            return loginUser(un,pw).then(function (response) {
                if (!response.data[0]) {
                    return $http({
                        method: 'POST',
                        url: 'http://localhost:3000',
                        headers: {'Content-Type': 'application/json'},
                        data: JSON.stringify({userName: un, password: pw, data: []})
                    }).then(function successCallback(response) {
                        return response;
                    }, function errorCallback(error) {
                        $q.reject(error);
                    });
                } else {
                    return response;
                }
            },function (response) {
                return $q.reject(error);
            });
        }

        function update(data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:3000',
                headers: {'Content-Type': 'application/json'},
                data: JSON.stringify(data)
            }).then(function successCallback(response) {
                return response;
            }, function errorCallback(error) {
                $q.reject(error);
            });
        }

    }
})();

