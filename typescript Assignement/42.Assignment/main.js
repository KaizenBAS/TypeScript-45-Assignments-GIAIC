var magicians = ['john', 'waldo', 'mario', 'harry', 'potter'];
function make_great(arr) {
    arr.forEach(function (name, index) {
        arr[index] = "".concat(name, "-thegreat");
    });
    return arr;
}
make_great(magicians).forEach(function (e) { console.log(e); });
