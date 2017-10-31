var a = prompt("Eneter number a");
var	b = prompt("Eneter number b");
var	value = (a * a) - (2 * a * b) + (b * b);
alert("value is equal to  "+value)
console.log("value is equal to  "+value);
if (+value > 0 ) {
    console.log('value is positive');
} else if (+value < 0 ) {
    console.log('value is negative');
}
if (+value == 0) {
	console.log('value is equal to zero');
} else if (+value != 0) {
	console.log('value is not equal to zero');
}