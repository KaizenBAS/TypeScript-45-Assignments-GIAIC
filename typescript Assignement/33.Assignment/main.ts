let nums = [1,2,3,4,5,6,7,8,9]
let ords = ['st','nd','rd','th']

//using ordinals in array 
nums.forEach((num,i)=>{
    if(i < 3){
        console.log(num+ords[i])
    }
    else{
        console.log(num+ords[3])
    }
})


//using a traditional way of using ordinal
nums.forEach((num,i)=>{
    if(i < 3){
        if(num == 1){
            console.log(num+'st')
        }
        else if(num ==2){
            console.log(num+'nd')
        }
        else if(num ==3){
            console.log(num+'rd')
        }
    }
    else{
        console.log(num+'th')
    }
    
})