function car_make(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car;
    car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (ops) {
        var key = ops[0], value = ops[1];
        car[key] = value;
    });
    return car;
}
console.log(car_make('audi', 'audi A8'));
console.log(car_make('ferrari F1', 'ferrari'));
console.log(car_make('ford ', 'wolkswagon', ['color', 'blue'], ['sunroof', 'yes']));
