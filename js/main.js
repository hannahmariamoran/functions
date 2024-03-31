// Function to render your items
const renderItems = (data) => {
    // The `ul` where the items will be inserted
    const dataList = document.getElementById('data-list');

    // Loop through each item in the data array
    data.forEach((item) => {
        let conditionalClass = ''; 

        // Make a template literal as we have before, inserting your data (and maybe the class)
        let listItem = `
            <li class="${conditionalClass}">
                <h2>${item.Title}</h2>
                <img src="${item.Image}">
                <p>Captured on <time>${item.Date}</time></p>
                <p><em>${item.Location}</em></p>
                <p>${item.Description}</p>
            </li>
        `;

        dataList.insertAdjacentHTML('beforeend', listItem); // Add it to the `ul`!
    });
};

// Fetch gets your (local) JSON file…
fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        // And passes the data to the function, above!
        renderItems(data);
    })
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });
