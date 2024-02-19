var currentUsers = ['john', 'mike', 'wick', 'isabell', 'zinc'];
var newUsers = ['jawad', 'mike', 'henry', 'wick', 'norman'];
currentUsers.forEach(function (user, i) {
    var userNew = newUsers[i];
    if (currentUsers.includes(userNew)) {
        console.log("".concat(userNew, " is not available"));
    }
    else {
        console.log("".concat(userNew, " is available"));
    }
});
