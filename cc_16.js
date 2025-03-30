// Task 2: Fetch Products with .then()


function fetchProductsThen() {
    console.log("Trying to get products with .then()...");
    
    // The API URL from the assignment
    const apiUrl = 'https://www.course-api.com/javascript-store-products';
    
    // Using fetch with promise chains
    fetch(apiUrl)
        .then(function(response) {
            // First check if the response is OK
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json(); // Parse the JSON
        })
        .then(function(data) {
            console.log("Got products successfully!");
            // Log first 3 product names to keep console clean
            for (let i = 0; i < 3 && i < data.length; i++) {
                console.log(data[i].fields.name);
            }
        })
        .catch(function(error) {
            console.log("Whoops, error with fetch operation", error);
            showError(error);
        });
}
