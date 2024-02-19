var userNames = ['john', 'ali', 'mike', 'admin', 'saphire'];
userNames.forEach(function (user) {
    if (user == 'admin') {
        console.log("Hello ".concat(user, " would you like to see reports"));
    }
    else {
        console.log("Welcome back ".concat(user));
    }
});
