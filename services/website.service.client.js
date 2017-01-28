/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService)

    function WebsiteService() {
        var websites = [
            { "_id": 123, "name": "Facebook",    "developerId": 456, "description": "Lorem" },
            { "_id": 234, "name": "Tweeter",     "developerId": 456, "description": "Lorem" },
            { "_id": 456, "name": "Gizmodo",     "developerId": 456, "description": "Lorem" },
            { "_id": 567, "name": "Tic Tac Toe", "developerId": 123, "description": "Lorem" },
            { "_id": 678, "name": "Checkers",    "developerId": 123, "description": "Lorem" },
            { "_id": 789, "name": "Chess",       "developerId": 234, "description": "Lorem" }
        ];

        var api = {
            findWebsitesForUser: findWebsitesForUser,
            findWebsiteById: findWebsiteById,
            updateWebsite: updateWebsite,
            createWebsite: createWebsite,
            createEmptyWebsite: createEmptyWebsite,
            deleteWebsite: deleteWebsite
        }
        return api;

        function findWebsitesForUser(userId) {
            var result = [];
            for(var w in websites) {
                var website = websites[w];
                if(website.developerId === userId) {
                    result.push(website);
                }
            }
            return result;
        }
        function findWebsiteById(websiteId) {
            for(var w in websites) {
                var website = websites[w];
                if(website._id === websiteId) {
                    return website;
                }
            }
            return null;
        }
        function updateWebsite(websiteId, name, description) {
            for(var w in websites) {
                var website = websites[w];
                if (website._id === websiteId) {
                    websites[w].name = name;
                    websites[w].description = description;
                }
            }
        }
        function createWebsite(name, description, developerId) {
            var highest=0;
            for(var w in websites) {
                if (websites[w]._id > highest) {
                    highest=websites[w]._id;
                }
                highest++;
            }
            website=createEmptyWebsite();
            website._id=highest;
            website.name=name;
            website.developerId=developerId;
            website.description=description;
            websites.push(website);
            return highest;
        }
        function createEmptyWebsite() {
            var website={ "_id": 123, "name": "",    "developerId": 456, "description": "" };
            return website;
        }
        function deleteWebsite(websiteId) {
            for (var w in websites) {
                var website = websites[w];
                if (website._id === websiteId) {
                    delete websites[w];
                }
            }
        }
    }
})();