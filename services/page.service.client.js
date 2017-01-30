/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService)

    function PageService() {
        var pages = [
            { "_id": "321", "name": "Post 1", "websiteId": 456, "description": "Lorem" },
            { "_id": "432", "name": "Post 2", "websiteId": 456, "description": "Lorem" },
            { "_id": "543", "name": "Post 3", "websiteId": 456, "description": "Lorem" }
        ];

        var api = {
            findPagesByWebsiteId: findPagesByWebsiteId,
            findPageById: findPageById,
            findPageByName: findPageByName,
            updatePage: updatePage,
            createPage: createPage,
            createEmptyPage: createEmptyPage,
            deletePage: deletePage
        }
        return api;

        function findPagesByWebsiteId(websiteId) {
            var result = [];
            for(var p in pages) {
                var page = pages[p];
                if(page.websiteId === websiteId) {
                    result.push(page);
                }
            }
            return result;
        }
        function findPageById(pageId) {
            for(var p in pages) {
                var page = pages[p];
                if(page._id === pageId) {
                    return page;
                }
            }
            return null;
        }
        function findPageByName(pageName) {
            for(var p in pages) {
                var page = pages[p];
                if(page.name === pageName) {
                    return page;
                }
            }
            return null;
        }
        function updatePage(pageId, name, description) {
            for(var p in pages) {
                var page = pages[p];
                if (page._id === pageId) {
                    pages[p].name = name;
                    pages[p].description = description;
                }
            }
        }
        function createPage(name, description, websiteId) {
            var highest=0;
            for(var p in pages) {
                if (pages[p]._id > highest) {
                    highest=pages[p]._id;
                }
                highest++;
            }
            page=createEmptyPage();
            page._id=highest;
            page.name=name;
            page.websiteId=websiteId;
            page.description=description;
            pages.push(page);
            return highest;
        }
        function createEmptyPage() {
            var page={ "_id": 123, "name": "",    "websiteId": 456, "description": "" };
            return page;
        }
        function deletePage(pageId) {
            for (var p in pages) {
                var page = pages[p];
                if (page._id === pageId) {
                    delete pages[p];
                }
            }
        }
    }
})();