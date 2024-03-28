//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let abbreviation = language.slice(0,1) + language.slice(4,5);

//2. Without using slice(), use method chaining to accomplish the same thing.
console.log(language.replace(language[1],"").replace(language[2],"").replace(language[3],"").replace(language[5],"").replace(language[6],"").replace(language[7],"").replace(language[8],"").replace(language[9],""));

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbreviation for ${language} is ${abbreviation}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
console.log(language.toLowerCase().replace(language[6],"Y").slice(4,9));

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.
let notTitleCase = 'title case';
console.log(notTitleCase.replace(notTitleCase[0], "T").replace(notTitleCase[6], "C"));
