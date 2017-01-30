/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, UserService, WebsiteService, PageService) {

        var vm = this;
        vm.error = null;
        vm.update = update;
        vm.deleteP = deleteP;

        var userId = parseInt($routeParams["uid"]);
        if (userId == null) {
            vm.error = "User Not Found";
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
                        var pageId = parseInt($routeParams["pid"]);
                        if (pageId == null) {
                            vm.error = "Page Not Found";
                        } else {
                            var page = PageService.findPageById(pageId);
                            if (page == null) {
                                vm.error = "Page Not Found";
                            } else {
                                vm.page = page;
                            }
                        }
                    }
                }

            }
        }
        function update () {
            if ((vm.page.name != "")
                ||  (vm.page.description != "")) {
                if (vm.page.name == "") {
                    vm.error = "Page Name is required";
                } else {
                    PageService.updatePage(vm.page.name, vm.page.description);
                }
            }
            if (vm.error != null) {
                //
                //TODO: Figure out how to keep the focus on this form when there is an error
                //
                $location.url("/user/" + vm.user._id + "/website/" + websiteId + "/page/" + pageId);
            }
        }
        function deleteP () {
            PageService.deletePage(vm.page._id);
        }
    }
})();