// Get the form element
const form = document.getElementById('form');

// Listen for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    try {
        // Create FormData object from the form
        const formData = new FormData(form);

        // Convert FormData to a plain object
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        
        console.log(data)
        alert("Thanks for the Feedback ;)")

    } catch (error) {
        console.error("Error reading form data:", error);
    }
});

