var guestList = ['john', 'alvera', 'bruce'];
guestList.forEach(function (e) {
    console.log("".concat(e, " you are welcome to join our dinner "));
});
console.log("".concat(guestList[1], " is sick so he will not attend dinner. \n"));
guestList[1] = 'mark';
guestList.forEach(function (e) {
    console.log("".concat(e, " you are welcome to join our dinner "));
});
