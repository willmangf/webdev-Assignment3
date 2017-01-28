/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.update=update;
        vm.delete=deleteU;
        var userId = parseInt($routeParams.uid);
        if (userId == null) {
            vm.error = "User Not Found"
        } else {
            var user = UserService.findUserById(userId);
            if (user != null) {
                vm.user = user;
                vm.error = null;
            } else {
                vm.error = "User Not Found";
            }
        }

        function update () {
            UserService.updateUser(vm.user.username, vm.user.email, vm.user.firstName, vm.user.lastName);
        }
        function deleteU (username) {
            UserService.deleteUser(username);
        }
    }
})();