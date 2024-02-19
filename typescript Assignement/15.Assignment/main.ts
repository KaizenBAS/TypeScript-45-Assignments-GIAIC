let guestList = ['john','alvera','bruce']


guestList.forEach(e=>{

    console.log(`${e} you are welcome to join our dinner `)
})

console.log(`${guestList[1]} is sick so he will not attend dinner. \n`)

guestList[1] = 'mark'

guestList.forEach(e=>{

    console.log(`${e} you are welcome to join our dinner `)
})
