// 🚨 User Instructions 🚨 //

// JS INTRUCTIONS === Only make changes to code where you see the '🚨' emoji //

// Function to render timeline items
const renderItems = (data) => {
    // The `ul` where the timeline items will be inserted
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

        dataList.insertAdjacentHTML('beforeend', listItem); // Add it to the timeline `ul`!
    });

    // Adding an id tag to the last ul item so when 'end' button is clicked, it scrolls to the end of the list
    const firstUlitem = dataList.firstElementChild; 
    firstUlitem.id = 'first-item'; 
};

// Function to render year descriptions
const renderYearItems = (data) => {
    // The `div` where the year descriptions will be inserted
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

        yearContainer.insertAdjacentHTML('beforeend', yearItemHTML); // Add it to the year description `div`!
    });
};


// Function to open and close the 'about' popover that tells users about the project
function openAboutBox() {
    var aboutBox = document.getElementById('about-box');
    aboutBox.style.display = 'flex';
}

function closeAboutBox() {
    var aboutBox = document.getElementById('about-box');
    aboutBox.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    var aboutButton = document.querySelector('.about-button'); 
    var closeButton = document.getElementById('closeBtn'); 

    aboutButton.addEventListener('click', function() {
        openAboutBox();
    });

    closeButton.addEventListener('click', function() {
        closeAboutBox();
    });
});

// Dunction to open and close the image lightbox with the image enlgarged
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

// This is the code for the year filters, so when user clicks on button, it only shows content from that year in the timeline //

// Get the year btn from html

// 🚨 If you are adding another year, add it as a const shown below, for exmaple if you are adding a filter for 2021, add the following:
    // const btn2021 = document,getElementById('2021');
// 🚨
const btn2026 = document.getElementById('2026');
const btn2025 = document.getElementById('2025');
const btn2024 = document.getElementById('2024');
const btn2023 = document.getElementById('2023');
const btn2022 = document.getElementById('2022');
const btnAll = document.getElementById('All');
// const btn2021 = document,getElementById('2021');

// Get items from html

// 🚨 Again, if you are adding another year, add it as a const shown below, for exmaple if you are adding a filter for 2021, add the following:
    // const items2021 = document,getElementByClassName('item-2021');
// 🚨

const itemAll = document.getElementsByClassName('item');
const items2026 = document.getElementsByClassName('item-2026');
const items2025 = document.getElementsByClassName('item-2025');
const items2024 = document.getElementsByClassName('item-2024');
const items2023 = document.getElementsByClassName('item-2023');
const items2022 = document.getElementsByClassName('item-2022');
// const items2021 = document,getElementByClassName('item-2021');s


// Get items from html

// 🚨 Add a new year descripton as a const shown below, for exmaple if you are adding content for 2021, add the following:
    // const year2021 = document.getElementByClassName('year-2021');
    // Than change the const 'year2422' accordingly to 'year2421'
// 🚨

const yearAll = document.getElementsByClassName('year-header');
const year2026 = document.getElementsByClassName('year-2026');
const year2025 = document.getElementsByClassName('year-2025');
const year2024 = document.getElementsByClassName('year-2024');
const year2023 = document.getElementsByClassName('year-2023');
const year2022 = document.getElementsByClassName('year-2022');
const year2622 = document.getElementsByClassName('year-22-26');

// const year2021 = document.getElementByClassName('year-2021');
// const year25XX = document.getElementsByClassName('year-24-XX');

// Function to reset background color of all buttons

// 🚨 Add your new year button here too, for example"
    // btn2021.style.backgroundColor = '';
// 🚨

function resetButtonColors() {
    btn2026.style.backgroundColor = '';
    btn2025.style.backgroundColor = '';
    btn2024.style.backgroundColor = '';
    btn2023.style.backgroundColor = '';
    btn2022.style.backgroundColor = '';
    btnAll.style.backgroundColor = '';
    // btn2021.style.backgroundColor = '';
}

// Function to render 2026 items
btn2026.onclick = () => {
    console.log("2026 btn clicked");

    // Reset background color of all buttons
    resetButtonColors();

    // Change background color of the clicked button
    btn2026.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--year2026');

    //hide everything
    Array.from(itemAll).forEach(item => {
        // console.log(item);
        item.style.display = 'none';
    });
    //show 2026
    Array.from(items2026).forEach(item => {
        item.style.display = '';
    });

    //year
    Array.from(yearAll).forEach(item => {
        item.style.display = 'none';
    });
    Array.from(year2026).forEach(item => {
        item.style.display = '';
    });
   
}

// Function to render 2025 items
btn2025.onclick = () => {
    console.log("2025 btn clicked");

    // Reset background color of all buttons
    resetButtonColors();

    // Change background color of the clicked button
    btn2025.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--year2025');

    //hide everything
    Array.from(itemAll).forEach(item => {
        // console.log(item);
        item.style.display = 'none';
    });
    //show 2025
    Array.from(items2025).forEach(item => {
        item.style.display = '';
    });

    //year
    Array.from(yearAll).forEach(item => {
        item.style.display = 'none';
    });
    Array.from(year2025).forEach(item => {
        item.style.display = '';
    });
   
}

// Function to render 2024 items
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

// Function to render 2023 items
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
    //show 2023
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

// Function to render 2022 items
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
    //show 2022
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

// 🚨 If you are adding content from another year, copy and paste the function 'render 2024 items', replacing 2024 for the corresponding year in all places 🚨//


// Function to render all items
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
    // 🚨 if you have added content from another year - change the Array here, for example if you added content from 2021, change the following Array to:
    // Array.from(year2421).forEach(item => {
    //     item.style.display = '';
    // }); 🚨
    Array.from(year2622).forEach(item => {
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
            // 🚨 if you have added content from another year - change the Array here, for example if you added content from 2021, change the following Array to:
            // Array.from(year2421).forEach(item => {
            //     item.style.display = '';
            // }); 🚨
            Array.from(year2622).forEach(item => {
                item.style.display = '';
            });
        })
        .catch(error => {
            console.error('Error fetching JSON data:', error);
        });
// }

// function renderOnclick(){

// }