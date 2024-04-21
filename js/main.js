// Function to render your items
const renderItems = (data) => {
    // The `ul` where the items will be inserted
    const dataList = document.getElementById('data-list');

    // Loop through each item in the data array
    data.forEach((item) => {
        let year = item.Year; 

        // Make a template literal as we have before, inserting your data
        let listItem = `
            <li class="item item-${year}"> 
                <div class="content-blocks">
                    <div class="week">
                        <div class="week-layout">
                            <hr>
                            <h5>${item.Week}</h5>
                        </div>
                    </div>
                    <div class="image-content">
                        <img src="${item.Image}">
                        <div class="item-details">
                            <h4>${item.Date}</h4>
                            <h4>${item.Location}</h4>
                        </div>
                        <h3>${item.Title}</h3>
                        <p>${item.Description}</p>
                    </div>
                </div>
            </li>
        `;

        dataList.insertAdjacentHTML('beforeend', listItem); // Add it to the `ul`!
    });

    // adding an id tag to the last ul item so when 'end' button is clicked, it scrolls to the end of the list
    const firstUlitem = dataList.firstElementChild; 
    firstUlitem.id = 'first-item'; 
};

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
            <div class="year-header year-${year}">
                <h1>${year}</h1>
                <blockquote>${description}</blockquote>
            </div>
        `;

        yearContainer.insertAdjacentHTML('beforeend', yearItemHTML); // Add it to the `div`!
    });
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

//get year btn from html
const btn2024 = document.getElementById('2024');
const btn2023 = document.getElementById('2023');
const btn2022 = document.getElementById('2022');
const btnAll = document.getElementById('All');

//get items from html
const itemAll = document.getElementsByClassName('item');
const items2024 = document.getElementsByClassName('item-2024');
const items2023 = document.getElementsByClassName('item-2023');
const items2022 = document.getElementsByClassName('item-2022')

//get items from html
const yearAll = document.getElementsByClassName('year-header');
const year2024 = document.getElementsByClassName('year-2024');
const year2023 = document.getElementsByClassName('year-2023');
const year2022 = document.getElementsByClassName('year-2022');
const year2422 = document.getElementsByClassName('year-24-22');

// Function to reset background color of all buttons
function resetButtonColors() {
    btn2024.style.backgroundColor = '';
    btn2023.style.backgroundColor = '';
    btn2022.style.backgroundColor = '';
    btnAll.style.backgroundColor = '';
}

//on click
btn2024.onclick = () => {
    console.log("2024 btn clicked");

    // Reset background color of all buttons
    resetButtonColors();

    // Change background color of the clicked button
    btn2024.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--year2024');

    //hide everything
    Array.from(itemAll).forEach(item => {
        // console.log(item);
        item.style.display = 'none';
    });
    //show 2024
    Array.from(items2024).forEach(item => {
        item.style.display = '';
    });

    //year
    Array.from(yearAll).forEach(item => {
        item.style.display = 'none';
    });
    Array.from(year2024).forEach(item => {
        item.style.display = '';
    });
   
}

//on click
btn2023.onclick = () => {
    console.log("2023 btn clicked");

     // Reset background color of all buttons
     resetButtonColors();

    // Change background color of the clicked button
    btn2023.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--year2023');

    //hide everything
    Array.from(itemAll).forEach(item => {
        console.log(item);
        item.style.display = 'none';
    });
    //show 2024
    Array.from(items2023).forEach(item => {
        item.style.display = '';
    });
     //year
     Array.from(yearAll).forEach(item => {
        item.style.display = 'none';
    });
    Array.from(year2023).forEach(item => {
        item.style.display = '';
    });

}

//on click
btn2022.onclick = () => {
    console.log("2022 btn clicked");

    // Reset background color of all buttons
    resetButtonColors();

    // Change background color of the clicked button
    btn2022.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--year2022');

    //hide everything
    Array.from(itemAll).forEach(item => {
        console.log(item);
        item.style.display = 'none';
    });
    //show 2024
    Array.from(items2022).forEach(item => {
        item.style.display = '';
    });

    //year
      Array.from(yearAll).forEach(item => {
        item.style.display = 'none';
    });
    Array.from(year2022).forEach(item => {
        item.style.display = '';
    });
}

//on click
btnAll.onclick = () => {
    console.log("All btn clicked");

    // Reset background color of all buttons
    resetButtonColors();

    // Change background color of the clicked button
    btnAll.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--yearAll');

    //show everything
    Array.from(itemAll).forEach(item => {
        console.log(item);
        item.style.display = '';
    });
    //year
    Array.from(yearAll).forEach(item => {
        item.style.display = 'none';
    });
    Array.from(year2422).forEach(item => {
        item.style.display = '';
    });
}

// Fetch gets your (local) JSON file…
fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        // And passes the data to the function, above!
        renderItems(data);
    })
    // .then(
    //     fetchYearInfo()
    // )
    // .then(
    //     renderOnclick()
    // )
    .catch(error => {
        console.error('Error fetching JSON data:', error);
    });


// function fetchYearInfo(){
    fetch('js/year.json')
        .then(response => response.json())
        .then(data => {
            // And passes the data to the function, above!
            renderYearItems(data);
        })
        // setting default to show 'all' header
        .then(data =>{
            Array.from(yearAll).forEach(item => {
                item.style.display = 'none';
            });
            Array.from(year2422).forEach(item => {
                item.style.display = '';
            });
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
// }

// function renderOnclick(){

// }