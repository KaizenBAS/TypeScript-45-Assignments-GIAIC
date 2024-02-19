let userNames = ['jawad','admin','bilal']



if(userNames.length > 0 ){

    userNames.forEach(user => {

        if (user == 'admin') {
            console.log(`Hello ${user} would you like to see reports`)
        }
        else {
            console.log(`Welcome back ${user}`)
        }
    
    
    })
}else{
    console.log("we need to find some users!")
}
