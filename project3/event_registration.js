/*
		Your Name: <Enter Your Name>
		Last Modified Date: <Enter The Date in mm/dd/yyyy format>
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/
// Item 1: Countdown Timer
// Get the current time
const startTime = new Date().getTime();

// Calculate the end time (10 minutes from now)
const endTime = startTime + (10 * 60 * 1000); // 10 minutes * 60 seconds * 1000 milliseconds

// Function to update the countdown timer
const updateTimer = () => {
    // Get the current time
    const currentTime = new Date().getTime();
    
    // Calculate the time difference between current time and end time
    let timeLeft = endTime - currentTime;
    
    // Convert time difference to minutes and seconds
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    // Add leading zero if seconds is less than 10
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    // Display the time remaining
    document.getElementById("timer").textContent = `${minutes}:${seconds}`;
    
    // Check if time is up
    if (timeLeft <= 0) {
        clearInterval(timerInterval); // Stop the timer
        alert("Your timer has expired!");
        location.href = location.href; // Redirect to the same page
    }
};

// Call updateTimer function every second
const timerInterval = setInterval(updateTimer, 1000);

// Item 2: JavaScript functions

// Item #1: Calculate Total
function calculateTotal() {
    const numTicketsInput = document.getElementById('numTickets');
    const msgTickets = document.getElementById('msgTickets');
    const contactInfo = document.getElementById('contactInformation');

    // Reset error message and styles
    msgTickets.textContent = '';
    numTicketsInput.style.backgroundColor = 'white';

    // Get number of tickets
    const numTickets = parseInt(numTicketsInput.value);

    // Check if the input is a number and within the range
    if (isNaN(numTickets) || numTickets < 1 || numTickets > 3) {
        msgTickets.textContent = 'Please enter a number between 1 and 3.';
        numTicketsInput.style.backgroundColor = 'lightcoral';
        contactInfo.style.display = 'none';
        return;
    }

    // Show contact information section
    contactInfo.style.display = 'block';
}

// Item #2: Complete Purchase
function completePurchase() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgName = document.getElementById('msgname');
    const msgEmail = document.getElementById('msgemail');

    // Reset error messages and styles
    msgName.textContent = '';
    msgEmail.textContent = '';
    nameInput.style.backgroundColor = 'white';
    emailInput.style.backgroundColor = 'white';

    // Get name and email
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate name and email
    if (!name) {
        msgName.textContent = 'Please enter your name.';
        nameInput.style.backgroundColor = 'lightcoral';
    }
    if (!email) {
        msgEmail.textContent = 'Please enter a valid email.';
        emailInput.style.backgroundColor = 'lightcoral';
    }

    // If no errors, proceed with the purchase
    if (name && email) {
        const totalCost = document.getElementById('totalCost').value;
        alert(`Thank you for your purchase, ${name}! Your total cost is ${totalCost}`);
        clearInterval(timerInterval); // Stop the timer
    }
}
