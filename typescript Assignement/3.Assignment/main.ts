let personName = 'albert einstein '


let lowerName = personName.toLowerCase()
let upperName = personName.toUpperCase()
let nameArr = personName.split(' ') //we here change the personName which is string to an Array 

let titleCase:any;


 titleCase = nameArr.map((e,i)=>{
    return e.charAt(0).toUpperCase()+nameArr[i].slice(1) // this return 1st letter of each word to uppercases version
})

titleCase = titleCase.join(' ') // we then again convert it from an array to simple string.

console.log(lowerName)
console.log(upperName)
console.log(titleCase)


