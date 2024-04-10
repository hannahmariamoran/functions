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
            <div class="year-header" id="year-${year}">
                <h1 class="weight-light">${year}</h1>
                <p>${description}</p>
            </div>
        `;

        yearContainer.insertAdjacentHTML('beforeend', yearItemHTML); // Add it to the `div`!
    });
};

//get items from html
const YearAll = document.querySelectorAll('.year-header');
const Year2024 = document.getElementById('year-2024');
const Year2023 = document.getElementById('year-2023');
const Year2022 = document.getElementById('year-2022');

//on click
btn2024.onclick = () => {
    console.log("2024 year btn clicked");

    //hide everything
    Array.from(YearAll).forEach(item => {
        console.log(item);
        item.style.display = 'none';
    });

    //show 2024
    Year2024.style.display = 'block';
}

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
