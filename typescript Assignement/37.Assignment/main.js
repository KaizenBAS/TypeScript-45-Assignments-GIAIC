function make_shirt2(size, msg) {
    if (size === void 0) { size = 'large'; }
    return "i love typescript";
}
function make_shirt3(msg, size) {
    if (size === void 0) { size = 'large'; }
    if (size == 'large' || size == 'medium')
        return "i love typescript";
    else if (size == 'small') {
        return 'cool shirt /3';
    }
}
console.log(make_shirt3('', 'small'));
