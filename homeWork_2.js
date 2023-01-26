
// Task *
let n = 8;
for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }

  for (let l = 0; l < 2 * i - 1; l++) {
    process.stdout.write('*')
  }
  console.log();
}

// Task 1
function macDonalds(humburher, friesPotato){
  return 'Ми поїли' ? humburher >= 4 && friesPotato >= 1 : 'Ми йдемо в інше кафе';
}  
console.log(macDonalds(3,1));


// Task 2
function goods(price1){
  if( price1 >= 1000 && price1 <= 1900){
    return price1;
  }
}
console.log(goods(1200));

// Task 3_1
function goods2(price2){
  if( price2 <= 1000 || price2 >= 1900){
    console.log(price2);
  }
}
goods2(800);
goods2(21000);

// Task 3_2
function goods3(price3){
  if(!(price3 >= 1000 && price3 <= 1900)) {
    console.log(price3);
  }
}
goods3(900);
goods3(3000);

// Task 4
function season(month){
  if(month == 12 || month >= 1 && month <= 2){
    return 'Зима';
  }
    if( month > 2 && month <= 5 ){
      return 'Весна';
    }
      if(month > 5 && month <= 8){
        return 'Літо';
      }
        if(month > 8 && month <= 11){
          return 'Осінь';
        }
}
const todayMonth = 8;
console.log(season(todayMonth));

// Task 5
function averageNumber(a,b,c){
if ((a < b && b < c ) || (a > b && b > c && a > c )){
        return b;
    } else
        if (( b < a && a < c ) || (b > a && a > c )){
                return a;
            } else
                if (( a < c && c > b ) || (a > c && c > b )){
                        return c;
                    } else
                        if ( a == b || b == c || a == c || a == b == c ){
                            return NaN;
                        }
}
const number1 = 7;
const number2 = 6; 
const number3 = 4;

console.log(averageNumber(a,b,c))

// Task 6
const week = function(numberDay){
  switch(numberDay){
    case '1':
       return 'Today is Monday';
    case '2':
      return 'Today is Tuesday';
    case '3':
      return 'Today is Wednesday';
    case '4':
      return 'Today is Thursday';
    case '5':
      return 'Today is Friday';
    case '6':
      return 'Today is Saturday';
    case '7':
      return 'Today is Sunday';
    default: 
    return 'This is default output'; 
  }
}
let numberDay = '2';
console.log(week(numberDay));

// Task 7
const math = (operator, num1, num2) => {
switch(operator){
    case '+':
        return num1 + num2;
    case '-':
        returnnum1 - num2;
    case '*':
        return num1 * num2;
    case '/':
        return parseFloat (num1 / num2).toFixed(2);
    default: 
        return NaN;
}
}
let operator = '+';
let num1 = 12;
let num2 = 2;
console.log(math(operator, num1, num2));

