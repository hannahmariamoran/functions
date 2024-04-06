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
                        <p class="week-text">${item.Week}</p>
                    </div>
                    <div class="image-content">
                        <img src="${item.Image}">
                        <div class="item-details">
                            <h6>${item.Date}</h6>
                            <h6>${item.Location}</h6>
                        </div>
                        <h5>${item.Title}</h5>
                        <p>${item.Description}</p>
                    </div>
                </div>
            </li>
        `;


        dataList.insertAdjacentHTML('beforeend', listItem); // Add it to the `ul`!
    });
};

// function to open and close 'code' button pop over that leads ppl to github
function openCodeBox() {
    var codeBox = document.getElementById('code-box');
    codeBox.style.display = 'flex';
}

function closeCodeBox() {
    var codeBox = document.getElementById('code-box');
    codeBox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var codeButton = document.querySelector('.buttons button:nth-of-type(2)'); 
    var closeButton = document.getElementById('closeBtn');

    codeButton.addEventListener('click', function() {
        openCodeBox();
    });

    closeButton.addEventListener('click', function() {
        closeCodeBox();
    });
});

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
