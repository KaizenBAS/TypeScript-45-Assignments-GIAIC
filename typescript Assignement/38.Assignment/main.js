function describe_city(city, country) {
    if (country === void 0) { country = 'pakistan'; }
    return "".concat(city, " is in ").concat(country);
}
console.log(describe_city('karachi'));
console.log(describe_city('lahore'));
console.log(describe_city('tokyo', 'japan'));
