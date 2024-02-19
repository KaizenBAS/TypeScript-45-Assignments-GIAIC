var magicians = ['john', 'waldo', 'mario', 'harry', 'potter'];
function make_great(arr) {
    var makegreat = arr.map(function (name) {
        return "".concat(name, "-thegreat");
    });
    return makegreat;
}
//modified array
make_great(magicians).forEach(function (e) { console.log(e); });
//unchanged original Array
console.log(magicians);
