// var names = ['Don', 'Tara', 'DJ', 'Fletcher'];

// // anon fcn version
// // var person = {
// //     name: 'Don',
// //     greet: function () {
// //         names.forEach(function (name) {
// //             console.log(this.name + ' says hi to ' + name);  //in this anon fcn, "THIS" is the forEach function,
// //                                                              //not the person object and this.name is undefined
// //         });
// //     }
// // };

// // arrow fcn version
// var person = {
//     name: 'Don',
//     greet: function () {
//         names.forEach((name) => {
//             console.log(this.name + ' says hi to ' + name);  //here "THIS" is still the person since we used an arrow fcn
//         });
//     }
// };

// person.greet();

function add (a, b) {
    return a + b;
}

// add function using the statement syntax of arrow functions
var addStatement = (firstValue, secondValue) => {
    return firstValue + secondValue;
};

// add function using the expression syntax of arrow functions
var addExpression = (firstValue, secondValue) => firstValue + secondValue;

console.log(add(1, 3));
console.log(add(9,0));

console.log(addStatement(1, 3));
console.log(addStatement(9, 0));

console.log(addExpression(1, 3));
console.log(addExpression(9, 0));