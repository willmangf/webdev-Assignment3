/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController);

    function WebsiteEditController($routeParams, UserService, WebsiteService) {

        var vm = this;
        vm.update = update;
        vm.delete = deleteW;
        var userId = parseInt($routeParams["uid"]);
        if (userId == null) {
            vm.error = "User Not Found"
        } else {
            var user = UserService.findUserById(userId);
            if (user == null) {
                vm.error = "User Not Found";
            } else {
                vm.user = user;
                vm.error = null;
                vm.websites = WebsiteService.findWebsitesForUser(userId);
                var websiteId = parseInt($routeParams["wid"]);
                if (websiteId == null) {
                    vm.error = "Website Not Found";
                } else {
                    vm.website = WebsiteService.findWebsiteById(websiteId);
                    if (vm.website == null) {
                        vm.error = "Website not found to edit";
                    }
                }
             }
        }
        function update () {
            WebsiteService.updateWebsite(vm.website._id, vm.website.name, vm.website.description);
        }
        function deleteW () {
            WebsiteService.deleteWebsite(vm.website._id);
        }
    }
})();