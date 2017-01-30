/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, UserService, WebsiteService, PageService) {

        var vm = this;
        vm.error = null;

        var userId = parseInt($routeParams["uid"]);
        if (userId == null) {
            vm.error = "User Not Found"
        } else {
            var user = UserService.findUserById(userId);
            if (user == null) {
                vm.error = "User Not Found";
            } else {
                vm.user = user;
                var websiteId = parseInt($routeParams["wid"]);
                if (websiteId == null) {
                    vm.error = "Website Not Found";
                } else {
                    var website = WebsiteService.findWebsiteById(websiteId);
                    if (website == null) {
                        vm.error = "Website Not Found";
                    } else {
                        vm.website = website;
                        var pages = PageService.findPagesByWebsiteId(websiteId);
                        vm.pages = pages;
                    }
                }

            }
        }
    }
})();