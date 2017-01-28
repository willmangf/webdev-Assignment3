/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController", WebsiteListController);

    function WebsiteListController($routeParams, UserService, WebsiteService) {

        var vm = this;

        var userId = parseInt($routeParams["uid"]);
        if (userId == null) {
            vm.error = "User Not Found"
        } else {
            var user = UserService.findUserById(userId);
            if (user != null) {
                vm.user = user;
                vm.error = null;
                vm.websites = WebsiteService.findWebsitesForUser(userId);
            } else {
                vm.error = "User Not Found";
            }
        }
    }
})();