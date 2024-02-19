let fruits = ['mango', 'apple', 'peach', 'grapes', 'kiwi']

if (fruits.includes('apple')) {
    console.log('fruit is in array')
}
if (fruits.indexOf('mango') != -1) {
    console.log('mango is in array')
}
if (!fruits.includes('watermelon')) {
    console.log('this fruit does not exist')
}

let favourite_fruits = fruits.slice(0, 3)


let favFruit = 'mango'

if (fruits.includes(favFruit)) {
    console.log(`you really like ${favFruit}`)
}
else {
    console.log(`you really dont like ${favFruit}`)
}



let favFruit2 = 'watermelon'

if (fruits.includes(favFruit2)) {
    console.log(`you really like ${favFruit}`)
}
else {
    console.log(`you really dont like ${favFruit2}`)
}
