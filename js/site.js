// Get the numbers from the page
function getValues(){
    // get the start number
    let startValue = document.getElementById('startValue').value; // "0"
    // get the end value
    let endValue = document.getElementById('endValue').value; // "100"
    
    // turn the values into numbers
    startValue = parseInt(startValue); // 0
    endValue = parseInt(endValue); // 100

    // testing the function
    
    // Swal.fire(
    //     {
    //         backdrop: false,
    //         title: 'CENTENNIAL',
    //         text: 'Start value is ' + startValue +  ' and End value is ' + endValue, // <-- replace this with the variable
    //     }
    // );

    // generate the range of numbers
    generateValues(startValue, endValue);
}


// Generate a list of all numbers between the start and end values
function generateValues(start, end){
    // create a variable the can hold a bunch of numbers
    
    // put the start value into that variable
    // add one to that number, then add that to the variable
    // keep adding one  and putting it into variable UNTIL you reach the end value

    // somehow tell displayValues to show those numbers


}

// display each of those numbers on the page
function displayValues(){

}
