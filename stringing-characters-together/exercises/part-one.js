let num = 1001;

//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.
num = num.toString();
console.log(num);
console.log(num.length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
n = 5.65889;
n = n.toString();
n = n.replace(".","");
console.log(n.length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num).includes('.')) {
    console.long(String(num).length-1)
} else {
    console.log(String(num).length)
}