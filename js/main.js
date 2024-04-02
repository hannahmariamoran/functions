// Function to render your items
const renderItems = (data) => {
    // The `ul` where the items will be inserted
    const dataList = document.getElementById('data-list');

    // Loop through each item in the data array
    data.forEach((item) => {

        // Make a template literal as we have before, inserting your data
        let listItem = `
            <li>
                <div class="content-blocks">
                    <div class="week">
                        <h3>${item.Week}</h3>
                    </div>
                    <div class="image-content">
                        <img src="${item.Image}">
                        <div class="item-details">
                            <h4>${item.Date}</h4>
                            <h4>${item.Location}</h4>
                        </div>
                        <h2>${item.Title}</h2>
                        <p>${item.Description}</p>
                    </div>
                </div>
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
