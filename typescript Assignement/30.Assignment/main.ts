let userNames = ['john','ali','mike','admin','saphire']

userNames.forEach(user=> {
    if(user == 'admin'){
        console.log(`Hello ${user} would you like to see reports`)
    }
    else{
    console.log(`Welcome back ${user}`)}
})