// Function to render your items
const renderYearItems = (data) => {
    // The `div` where the items will be inserted
    const yearContainer = document.getElementById('year-container');

    // Loop through each item in the data array
    data.forEach((item) => {
        let year = item.Year; 
        let description = item.Description;

        // Make a template literal as we have before, inserting your data
        let yearItemHTML = `
            <div class="year-header">
                <h1 class="weight-light">${year}</h1>
                <p>${description}</p>
            </div>
        `;

        yearContainer.insertAdjacentHTML('beforeend', yearItemHTML); // Add it to the `div`!
    });
};

// Fetch gets your (local) JSON file…
fetch('js/year.json')
    .then(response => response.json())
    .then(data => {
        // And passes the data to the function, above!
        renderYearItems(data);
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
