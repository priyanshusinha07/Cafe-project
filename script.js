// Table Booking Form
document.getElementById('tableForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    const result = `Thank you, ${name}. Your table for ${guests} guests is booked on ${date} at ${time}.`;
    document.getElementById('tableResult').innerText = result;
    e.target.reset();
});

// Payment Form
document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const cardName = document.getElementById('cardName').value;

    const result = `Payment successful! Thank you, ${cardName}. Your order will be delivered soon.`;
    document.getElementById('paymentResult').innerText = result;
    e.target.reset();
});

// Feedback Form
document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const feedback = document.getElementById('feedbackText').value;

    const result = `Thank you for your feedback: "${feedback}"`;
    document.getElementById('feedbackResult').innerText = result;
    e.target.reset();
});
