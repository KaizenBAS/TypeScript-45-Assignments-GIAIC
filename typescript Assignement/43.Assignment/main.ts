let magicians = ['john', 'waldo', 'mario', 'harry', 'potter']


function make_great(arr: string[]) {
    let makegreat = arr.map(name => {
      return `${name}-thegreat`
    })
    return makegreat
}

//modified array
make_great(magicians).forEach(e=>{console.log(e)})

//unchanged original Array
console.log(magicians)