for ( let i = 1; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 7 === 0)) {
        console.log("FizzBuzz")
    } else if (i % 5 === 0) {
        console.log("Fizz")
    } else if (i % 7 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

for (let i = 1; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 7 === 0)) {
        console.log("ChickenMonkey")
    } else if (i % 5 === 0) { 
        console.log("Chicken")
    } else if (i % 7 === 0) { 
        console.log("Monkey")
    } else {
        console.log(i)
    }
}

//reverse a string
function reverse(string) {
    console.log(string.split('').reverse().join(''))
}

reverse("Charles Jackson is cool")

let str = "I'm so cold."
console.log(str.split('').reverse().join(''))



const sheeps = ['🐑', '🐑', '🐑'];

const fakeSheeps = sheeps;
const cloneSheeps = [...sheeps];

console.log(sheeps === fakeSheeps);
// true --> it's pointing to the same memory space

console.log(sheeps === cloneSheeps);
// false --> it's pointing to a new memory space

const lunch = {
	sandwich: 'ham',
	snack: 'chips',
	drink: 'soda',
	desert: 'cookie',
	guests: 3,
	alcohol: false,
};

Object.keys(lunch).forEach(function (item) {

});