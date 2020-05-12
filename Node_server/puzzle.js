import fs from 'fs'

const file = fs.readFileSync('./public/input.txt');

console.time('funchallenge1');
const toStr = file.toString();
const strArry = toStr.split('');
//reduce is the fastest way to count every element.
const answer = strArry.reduce((acc, data) => {
    if(data === '(') {
        return ++acc;
    }
    else {
        return --acc;
    }
}, 0)
console.timeEnd('funchallenge1');
console.log('total 1: ', answer);

console.time('funchallenge2');
const toStr2 = file.toString();
const strArry2 = toStr2.split('');
let accumulator = 0;
let counter = 0;
//some will exit when the condition is met.
const answer2 = strArry2.some((data) => {
    if(data === '(') {
        ++accumulator;
    }
    else {
        --accumulator;
    }
    ++counter;
    return accumulator < 0;
})

console.timeEnd('funchallenge2');
console.log('total 2: ', counter);
