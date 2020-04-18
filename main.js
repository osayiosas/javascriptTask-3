/*Task:

Write a function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter 
(inclusive) are divisible by 2,3,5 while replacing with the appropriate words as specified below.

* Numbers divisible by 2 are replaced by "yu"

* Numbers divisible by 3 are replaced by "gi"

* Numbers divisible by 5 are replaced by "oh"

* Numbers are unchanged if not divsible by any of the above

 

If a number is divisible by more than one of the above, replace and join the words representing their divsiors, 
separating by hyphen (-).

NB: "divisible" in this case means no remainder after division.

 

Return an array containing all numbers from 1 to the passed argument(inclusive) where all divisible numbers have been
replaced as specified above.*/

//i created an arr. also worked with loops and number functions.



const Function = (parmater) => {
  numberDivisible = [];
  for (let i = 0; i < parmater; i++) {
    numberDivisible[i] = i + 1;
    if (
        numberDivisible[i] % 2 === 0 &&
      numberDivisible[i] % 3 === 0 &&
      numberDivisible[i] % 5 === 0
    )
    numberDivisible[i] = "yu-gi-0h";
    if (numberDivisible[i] % 2 === 0 && numberDivisible[i] % 5 === 0)
    numberDivisible[i] = "yu-oh";
    if (numberDivisible[i] % 2 === 0 && numberDivisible[i] % 3 === 0)
    numberDivisible[i] = "yu-gi";
    if (numberDivisible[i] % 2 === 0)numberDivisible[i] = "yu";
    if (numberDivisible[i] % 3 === 0)numberDivisible[i] = "gi";
    if (numberDivisible[i] % 5 === 0)numberDivisible[i] = "oh";
  }
  return numberDivisible;
};

Function(100);
console.log(numberDivisible);
Function(70);
console.log(numberDivisible);
Function(40);
console.log(numberDivisible);