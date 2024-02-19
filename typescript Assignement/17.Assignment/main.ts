let guestList = ['john','alvera','bruce']


guestList.forEach(e=>{

    // console.log(`${e} you are welcome to join our dinner `)
})

console.log(`${guestList[1]} is sick so he will not attend dinner. \n`)

guestList[1] = 'mark'

guestList.forEach(e=>{

    // console.log(`${e} you are welcome to join our dinner `)
})

console.log('we have got our hands on big dinner table so more people are now invited \n')

guestList.unshift('elon musk')
guestList[guestList.length/2] = 'bill gates'
guestList.push('jeff bezos')

guestList.forEach(e=>{

    console.log(`${e} you are welcome to join our dinner `)
})

console.log("the dinner table will take long to arrive so we have to cut down on guests")
console.log("Only two people are invited to dinner.")

// 

guestList.forEach((e)=>{
    if(guestList.length > 2){
        guestList.pop()
        console.log(`${e} sorry you are not invited for dinner`)
    }


})

for(let guest of guestList){
    console.log(`${guest} you are invited for dinner.`)
}



for(let i = 0; i <= guestList.length; i++){
    guestList.shift()
    
}
console.log(guestList)




