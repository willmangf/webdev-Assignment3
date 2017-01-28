/**
 * Created by will on 1/25/2017.
 */
(function() {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService)

    function UserService() {
        var users = [
            {_id: 123, username: "alice",    email: "", password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: 234, username: "bob",      email: "", password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: 345, username: "charly",   email: "", password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: 456, username: "jannunzi", email: "", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        var api = {
            findUserByCredentials: findUserByCredentials,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            updateUser: updateUser,
            deleteUser: deleteUser,
            createUser: createUser,
            passwordComplexity: passwordComplexity
        }
        return api;

        function findUserByCredentials(username, password) {
            for(var u in users) {
                var user = users[u];
                if    (user.username.toUpperCase() === username.toUpperCase()
                    && user.password === password) {
                    return user;
                }
            }
            return null;
        }
        function findUserById(userid) {
            for(var u in users) {
                var user = users[u];
                if(user._id === userid) {
                    return user;
                }
            }
            return null;
        }
        function findUserByUsername(username) {
            for(var u in users) {
                var user = users[u];
                if (user.username.toUpperCase() === username.toUpperCase()) {
                    return user;
                }
            }
            return null;
        }
        function updateUser(username, email, firstname, lastname) {
            for(var u in users) {
                var user = users[u];
                if(user.username.toUpperCase() === username.toUpperCase()) {
                    users[u].email=email;
                    users[u].firstName=firstname;
                    users[u].lastName=lastname;
                }
            }
        }
        function deleteUser(username) {
            for (var u in users) {
                var user = users[u];
                if (user.username.toUpperCase() == username.toUpperCase()) {
                    console.log("deleting" + u + username);
                    delete users[u];
                }
            }
        }
        function createUser(username, password) {
            var highest=0;
            for(var u in users) {
                if (users[u]._id > highest) {
                    highest=users[u]._id;
                }
                highest++;
            }
            var user={_id: 123, username: "", email: "", password: "",    firstName: "",  lastName: ""};
            user._id=highest;
            user.username=username;
            user.password=password;
            users.push(user);
            return highest;
        }
        function passwordComplexity(password) {
            if (password.length < 8) {
                return false;
            } else {
                return true;
            }
        }
    }
})();