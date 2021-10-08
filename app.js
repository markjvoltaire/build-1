// import functions and grab DOM elements
const getNumber = document.getElementById('generate');
const results = document.getElementById('random-num');

// initialize global state
const randomFunction = Math.floor(Math.random() * 100) + 1;

// set event listeners
getNumber.addEventListener('click', ()=>{
    results.textContent = randomFunction;
});
// get user input
// use user input to update state 
// update DOM to reflect the new state

