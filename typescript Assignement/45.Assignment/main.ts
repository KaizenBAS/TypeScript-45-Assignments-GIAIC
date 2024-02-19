
interface Car {
    manufacturer: string;
    model: string;
}

function car_make(manufacturer: string, model: string, ...options: any[]) {
    let car: Car;

    car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(ops => {
        let [key, value] = ops;
        car[key] = value
    });
    return car
}



console.log(car_make('audi','audi A8'))
console.log(car_make('ferrari F1','ferrari'))
console.log(car_make('ford ','wolkswagon',['color','blue'],['sunroof','yes']))