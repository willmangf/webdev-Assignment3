/**
 * Created by will on 1/25/2017.
 */
(function () {
angular
    .module("WebAppMaker", ["ngRoute"])
    .config(Config);

    function Config($routeProvider) {
        $routeProvider
            .when("/login", {
                templateUrl: "views/users/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/users/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/profile/:uid", {
                templateUrl: "views/users/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when("/user/:uid/website", {
                templateUrl: "views/websites/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs: "model"
            })
            .when("/user/:uid/website-new", {
                templateUrl: "views/websites/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs: "model"
            })
            .when("/user/:uid/website/:wid", {
                templateUrl: "views/websites/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs: "model"
            })
            .when("/page-list", {
                templateUrl: "views/pages/page-list.view.client.html",
                controller: "PageListController"
            })
            .when("/page-new", {
                templateUrl: "views/pages/page-new.view.client.html"
            })
            .when("/page-edit", {
                templateUrl: "views/pages/page-edit.view.client.html"
            })
            .when("/widget-chooser", {
                templateUrl: "views/widgets/widget-chooser.view.client.html"
            })
            .when("/widget-heading", {
                templateUrl: "views/widgets/widget-heading.view.client.html"
            })
            .when("/widget-image", {
                templateUrl: "views/widgets/widget-image.view.client.html"
            })
            .when("/widget-list", {
                templateUrl: "views/widgets/widget-list.view.client.html"
            })
            .when("/widget-youtube", {
                templateUrl: "views/widgets/widget-youtube.view.client.html"
            })
            .otherwise({
                redirectTo: "/login"
            });

    }
})()