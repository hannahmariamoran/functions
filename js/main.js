// Function to render your items
const renderItems = (data) => {
    // The `ul` where the items will be inserted
    const dataList = document.getElementById('data-list');

    // Loop through each item in the data array
    data.forEach((item) => {
        let year = item.Year; 

        // Make a template literal as we have before, inserting your data
        let listItem = `
            <li class="item-${year}"> 
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

    // adding an id tag to the last ul item so when 'end' button is clicked, it scrolls to the end of the list
    const lastUlitem = dataList.lastElementChild; 
    lastUlitem.id = 'last-item'; 
};

// Function to render items with 2024
const render2024Items = (data) => {
    const dataList = document.getElementById('2024-data-list');

    data.forEach((item) => {
        let year = item.Year;

        if (year === 2024) {
            let listItem = `
                <li class="item-${year}"> 
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

            dataList.insertAdjacentHTML('beforeend', listItem);
        }
    });

    const lastUlitem = dataList.lastElementChild; 
    lastUlitem.id = 'last-item'; 
};

// Function to render items with 2023
const render2023Items = (data) => {
    const dataList = document.getElementById('2023-data-list');

    data.forEach((item) => {
        let year = item.Year;

        if (year === 2023) {
            let listItem = `
                <li class="item-${year}"> 
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

            dataList.insertAdjacentHTML('beforeend', listItem);
        }
    });

    const lastUlitem = dataList.lastElementChild; 
    lastUlitem.id = 'last-item'; 
};

// Function to render items with 2023
const render2022Items = (data) => {
    const dataList = document.getElementById('2022-data-list');

    data.forEach((item) => {
        let year = item.Year;

        if (year === 2022) {
            let listItem = `
                <li class="item-${year}"> 
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

            dataList.insertAdjacentHTML('beforeend', listItem);
        }
    });

    const lastUlitem = dataList.lastElementChild; 
    lastUlitem.id = 'last-item'; 
};

// function to open and close the 'about' button popover that tells users about the project
function openAboutBox() {
    var aboutBox = document.getElementById('about-box');
    aboutBox.style.display = 'flex';
}

function closeAboutBox() {
    var aboutBox = document.getElementById('about-box');
    aboutBox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var aboutButton = document.querySelector('.buttons button:nth-of-type(1)'); 
    var closeButton = document.getElementById('closeBtn'); 

    aboutButton.addEventListener('click', function() {
        openAboutBox();
    });

    closeButton.addEventListener('click', function() {
        closeAboutBox();
    });
});

// function to open and close 'code' button pop over that leads users to github
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
    var closeButton = document.getElementById('codecloseBtn');

    codeButton.addEventListener('click', function() {
        openCodeBox();
    });

    closeButton.addEventListener('click', function() {
        closeCodeBox();
    });
});

// function to open and close lightbox with image enlgarged
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const dataList = document.getElementById('data-list');

    dataList.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            const imageSrc = event.target.src;
            openLightbox(imageSrc);
        }
    });

    const lightboxCloseBtn = document.getElementById('lightbox-close-button');
    lightboxCloseBtn.addEventListener('click', function() {
        closeLightbox();
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
