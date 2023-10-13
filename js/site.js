// from site.js
// Get the numbers from the page
function getValues(){
    // get the start number
    let startValue = document.getElementById('startValue').value; // "0"
    // get the end value
    let endValue = document.getElementById('endValue').value; // "100"
    
    // turn the values into numbers
    startValue = parseInt(startValue); // 0
    endValue = parseInt(endValue); // 100

    // Validate user input
    if (startValue !== null && endValue !== null || isEmptyOrSpaces(startValue) && isEmptyOrSpaces(endValue)){
        if (Number.isInteger(startValue) && Number.isInteger(endValue) && startValue < endValue)
        {
            // generate the range of numbers
            let generatedValues = generateValues(startValue, endValue);
            // we call displayNumbers
            displayValues(generatedValues);
        }
        else 
        {
            Swal.fire(
            {
                icon: 'error',
                backdrop: false,
                title: 'Oops!',
                text: 'Please enter valid numbers only. Ensure start number is less than end number'
            });
        }
    } else {
        Swal.fire(
            {
                icon: 'error',
                title: 'Oops...',
                text: ' Please ensure all fields contain a number'
            }
        )
    }



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
    for (let index = 0; index < numbers.length; index += 1){
        
        let className = '';
        let currentNumber = numbers[index];

        if (currentNumber % 2 == 0 ){
            // if currentNumber is even
            className = 'even';
        }
        else {
            // if currentNumber is odd
            className = 'odd';
        }
        html +=  `<tr><td class="${className}">${currentNumber}</td></tr>`; 
    }
    
    // with each number, put it on the page
    // e.g. <tr><td> i </td></tr>
    let tbody = document.getElementById('results');
    tbody.innerHTML = html;
}
        
    



