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

// Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    console.log("Trying async/await approach now...");
    
    try {
        const response = await fetch('https://www.course-api.com/javascript-store-products');

        const products = await response.json();
        showProducts(products); // Display them on page
        
    } catch (error) {
        console.error("Caught an error:", error);
        showError(error);
    }
}

// Task 4: Function to show products on the page
function showProducts(products) {
    const container = document.getElementById('product-container');
    const loading = document.getElementById('loading');
    
    // Only show first 5 products as required
    const productsToShow = products.slice(0, 5);
    
    // Check if we got any products
    if (productsToShow.length === 0) {
        container.innerHTML = '<p class="no-products">No products available</p>';
        return;
    }
    
    // Create HTML for each product
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Format price from cents to dollars
        const price = (product.fields.price / 100).toFixed(2);
        
        productCard.innerHTML = `
            <img src="${product.fields.image[0].url}" 
                 alt="${product.fields.name}" 
                 class="product-image">
            <div class="product-info">
                <h3>${product.fields.name}</h3>
                <p class="price">$${price}</p>
            </div>
        `;
        
        container.appendChild(productCard);
    });
}

// Task 5: Error handling function
function handleError(error) {
    //Printing out the error message to the console
    console.log("An error occurred: ", error);
}

