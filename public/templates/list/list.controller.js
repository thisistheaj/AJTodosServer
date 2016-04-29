(function () {
    'use strict';
    
    angular.module('AJTodos.ListController')
        .controller('ListController', ListController);

    function ListController(UserService) {
        var vm = this;

        vm.remove = remove;
        vm.showPopup = showPopup;
        vm.data = UserService.data();

        function add(item) {
            vm.data.data.push(item);
            UserService.update(vm.data);
        };

        function remove(todo) {
            vm.data.data.splice(vm.data.data.indexOf(todo), 1);
            UserService.update(vm.data);
        };

        function showPopup() {
            vm.temp = prompt('What else do you need to do?');
            add({item: vm.temp, completed: false});
        };

    }

})();

