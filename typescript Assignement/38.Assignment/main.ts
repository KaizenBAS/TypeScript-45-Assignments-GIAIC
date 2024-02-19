function describe_city(city:string,country:string = 'pakistan'){
    return `${city} is in ${country}`
}

console.log(describe_city('karachi'))
console.log(describe_city('lahore'))
console.log(describe_city('tokyo','japan'))