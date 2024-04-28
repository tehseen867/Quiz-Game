import inquirer from "inquirer";
let userInput = await inquirer.prompt({
    name: 'userName',
    message: 'hey whats your name?'
});
console.log(`Hello ${userInput.userName} WELCOME IN THE QUIZ GAME. LETS GET STARTED`);
let Q1 = await inquirer.prompt({
    name: 'question1',
    type: 'list',
    message: 'what is 2 + 2 ?',
    choices: ['(A) 8',
        '(B) 4 ',
        '(C) 6',
        '(D) 10 ']
});
if (Q1.question1 === '(B) 4 ') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q2 = await inquirer.prompt({
    name: 'question2',
    type: 'list',
    message: 'What is the capital of France?',
    choices: ['(A) London',
        '(B) Paris ',
        '(C) Rome',
        '(D) Berlin']
});
if (Q2.question2 === '(B) Paris ') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q3 = await inquirer.prompt({
    name: 'question3',
    type: 'list',
    message: 'What is the chemical symbol for water?',
    choices: ['(A) W',
        '(B) H2',
        '(C) O',
        '(D) H2O']
});
if (Q3.question3 === '(D) H2O') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q4 = await inquirer.prompt({
    name: 'question4',
    type: 'list',
    message: 'Who wrote "Romeo and Juliet"?',
    choices: ['(A) Mark Twain',
        '(B) Charles Dickens',
        '(C) William Shakespeare',
        '(D) Jane Austen']
});
if (Q4.question4 === '(C) William Shakespeare') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q5 = await inquirer.prompt({
    name: 'question5',
    type: 'list',
    message: 'In which year did Christopher Columbus discover America?',
    choices: ['(A) 1492 ',
        '(B) 1776',
        '(C) 1066',
        '(D) 1519']
});
if (Q5.question5 === '(A) 1492 ') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q6 = await inquirer.prompt({
    name: 'question6',
    type: 'list',
    message: 'What is the capital of the United States?',
    choices: ['(A) New York City',
        '(B) Washington, D.C.',
        '(C) Los Angeles',
        '(D) Chicago']
});
if (Q6.question6 === '(B) Washington, D.C.') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q7 = await inquirer.prompt({
    name: 'question7',
    type: 'list',
    message: 'How many players are there on a basketball team?',
    choices: ['(A) 8 ',
        '(B) 6',
        '(C) 7',
        '(D) 5 ']
});
if (Q7.question7 === '(D) 5 ') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q8 = await inquirer.prompt({
    name: 'question8',
    type: 'list',
    message: 'What do the letters in "CPU" stand for?',
    choices: ['(A) Computer Processing Unit',
        '(B) Central Processing Unit ',
        '(C) Computer Programming Unit',
        '(D) Central Programming Unit',]
});
if (Q8.question8 === '(B) Central Processing Unit ') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q9 = await inquirer.prompt({
    name: 'question9',
    type: 'list',
    message: 'Who played the character of Harry Potter in the Harry Potter film series?',
    choices: ['(A) Daniel Radcliffe ',
        '(B) Rupert Grint',
        '(C) Emma Watson',
        '(D) Tom Felton']
});
if (Q9.question9 === '(A) Daniel Radcliffe ') {
    console.log('CORRECT ANSWER');
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
let Q10 = await inquirer.prompt({
    name: 'question10',
    type: 'list',
    message: 'Which animal is known as the "king of the jungle"?',
    choices: ['(A) Tiger',
        '(B) Elephant',
        '(C) Lion ',
        '(D) Gorilla']
});
if (Q10.question10 === '(C) Lion ') {
    console.log('CORRECT ANSWER');
    console.log(`CONGRATULATIONS ${userInput.userName}!! YOU WON THE QUIZ`);
}
else {
    console.log(' WRONG ANSWER. you lost the game');
    process.exit();
}
