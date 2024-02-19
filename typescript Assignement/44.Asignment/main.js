function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("your sandwich consists of\n".concat(items));
}
make_sandwich('tuna', 'fish', 'meat');
make_sandwich('rice', 'vegetable', 'meat');
make_sandwich('onions', 'chicken', 'fish');
