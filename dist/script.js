// 1. Write a program that determines whether a given number is positive or negative.

document.addEventListener('DOMContentLoaded',function(){
 const givenNumber = document.querySelector("#givenNumber");
 const givenNumBtn = document.querySelector("#givenNum-btn")
 const result = document.querySelector("#result")
 const setNumber = 0;

 givenNumBtn.addEventListener('click', function(){
    const inputNumber = parseFloat(givenNumber.value);
    if(inputNumber > setNumber){
        result.textContent = "This is a Positive number";
    } else if (inputNumber == setNumber){
        result.textContent = "This number is neutral";
    } else {
        result.textContent = "This number is negative";
    }
 })

});

// let givenNumber = prompt("Input Number")
// let setNumber = 0;

// if(givenNumber > setNumber){
//     alert("This is a Positive number")
// } else if (givenNumber == setNumber){
//     alert("This number is neutral")
// } else {
//     alert("This number is negative")
// }

// 2. Write a program that checks if a number is even or odd.

document.addEventListener('DOMContentLoaded',function(){
    const number = document.querySelector("#number-one");
    const numBtn = document.querySelector("#Num-btn")
    const check = document.querySelector("#check")
   
    numBtn.addEventListener('click', function(){
       const num = parseFloat(number.value);
       if (num % 2 == 0){
        check.textContent = `${num} is an even Number`
      } else{
          check.textContent = `${num} is an odd Number` 
      }    
      })
   
   });

// let num = prompt("Input number");
// let num2 = 2;

// if (num % 2 == 0){
//     alert(`${num} is an even number`)
// } else{
//     alert(`${num} is an odd number`)
// }

//3. Write a program to determine the greater of two numbers (between two numbers). Use both the if/else statement and the ternary operator.

document.addEventListener('DOMContentLoaded',function(){
    const firstNum = document.querySelector("#first-number");
    const secondNum = document.querySelector("#second-number")
    const checkBtn = document.querySelector("#check-btn")
    const outcome = document.querySelector("#outcome")
   
    checkBtn.addEventListener('click', function(){
       const firstNumber = parseFloat(firstNum.value);
       const secondNumber = parseFloat(secondNum.value)
       if (firstNumber > secondNumber){
        outcome.textContent = `${firstNumber} is greater than ${secondNumber}`
      } else if (firstNumber == secondNumber) {
        outcome.textContent = `${firstNumber} is equal to ${secondNumber}`
      } else {
        outcome.textContent = `${firstNumber} is less than ${secondNumber}`
      }
    })
   });

// let firstNum = prompt("Input First Number");
// let secondNum = prompt("Input Second Number");

// if (firstNum > secondNum){
//     alert (`${firstNum} is greater than ${secondNum}`)
// } else if (firstNum == secondNum) {
//     alert(`${firstNum} is equal to ${secondNum}`)
// } else {
//     alert(`${firstNum} is less than ${secondNum}`)
// }

//4.  Write a program that transforms a numerical grade to a letter grade (0-44: F, 45-49: D, 50-59: C, 60-69: B, 70-100: A).

document.addEventListener('DOMContentLoaded',function(){
    const grade = document.querySelector("#grade");
    const gradeBtn = document.querySelector("#grade-btn")
    const checkGrade = document.querySelector("#check-grade")
   
    gradeBtn.addEventListener('click', function(){
       const studentGrade = parseFloat(grade.value);
       if (studentGrade >= 70 || studentGrade == 100){
        checkGrade.textContent = `A`
      } else if (studentGrade >= 60){
        checkGrade.textContent = `B`
      } else if (studentGrade >= 50){
        checkGrade.textContent = `C`
      } else if (studentGrade >= 45){
        checkGrade.textContent = `D`
      } else if (studentGrade >= 0 || studentGrade <= 44){
        checkGrade.textContent = `F`
      } else(
        checkGrade.textContent = `Not a valid score`
      );
        
    })
   
});


// let studentGrade = prompt("Input Student Score");

// if (studentGrade >= 70 || studentGrade == 100){
//     alert("A")
// } else if (studentGrade >= 60){
//     alert("B")
// } else if (studentGrade >= 50){
//     alert("C")
// } else if (studentGrade >= 45){
//     alert ("D")
// } else if (studentGrade >= 0 || studentGrade <= 44){
//     alert("F")
// } else(
//     alert("Not a Valid Score")
// );


//5. Write a program that calculates the ticket price based on age with the following conditions:

document.addEventListener('DOMContentLoaded',function(){
    const customerAge = document.querySelector("#age");
    const ageBtn = document.querySelector("#age-btn")
    const checkAge = document.querySelector("#age-grade")
   
    ageBtn.addEventListener('click', function(){
       const age = parseFloat(customerAge.value);
       if (age <= 12){
        checkAge.textContent = `Your ticket price is $5`
      } else if (age <= 18){
        checkAge.textContent = `Your ticket price is $10`
      } else if (age <= 60){
        checkAge.textContent = `Your ticket price is $20`
      } else if (age >= 60){
        checkAge.textContent = `Your ticket price is $15`
      } else{
        checkAge.textContent = `No ticket for you`
      }
        
    })
   
});

// let age = prompt("Input Your age");

// if (age <= 12){
//     alert("Your ticket price is $5")
// } else if (age <= 18){
//     alert("Your ticket price is $10")
// } else if (age <= 60){
//     alert("Your ticket price is $20")
// } else if (age >= 60){
//     alert("Your ticket price is $15")
// } else {
//     alert("No ticket for you")
// }

//6. Write a program that calculates a discount based on the purchase amount:

document.addEventListener('DOMContentLoaded',function(){
    const customerPrice = document.querySelector("#price");
    const priceBtn = document.querySelector("#price-btn")
    const checkprice = document.querySelector("#price-grade")
   
    priceBtn.addEventListener('click', function(){
       const price = parseFloat(customerPrice.value);
       if (price >= 100){
        checkprice.textContent = `Your disount is $20`
      } else if(price >= 50){
        checkprice.textContent = `Your discount is $10`
      } else{
        checkprice.textContent = `You have no discount`
      };
        
    })
   
});

// let price = prompt("Enter price");

// if (price >= 100){
//     alert("Your disount is $20")
// } else if(price >= 50){
//     alert("Your discount is $10")
// } else{
//     alert("You have no discount")
// };