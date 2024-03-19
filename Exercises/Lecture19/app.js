let str1 = 'I\'m a string!';
let str2 = "I'm a string!";

console.log(str1.length === str2.length); // Перевірка на рівність довжини рядків (true)

console.log(str1 == str2); // Перевірка на рівність (недбала) (true)
console.log(str1 === str2); // Строга перевірка на рівність (false)

//index
/*let string5 = 'Hello World';
let firstCharacter = string5[0];
console.log(firstCharacter); // Виведе: "H"

//charAt
let string5 = 'Hello World';
let firstCharacter = 'Hello World'.charAt(0);
console.log('Hello World'[0]); // Виведе: "H"

//Повернути J
let str3 = "Hello Javascript";
let characterJ = str3[6];
console.log(characterJ); // Виведе: "J"

//4
//Довжина рядка
let str3 = "Hello Javascript";
let lastCharacter1 = str3[str3.length - 1];
console.log(lastCharacter1); // Виведе: "t"

//Зворотній індекс
let str3 = "Hello Javascript";
let lastCharacter2 = str3[str3.length - 1];
console.log(lastCharacter2); // Виведе: "t"

//5

//length
function lastChar(str) {
  return str.charAt(str.length - 1);
}

//Зворотній індекс
function lastChar(str) {
  return str[str.length - 1];
}

//substring
function lastChar(str) {
  return str.substring(str.length - 1);
}

//6

let a = 'When candles are out,';
let b = 'all cats are grey.';

let result = a.concat(' ', b);
console.log(result); // Виведе: When candles are out, all cats are grey

//7

let fact = "Fifteen is the same as";
let a = 5;
let b = 10;

fact += ' ' + (a + b);
console.log(fact); // Виведе: Fifteen is the same as 15

//8

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

let firstName = "Tom";
let lastName = "Cat";

let fullName = getFullName(firstName, lastName);
console.log(fullName); // Виведе: "Tom Cat"

//9

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function greeting(firstName, lastName) {
  let fullName = getFullName(firstName, lastName);
  return "Hello, " + fullName + "!";
}

let firstName = "Tom";
let lastName = "Cat";

let result = greeting(firstName, lastName);
console.log(result); // Виведе: "Hello, Tom Cat!"

//10

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function greeting(firstName, lastName) {
  let fullName = getFullName(firstName, lastName);
  return "<div><h1>Hello, " + fullName + "!</h1></div>";
}

let firstName = "Tom";
let lastName = "Cat";

let template = greeting(firstName, lastName);
console.log(template); // Виведе: "<div><h1>Hello, Tom Cat!</h1></div>"

//11

let string1 = "  The name of our game  ";

// Видаляємо зайві пробіли з початку та кінця рядка
let result1 = string1.trim();
console.log(result1); // "The name of our game"

// Видаляємо зайві пробіли з кінця рядка
let result2 = string1.trimRight();
console.log(result2); // "  The name of our game"

// Видаляємо зайві пробіли з початку рядка
let result3 = string1.trimLeft();
console.log(result3); // "The name of our game  "

const phoneNumber = '\t  555-123\n ';

// Видаляємо зайві пробіли та символи переносу рядків з початку та кінця рядка
let result1 = phoneNumber.trim();
console.log(result1); // '555-123'

// Видаляємо зайві пробіли та символи переносу рядків з кінця рядка
let result2 = phoneNumber.trimRight();
console.log(result2); // '  555-123\n'

//12

let sentence = 'Always look on the bright side of life';

if (sentence.includes('look up')) {
    console.log('Рядок містить "look up".');
} else {
    console.log('Рядок не містить "look up".');
}

let sentence = 'Always look on the bright side of life';

if (sentence.includes('look on')) {
    console.log('Рядок містить "look on".');
} else {
    console.log('Рядок не містить "look on".');
}

let sentence = 'Always look on the bright side of life';

if (sentence.includes('look on', 8)) {
    console.log('Рядок містить "look on", починаючи з 8-ї позиції.');
} else {
    console.log('Рядок не містить "look on", починаючи з 8-ї позиції.');
}

//13

let sentence = 'Always look on the bright side of life';
let index = sentence.indexOf('l');
console.log(index); // Виведе: 1

let sentence = 'Always look on the bright side of life';
let index = sentence.indexOf('l', 3);
console.log(index); // Виведе: 3

let sentence = 'Always look on the bright side of life';
let index = sentence.indexOf('L');
console.log(index); // Виведе: -1

//14

let sentence = 'Always look on the bright side of life';
let substring1 = sentence.substring(6);
console.log(substring1); // Виведе: "look on the bright side of life"

let sentence = 'Always look on the bright side of life';
let substring1 = sentence.substring(0, 6);
console.log(substring1); // Виведе: "Always"

let sentence = 'Always look on the bright side of life';
let substring1 = sentence.substring(6, 10);
console.log(substring1); // Виведе: "look"

//15

/^[a-z0-9_-]{8,16}$/i

//16

/^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/

//17

function truncateText(text) {
    if (text.length > 50) {
        return text.substring(0, 50) + '...';
    } else {
        return text;
    }
}

let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
console.log(truncateText(sentence)); // Виведе: "Lorem ipsum dolor sit amet, consectetur adipiscing..."

function truncateText(text) {
    if (text.length > 50) {
        return text.substr(0, 50) + '...';
    } else {
        return text;
    }
}

let sentence = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';
console.log(truncateText(sentence)); // Виведе: "Lorem ipsum dolor sit amet, consectetur adipiscing..."
*/