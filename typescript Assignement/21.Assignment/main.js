var countriesAndCapitals = [
    { country: 'USA', capital: 'Washington' },
    { country: 'Canada', capital: 'Ottawa' },
    { country: 'Germany', capital: 'Berlin' },
    { country: 'France', capital: 'Paris' },
    { country: 'Japan', capital: 'Tokyo' }
];
countriesAndCapitals.forEach(function (e) {
    console.log("".concat(e.country, ": ").concat(e.capital));
});
