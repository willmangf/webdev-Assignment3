/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController);

    function LoginController($location, UserService) {
        var vm = this;
        vm.login = login;

       function login (){
           if(vm.username == null) {
               vm.error = "User not entered";
           } else {
               var user = UserService.findUserByCredentials(vm.username, vm.password);
               if(user === null) {
                   vm.error = "User not found or password does not match user";
               } else {
                   $location.url("/profile/" + user._id);
               }
           }
        }
    }
})();