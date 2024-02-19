var userNames = [];
userNames.forEach(function (user) {
    if (userNames.length > 0) {
        if (user == 'admin') {
            console.log("Hello ".concat(user, " would you like to see reports"));
        }
        else {
            console.log("Welcome back ".concat(user));
        }
    }
    else {
        console.log("We need to find some users");
    }
});
