/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {
        var vm = this;
        vm.create=create;
        vm.error=null;

        function create () {
            console.log("In create");
            if (vm.username == null) {
                vm.error = "Enter a Username";
            } else {
                if (vm.password == null) {
                    vm.error = "Enter a Password";
                } else {
                    if (vm.verifyPassword == null) {
                        vm.error = "Enter Verify Password";
                    } else {
                        if (vm.password != vm.verifyPassword) {
                            vm.error = "Passwords do not match";
                        } else {
                            if (!UserService.passwordComplexity(vm.password)) {
                                vm.error = "Password does not meet complexity rules";
                            } else {
                                var userid = UserService.findUserByUsername(vm.username);
                                if (userid == null) {
                                    userid = UserService.createUser(vm.username, vm.password);
                                    $location.url("/profile/" + userid);
                                } else {
                                    vm.error = "Username is not unique";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})();