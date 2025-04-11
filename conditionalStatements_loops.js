//Exercise:1
//Temperature check
//No:1
let temperature = -9

if(temperature >= 25) {
    
    console.log("it's warm", temperature);

}else if(temperature >= 16 && temperature <= 25) {
    
    console.log("it's mild", temperature);

}else if(temperature >= 0 && temperature <=15 ) {
    
    console.log("it's cold", temperature);

}else {
    
    console.log("it's freezing", temperature);
};

switch (temperature) {
    case temperature >= 25:
        console.log("it's warm");
        break;
    case temperature >= 16 && temperature <= 25:
        console.log("it's mild");
        break;
    case temperature >= 0 && temperature <= 15:
        console.log("it's cold");
        break;
    default:
        console.log("it's freezing");
    };

//Exercise:2
//Divisibility check
//No:1

if(30 % 2 == 0 && 30 % 3 == 0) {
    
    console.log("Divisible by both");

} else if(10 % 2 == 0) {

    console.log("Divisible by 2 only")

} else if(15 % 3 == 0) {

    console.log("Divisible by 3 only")

}else {

    console.log("Not divisible by 2 or 3")
};

//No:2
switch (true) {
    case 30 % 2 == 0 && 30 % 3 == 0:
        console.log("Divisible by both");
        break;
    case 10 % 2 == 0:
        console.log("Divisible by 2 only");
        break;
    case 15 % 3 == 0:
        console.log("Divisible by 3 only");
        break;
    default:
        console.log("Not divisible by 2 or 3");
        break;
}

//For loops
//No:1
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
No:2
for(let i = 0; i <= 20; i += 2) {
    console.log(i);
}
//No:3
let answer0 = 0;

for(let i = 0; i <= 100; i++) {
    answer0 += i
    
}
console.log(answer0);

//No:4
const numbers0 = [1, 2, 3, 4, 5]

for(i = 0; i < numbers0.length; i++) {
    console.log(numbers0[i]);
}

//No:5
const numbers1 = [3, 7, 2, 5, 10, 6];

let largest = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
  if (numbers1[i] > largest) {
    largest = numbers1[i]; 
  }
}

console.log("largest number is:", largest);



//While loops
//No:1
let numbers2 = 1;

while(numbers2 <= 10) {
    console.log(numbers2);
    numbers2++;
}

//No:2
let numbers3 = 2;
while(numbers3 <= 20) {
    console.log(numbers3);
    numbers3 += 2;
    
}

//No:3
let numbers4 = 0;
let answer = 0;
while(numbers4 <= 100) {
    answer = answer + numbers4;
    numbers4++;
    console.log(answer);
}

//No:4
let num = 5;

while (num <= 50) {
  console.log(num);
  num += 5;
}

//Exercise:5
//Do while loops
//No:1
let min = 1;
let max = 10;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

do {
    console.log(min);
    min++;
} while (min <= max);

No:2
let answer1 = 0;
let i = 1;

do {
  answer1 += i; 
  i++; 
} while (i <= 100);

console.log(answer1);

//No:3

let digit;

do{
    digit = window.prompt("Enter a number > 10");
}while(digit === null || digit <= 10) 

   console.log(digit);

//No:4

const minNum = 1;
const maxNum = 100;
const answer3 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let trys = 0;
let guess;
let running = true;

while(running == true) {

    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("enter a correct number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("enter a correct number");
    }
    else {
        trys++;
        if(guess < answer) {
            window.alert("Number is low");
        }
        else if(guess > answer) {
            window.alert("Number is high");
        }
        else {
            window.alert("CORRECT!");
        }
    }

    running = false;
} 
