// Get the numbers from the page
function getValues(){
    // get the start number
    let startValue = document.getElementById('startValue').value; // "0"
    // get the end value
    let endValue = document.getElementById('endValue').value; // "100"
    
    // turn the values into numbers
    startValue = parseInt(startValue); // 0
    endValue = parseInt(endValue); // 100

    // generate the range of numbers
    let generatedValues = generateValues(startValue, endValue);
    
    // display the list of numbers 
    displayValues(generatedValues);
}

// Generate a list of all numbers between the start and end values
function generateValues(start, end){
    // create a variable the can hold a bunch of numbers
    let numbers = [];
    
    // put the start value into that variable
    // add one to that number, then add that to the variable
    // keep adding one  and putting it into variable UNTIL you reach the end value
    for(let n = start; n <= end; n++) {
        numbers.push(n);
    }
    return numbers;   
}
    
// display each of those numbers on the page
function displayValues(numbers){

    // create a variable for the HTML + numbers
    let html = '';

    // make a loop to get each number from the array
    for (let index = 0; index < numbers.length; index = index + 1){

        let currentNumber = numbers[index];

        html = html + '<tr><td>' + currentNumber + '</td></tr>'; 
    }
    
    // with each number, put it on the page
    // e.g. <tr><td> i </td></tr>
    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
    /* 
        TODO: make the even numbers bold
    */
}
        
    



