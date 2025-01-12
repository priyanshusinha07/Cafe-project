// // document.addEventListener("DOMContentLoaded", () => {
//     const orderForm = document.getElementById("orderForm");
//     const orderResult = document.getElementById("orderResult");

//     // Function to calculate the total cost of selected items
//     const calculateTotal = () => {
//         const selectedItems = Array.from(orderForm.elements["menuItem"])
//             .filter(item => item.checked)
//             .map(item => item.value);

//         if (selectedItems.length === 0) {
//             orderResult.textContent = "No items selected.";
//             return;
//         }

//         const totalCost = selectedItems.reduce((total, item) => {
//             const price = parseFloat(item.match(/\$(\d+(\.\d+)?)/)[1]);
//             return total + price;
//         }, 0);

//         orderResult.textContent = `You ordered: ${selectedItems.join(", ")}. Total: $${totalCost.toFixed(2)}`;
//     };

//     // Handle form submission
//     orderForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         calculateTotal();
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm");
    const orderResult = document.getElementById("orderResult");

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting and reloading the page

        // Get all checked menu items
        const selectedItems = document.querySelectorAll('input[name="menuItem"]:checked');
        
        // Initialize variables for order details
        let orderSummary = '';
        let totalAmount = 0;

        // Loop through all selected items and calculate the total price
        selectedItems.forEach((item) => {
            const itemValue = item.value.split(" - ₹");  // Split the value to get the name and price
            const itemName = itemValue[0];
            const itemPrice = parseInt(itemValue[1]);

            orderSummary += `<p>${itemName} - ₹${itemPrice}</p>`;
            totalAmount += itemPrice;
        });

        // Display the order summary and total amount
        if (orderSummary) {
            orderResult.innerHTML = `
                <h3>Your Order:</h3>
                ${orderSummary}
                <h3>Total Amount: ₹${totalAmount}</h3>
                <p>Thank you for your order!</p>
            `;
        } else {
            orderResult.innerHTML = "<p>Please select at least one item to place an order.</p>";
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission and page reload

        const selectedItems = document.querySelectorAll('input[name="menuItem"]:checked');
        let orderSummary = '';
        let totalAmount = 0;

        selectedItems.forEach((item) => {
            const [itemName, itemPrice] = item.value.split(" - ₹");
            const price = parseInt(itemPrice);
            orderSummary += `<p>${itemName} - ₹${price}</p>`;
            totalAmount += price;
        });

        if (orderSummary) {
            // Store order details in sessionStorage
            sessionStorage.setItem("orderData", orderSummary);
            sessionStorage.setItem("orderTotal", totalAmount);
            
            // Redirect to payment page
            window.location.href = "payment.html";
        } else {
            alert("Please select at least one item.");
        }
    });
});
