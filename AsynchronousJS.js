// Asynchronous JavaScript: Using Callbacks

function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);


console.log("line 1");
setTimeout(function() {
    console.log("line 2");
}, 2000);
console.log("line 3");

setInterval(function() {
   // console.log("This message is shown every 3 seconds");
}, 1000);




// Callback
const paymentSuccess = true;
const marks = 75;


function enroll( callback) {
    console.log("Student has been enrolled");
    setTimeout(function() {
        if (paymentSuccess) {
            console.log("Payment successful");
            callback();
        } else {
            console.log("Payment failed");
        }
    }, 2000);
}


function progress(callback) {
    console.log("Course in progress...");
    setTimeout(function() {
        if (marks >= 60) {
            callback();
        } else {
            console.log("Student has not completed the course");
        }
    }, 3000);
}   
function getCertificate() {
    console.log("Preparing your certificate...");
    setTimeout(function() {
        console.log("Congratulations! You have received your certificate.");
    }, 1000);
}   

enroll(function() {
    progress(function() {
        getCertificate();
    });
});
