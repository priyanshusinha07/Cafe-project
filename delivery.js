document.addEventListener("DOMContentLoaded", () => {
    const statusElement = document.querySelector('.status');
    const progressBar = document.querySelector('progress');
    const feedbackLink = document.querySelector('.feedback-link');
    const estimatedDeliveryTime = document.querySelector('.info-box p strong');
    const trackingBox = document.querySelector('.tracking-box');
    
    // Simulate Delivery Process (You can use actual data here)
    let currentStatus = "Being Prepared"; // Example initial status
    let progressValue = 40; // Example initial progress
    let estimatedTime = "Around 30-45 minutes"; // Estimated Delivery Time
    
    // Function to update the delivery progress and status
    function updateDeliveryStatus() {
        // You can make these updates dynamic based on actual data
        statusElement.textContent = currentStatus;
        progressBar.value = progressValue;
        
        // Changing estimated delivery time if needed
        if (currentStatus === "Out for Delivery") {
            estimatedTime = "Within 10 minutes";
            estimatedDeliveryTime.textContent = estimatedTime;
        }
        
        // Simulating status updates and progress over time
        if (currentStatus === "Being Prepared") {
            setTimeout(() => {
                currentStatus = "Out for Delivery";
                progressValue = 70;
                updateDeliveryStatus(); // Update the status and progress bar
            }, 5000); // After 5 seconds, update the status
        } else if (currentStatus === "Out for Delivery") {
            setTimeout(() => {
                currentStatus = "Delivered";
                progressValue = 100;
                updateDeliveryStatus(); // Update status and progress bar
                trackingBox.innerHTML = `
                    <h2>Track Your Order</h2>
                    <p>Current Status: <span class="status">${currentStatus}</span></p>
                    <p>Your order has been delivered. Thank you for ordering!</p>
                `;
            }, 10000); // After 10 seconds, set status to "Delivered"
        }
    }
    
    // Initialize the status and delivery tracking
    updateDeliveryStatus();
    
    // Handle feedback link click (you can dynamically handle user feedback submission here)
    feedbackLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert("Thank you for your feedback!");
        window.location.href = "/feedback.html"; // Redirect to feedback page
    });
});
