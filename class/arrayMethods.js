// function convert(Fahrenheit) {
//     Celsius = (Fahrenheit - 32) * 5/9
//     return Celsius
// }
// console.log(convert(100))

const fahrs = [0, 20, 40, 60, 80, 100, 120, 140];
const celsius = fahrs.map(function(Fahrenheit) {
    return (Fahrenheit - 32) * 5/9;
});

console.log("celsius: ", celsius);