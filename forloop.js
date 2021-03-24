/* Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, 
"buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5 */

for(let i=1; i<=100; i++){
    if ((i%3 === 0) && (i%5 === 0)) {
        console.log(`i ==>${i} , fizzbuzz`);
    } else if(i%3 === 0) {
        console.log(`i ==>${i} , fizz`);
    } else if(i%5 === 0) {
        console.log(`i ==>${i} , buzz`);
    } else {
        console.log(`i ==>${i}`);
    }
}

// Q3: What will be returned by each of these?
console.log("hello" || "world") // o/p ==> "hello" 
// returns the first string as OR condition checks for atleat one true condition (exists)

console.log("foo" && "bar") // o/p ==> "bar"
// returns the second string as AND condition checks for all true condition (all expressions should validate to true)

// Q4: Write an immediately invoked function expression (IIFE)

// IIFE is a function which executes right away after declaring and defining the function.

(addTwo = (a =2, b =3) => {
    return a +b;
})();