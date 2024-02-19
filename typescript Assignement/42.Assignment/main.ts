let magicians = ['john', 'waldo', 'mario', 'harry', 'potter']

function make_great(arr: string[]) {
    arr.forEach((name, index) => {
        arr[index] = `${name}-thegreat`;
    });
    return arr;
}

make_great(magicians).forEach(e=>{console.log(e)})


