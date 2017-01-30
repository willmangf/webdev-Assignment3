/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController);

    function WebsiteNewController($location, $routeParams, UserService, WebsiteService) {

        var vm = this;
        vm.error=null;
        vm.create=create;

        var userId = parseInt($routeParams["uid"]);
        if (userId == null) {
            vm.error = "User Not Found";
        } else {
            var user = UserService.findUserById(userId);
            if (user == null) {
                vm.error = "User Not Found";
            } else {
                vm.user = user;
                vm.websites = WebsiteService.findWebsitesForUser(userId);
                vm.website = WebsiteService.createEmptyWebsite();
            }
        }
        function create () {
            if ((vm.website.name != "")
            ||  (vm.website.description != "")) {
                if (vm.website.name == "") {
                    vm.error = "Website Name is required";
                } else {
                    if (WebsiteService.findWebsiteByName(vm.website.name) != null) {
                        vm.error = "Website Name is duplicated";
                    } else {
                        WebsiteService.createWebsite(vm.website.name, vm.website.description, userId);
                    }
                }
            }
            if (vm.error != null) {
                //
                //TODO: Figure out how to keep the focus on this form when there is an error
                //
                $location.url("/user/" + vm.user._id + "/website-new");
            }
        }
    }
})();