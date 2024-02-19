var guestList = ['john', 'alvera', 'bruce'];
guestList.forEach(function (e) {
    // console.log(`${e} you are welcome to join our dinner `)
});
console.log("".concat(guestList[1], " is sick so he will not attend dinner. \n"));
guestList[1] = 'mark';
guestList.forEach(function (e) {
    // console.log(`${e} you are welcome to join our dinner `)
});
console.log('we have got our hands on big dinner table so more people are now invited \n');
guestList.unshift('elon musk');
guestList[guestList.length / 2] = 'bill gates';
guestList.push('jeff bezos');
guestList.forEach(function (e) {
    console.log("".concat(e, " you are welcome to join our dinner "));
});
console.log("the dinner table will take long to arrive so we have to cut down on guests");
console.log("Only two people are invited to dinner.");
// 
guestList.forEach(function (e) {
    if (guestList.length > 2) {
        guestList.pop();
        console.log("".concat(e, " sorry you are not invited for dinner"));
    }
});
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var guest = guestList_1[_i];
    console.log("".concat(guest, " you are invited for dinner."));
}
for (var i = 0; i <= guestList.length; i++) {
    guestList.shift();
}
console.log(guestList);
