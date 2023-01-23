// Task 1
let humburher = 4;
let friesPotato = 1;

if (humburher >= 4 && friesPotato >= 1){
    console.log('Ми поїли')
}
    else {
        console.log('Ми йдемо в інше кафе');
}

// Task 2
let price1 = 1900;

if( price1 >= 1000 && price1 <= 1900){
    console.log(price1);
};

// Task 3_1
let price2 = 1801;

if( price2 <= 1000 || price2 >= 1900){
    console.log(price2)
};

// Task 3_2
let price3 = 900;
if (!(price3 >= 1000 && price3 <= 1900)) {
    console.log(price3)
};

// Task 4
let month=5;

if(month == 12 || month >= 1 && month <= 2){
    console.log('Зима')
}
    if( month > 2 && month <= 5 ){
        console.log('Весна')
    }
        if(month > 5 && month <= 8){
            console.log('Літо')
        }
            if(month > 8 && month <= 11){
                console.log('Осінь')
            }

// Task 5
let a = 7;
let b = 6; 
let c = 5;

if ((a < b && b < c ) || (a > b && b > c && a > c )){
        console.log(`Average: ${b}`)
    } else
        if (( b < a && a < c ) || (b > a && a > c )){
                console.log(`Average: ${a}`)
            } else
                if (( a < c && c > b ) || (a > c && c > b )){
                        console.log(`Average: ${c}`)
                    } else
                        if ( a == b || b == c || a == c || a == b == c ){
                            console.log('No average number')
                        }

// Task 6
let numberDay = '7';

switch(numberDay){
    case '1':
        console.log('Today is Monday')
        break;
    case '2':
        console.log('Today is Tuesday')
        break;
    case '3':
        console.log('Today is Wednesday')
        break;
    case '4':
        console.log('Today is Thursday')
        break;
    case '5':
        console.log('Today is Friday')
        break;
    case '6':
        console.log('Today is Saturday')
        break;
    case '7':
        console.log('Today is Sunday')
        break;
    default: 
        console.log('This is default output')
        break; 
}

// Task 7
let operator = '/';
let num1 = 5;
let num2 = 6;

switch(operator){
    case '+':
        console.log(num1 + num2)
        break;
    case '-':
        console.log(num1 - num2)
        break;
    case '*':
        console.log(num1 * num2)
        break;
    case '/':
        console.log(parseFloat (num1 / num2).toFixed(2))
        break;
    default: 
        console.log('This is default output')
        break; 
}

// Task 8
function removeVowels(str){
    return str.replace(/[aeiouAEIOU]/g, '');
}

const newStr = removeVowels('Hello');
console.log(newStr);

// Task 9
function createResultWord(number, word) {

    if (!Number.isInteger(number)) {
        return word + 'а';
    } else {
        const lastDigit = number % 10;
        if (lastDigit == 1) {
            return word;
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return word + 'и';
        } else {
            return word + 'ів';
        }
    }
}
let meters = 50030;
let metersWord = createResultWord(meters, 'метр');
let kilometers = meters / 1000;
let kilometersWord = createResultWord(kilometers, 'кілометр');

console.log(`${meters} ${metersWord} = ${kilometers} ${kilometersWord}`)