let places = ['japan','amsterdam','saudiArabia','london','norway'];

places.forEach(e=>{
    console.log(e)
})


let sortedPlacesA = places.slice().sort()
let SortedPlacesZ = places.slice().sort().reverse()



//Array from Z to A Descending
console.log(SortedPlacesZ)

//Array from A to z Ascending
console.log(sortedPlacesA)

//orginal array

console.log(places)



console.log(places.reverse())
console.log(places.reverse())