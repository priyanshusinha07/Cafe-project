 // Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const feedbackForm = document.getElementById("feedbackForm");
    const feedbackText = document.getElementById("feedbackText");

    feedbackForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect ratings
        const cafeRating = getSelectedRating("cafeRating");
        const staffRating = getSelectedRating("staffRating");
        const viewRating = getSelectedRating("viewRating");
        const sittingRating = getSelectedRating("sittingRating");

        // Validate that all ratings are selected
        if (!cafeRating || !staffRating || !viewRating || !sittingRating) {
            alert("Please provide ratings for all categories.");
            return;
        }

        // Validate feedback text
        if (!feedbackText.value.trim()) {
            alert("Please share your comments in the feedback text.");
            return;
        }

        // Calculate average rating
        const averageRating = (
            (parseInt(cafeRating) +
            parseInt(staffRating) +
            parseInt(viewRating) +
            parseInt(sittingRating)) / 4
        ).toFixed(1);

        // Display the receipt
        showFeedbackReceipt(feedbackText.value, averageRating, {
            cafeRating,
            staffRating,
            viewRating,
            sittingRating,
        });
    });

    /**
     * Get the selected rating for a given category
     * @param {string} ratingName - The name of the radio button group
     * @returns {string|null} - The selected rating value or null
     */
    function getSelectedRating(ratingName) {
        const ratings = document.getElementsByName(ratingName);
        for (const rating of ratings) {
            if (rating.checked) {
                return rating.value;
            }
        }
        return null;
    }

    /**
     * Show the feedback receipt
     * @param {string} feedbackText - The user's comments
     * @param {string} averageRating - The average rating
     * @param {object} ratings - Individual category ratings
     */
    function showFeedbackReceipt(feedbackText, averageRating, ratings) {
        const receiptWindow = window.open("", "_blank");
        receiptWindow.document.write(`
            <html>
                <head>
                    <title>Feedback Receipt</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 20px;
                            line-height: 1.6;
                            background: orange;
                        }
                        .receipt {
                            border: 2px solid #333;
                            padding: 20px;
                            border-radius: 10px;
                            max-width: 600px;
                            margin: 0 auto;
                            background: skyblue;
                        }
                        h1 {
                            text-align: center;
                            color: #007BFF;
                        }
                        p {
                            margin: 5px 0;
                        }
                        .exit-btn {
                            display: block;
                            margin: 20px auto;
                            padding: 10px 20px;
                            font-size: 16px;
                            background-color: #FF4C4C;
                            color: white;
                            border: none;
                            border-radius: 5px;
                            cursor: pointer;
                        }
                        .exit-btn:hover {
                            background-color: #FF2C2C;
                        }
                    </style>
                </head>
                <body>
                    <div class="receipt">
                        <h1>Feedback Receipt</h1>
                        <p><strong>Comments:</strong> ${feedbackText}</p>
                        <p><strong>Café Condition Rating:</strong> ${ratings.cafeRating} ★</p>
                        <p><strong>Staff Rating:</strong> ${ratings.staffRating} ★</p>
                        <p><strong>View Rating:</strong> ${ratings.viewRating} ★</p>
                        <p><strong>Sitting Arrangement Rating:</strong> ${ratings.sittingRating} ★</p>
                        <p><strong>Average Rating:</strong> ${averageRating} ★</p>
                        <button class="exit-btn" onclick="window.close()">Exit</button>
                    </div>
                </body>
            </html>
        `);
        receiptWindow.document.close();
    }
});
