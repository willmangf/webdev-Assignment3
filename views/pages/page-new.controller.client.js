/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, UserService, WebsiteService, PageService) {

        var vm = this;
        vm.error = null;
        vm.create = create;

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
                    }
                }

            }
        }
        function create () {
            if ((vm.page.name != "")
                ||  (vm.page.description != "")) {
                if (vm.page.name == "") {
                    vm.error = "Page Name is required";
                } else {
                    if (PageService.findPageByName(vm.page.name) != null) {
                        vm.error = "Page Name is duplicated";
                    } else {
                        PageService.createPage(vm.page.name, vm.page.description, websiteId);
                    }
                }
            }
            if (vm.error != null) {
                //
                //TODO: Figure out how to keep the focus on this form when there is an error
                //
                $location.url("/user/" + vm.user._id + "/website/" + websiteId + "/page/new");
            }
        }
    }
})();