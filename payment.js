// document.addEventListener("DOMContentLoaded", () => {
//     const orderDetailsElement = document.getElementById("orderDetails");
//     const totalAmountElement = document.getElementById("totalAmount");
//     const paytmButton = document.getElementById("paytmButton");
//     const paymentForm = document.getElementById("paymentForm");
//     const paymentResult = document.getElementById("paymentResult");
//     const deliveryBox = document.querySelector(".delivery-box");
//     const deliveryLink = deliveryBox.querySelector("a");

//     // Retrieve the order data and total from sessionStorage
//     const orderData = sessionStorage.getItem("orderData");
//     const orderTotal = sessionStorage.getItem("orderTotal");

//     // Check if order data exists and display it
//     if (orderData && orderTotal) {
//         orderDetailsElement.innerHTML = orderData; // Display the order summary
//         totalAmountElement.textContent = `₹${orderTotal}`; // Display the total amount
//     } else {
//         orderDetailsElement.innerHTML = "No order found. Please place an order first.";
//         totalAmountElement.textContent = "₹0";
//     }

//     // Hide the delivery link initially
//     deliveryBox.style.display = "none";

//     // Function to handle payment success
//     function handlePaymentSuccess(paymentMethod) {
//         paymentResult.textContent = `Payment Successful via ${paymentMethod}!`;
//         paymentResult.style.color = "green";

//         // Show the delivery link after payment success
//         deliveryBox.style.display = "block";
//         deliveryLink.style.pointerEvents = "auto"; // Enable the link
//     }

//     // Handle Paytm/PhonePe payment
//     paytmButton.addEventListener("click", () => {
//         const phoneNumber = document.getElementById("phoneNumber").value.trim();
//         if (!phoneNumber || phoneNumber.length < 10 || isNaN(phoneNumber)) {
//             alert("Please enter a valid 10-digit phone number.");
//             return;
//         }

//         // Simulate successful payment via Paytm/PhonePe
//         alert("Processing payment via Paytm/PhonePe...");
//         setTimeout(() => {
//             handlePaymentSuccess("Paytm/PhonePe");
//         }, 1000);
//     });

//     // Handle Debit/Credit Card Payment
//     paymentForm.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const cardName = document.getElementById("cardName").value.trim();
//         const cardNumber = document.getElementById("cardNumber").value.trim();
//         const expiryDate = document.getElementById("expiryDate").value.trim();
//         const cvv = document.getElementById("cvv").value.trim();

//         if (!cardName || !cardNumber || !expiryDate || !cvv) {
//             alert("Please fill in all card details.");
//             return;
//         }

//         if (cardNumber.length !== 16 || isNaN(cardNumber)) {
//             alert("Please enter a valid 16-digit card number.");
//             return;
//         }

//         if (cvv.length !== 3 || isNaN(cvv)) {
//             alert("Please enter a valid 3-digit CVV.");
//             return;
//         }

//         // Simulate successful payment via Debit/Credit Card
//         alert("Processing payment via Debit/Credit Card...");
//         setTimeout(() => {
//             handlePaymentSuccess("Debit/Credit Card");
//         }, 1000);
//     });
// });

// best code

document.addEventListener("DOMContentLoaded", () => {
    const orderDetailsElement = document.getElementById("orderDetails");
    const totalAmountElement = document.getElementById("totalAmount");
    const paytmButton = document.getElementById("paytmButton");
    const paymentForm = document.getElementById("paymentForm");
    const paymentResult = document.getElementById("paymentResult");
    const receiptLink = document.getElementById("receiptLink");
    const deliveryBox = document.querySelector(".delivery-box");
    const deliveryLink = deliveryBox.querySelector("a");

    // Retrieve the order data and total from sessionStorage
    const orderData = sessionStorage.getItem("orderData");
    const orderTotal = sessionStorage.getItem("orderTotal");

    // Check if order data exists and display it
    if (orderData && orderTotal) {
        orderDetailsElement.innerHTML = orderData; // Display the order summary
        totalAmountElement.textContent = `₹${orderTotal}`; // Display the total amount
    } else {
        orderDetailsElement.innerHTML = "No order found. Please place an order first.";
        totalAmountElement.textContent = "₹0";
    }

    // Hide the delivery link and receipt link initially
    deliveryBox.style.display = "none";
    receiptLink.style.display = "none";

    // Function to handle payment success
    function handlePaymentSuccess(paymentMethod) {
        paymentResult.textContent = `Payment Successful via ${paymentMethod}!`;
        paymentResult.style.color = "green";

        // Show the receipt link
        generateReceipt(orderData, orderTotal);
        receiptLink.style.display = "inline";

        // Show the delivery link
        deliveryBox.style.display = "block";
        deliveryLink.style.pointerEvents = "auto"; // Enable the link
    }

    // Function to generate and display the receipt
    function generateReceipt(orderData, orderTotal) {
        const receiptContent = `
            <h2>Receipt</h2>
            <p><strong>Order Details:</strong></p>
            <p>${orderData}</p>
            <p><strong>Total Amount:</strong> ₹${orderTotal}</p>
            <body style="
    background: greenyellow;
    "> 
        </body>
            <p>Thank you for your payment!</p>
        `;

        // Create a new Blob for the receipt content
        const blob = new Blob([receiptContent], { type: "text/html" });
        const receiptURL = URL.createObjectURL(blob);

        // Update the receipt link
        receiptLink.href = receiptURL;
        receiptLink.textContent = "View Receipt";
        receiptLink.target = "_blank";
    }

    // Handle Paytm/PhonePe payment
    paytmButton.addEventListener("click", () => {
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        if (!phoneNumber || phoneNumber.length < 10 || isNaN(phoneNumber)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Simulate successful payment via Paytm/PhonePe
        alert("Processing payment via Paytm/PhonePe...");
        setTimeout(() => {
            handlePaymentSuccess("Paytm/PhonePe");
        }, 1000);
    });

    // Handle Debit/Credit Card Payment
    paymentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const cardName = document.getElementById("cardName").value.trim();
        const cardNumber = document.getElementById("cardNumber").value.trim();
        const expiryDate = document.getElementById("expiryDate").value.trim();
        const cvv = document.getElementById("cvv").value.trim();

        if (!cardName || !cardNumber || !expiryDate || !cvv) {
            alert("Please fill in all card details.");
            return;
        }

        if (cardNumber.length !== 16 || isNaN(cardNumber)) {
            alert("Please enter a valid 16-digit card number.");
            return;
        }

        if (cvv.length !== 3 || isNaN(cvv)) {
            alert("Please enter a valid 3-digit CVV.");
            return;
        }

        // Simulate successful payment via Debit/Credit Card
        alert("Processing payment via Debit/Credit Card...");
        setTimeout(() => {
            handlePaymentSuccess("Debit/Credit Card");
        }, 1000);
    });
});
