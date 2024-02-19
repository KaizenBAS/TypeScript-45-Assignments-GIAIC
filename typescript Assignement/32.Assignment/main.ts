let currentUsers = ['john', 'mike', 'wick', 'isabell', 'zinc']
let newUsers = ['jawad', 'mike', 'henry', 'wick', 'norman']


currentUsers.forEach((user, i) => {
    let userNew = newUsers[i].toLowerCase()
    if (currentUsers.includes(userNew)) {
        console.log(`${userNew} is not available`)
    }
    else {
        console.log(`${userNew} is available`)
    }
})
