/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($routeParams, UserService, WebsiteService) {

        var vm = this;
        vm.create=create;

        var userId = parseInt($routeParams["uid"]);
        if (userId == null) {
            vm.error = "User Not Found"
        } else {
            var user = UserService.findUserById(userId);
            if (user != null) {
                vm.user = user;
                vm.error = null;
                vm.websites = WebsiteService.findWebsitesForUser(userId);
                vm.website = WebsiteService.createEmptyWebsite();
            } else {
                vm.error = "User Not Found";
            }
        }
        function create () {
            if ((vm.website.name != "")
            ||  (vm.website.description != "")) {
                if (vm.website.name == "") {
                    vm.error = "Website Name is required";
                } else {
                    WebsiteService.createWebsite(vm.website.name, vm.website.description, userId);
                }
            }
        }
    }
})();