function make_shirt(size, msg) {
    return "shirt size is ".concat(size, " and msg is ").concat(msg);
}
console.log(make_shirt('small', 'hello'));
function make_shirt2(size, msg) {
    if (size === void 0) { size = 'large'; }
    return "shirt size is ".concat(size, " and msg is ").concat(msg);
}
