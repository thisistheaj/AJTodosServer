angular.module('mainApp.mainCtrl', [])

    .controller('mainCtrl', function ($scope) {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.fullName = "";

        $scope.$watchGroup(['firstName', 'lastName'],function () {
            $scope.fullName = $scope.firstName + " " + $scope.lastName;
        },true);
    });