
//---------------------------
// Global Variables
//---------------------------

const wrapper = document.getElementById('wrapper')
const overlay = document.getElementById('overlay')
const filter = document.getElementById('filter')



//---------------------------
// FETCH FUNCTIONS
//---------------------------

fetch('https://randomuser.me/api/?nat=us,gb&results=12')
    .then(response => response.json())
    .then(data => generateHTML(data))
    .catch(err => console.log(err));

//---------------------------
// HELPER FUNCTIONS
//---------------------------

function generateHTML(data) {
    data.results.forEach((employee) => {
        let card = document.createElement('DIV');
        const largePicture = employee.picture.large;
        const firstName = employee.name.first;
        const lastName = employee.name.last;
        const email = employee.email;
        const city = employee.location.city;
        const phone = employee.phone;
        const street = employee.location.street 
        const state = employee.location.state 
        const postcode = employee.location.postcode
        const dob = employee.dob.date.slice(0,10)
        const cleanDob = `${dob.slice(5,7)}/${dob.slice(8,10)}/${dob.slice(2,4)}`
        const cardHtml =
            `
            <div class="image-wrapper">
                <img src="${largePicture}" alt="${firstName}">
            </div>
            <div class="info-wrapper">
                <p class="employee-name">${firstName} ${lastName}</p>
                <p class="employee-email">${email}</p>
                <p class="employee-city">${city}</p>
            </div>
            <div class="more-info-wrapper">
                <p class="employee-phone">${phone}</p>
                <p class="employee-address">${street} ${city}, ${state} ${postcode}</p>
                <p class="employee-dob">Birthday: ${cleanDob}</p>
            </div>
            `;
        card.classList.add('card')
        card.innerHTML = cardHtml;
        wrapper.appendChild(card);
    })
}

function generateModalCard(cardForFocus) {
    const modalCard = document.createElement('DIV')
    const modalCardHTML = `
        <div id="close-btn">X</div>
        ${cardForFocus.innerHTML}
        <div id ="left-arrow" ><</div>
        <div id="right-arrow">></div>`
    overlay.appendChild(modalCard)
    modalCard.innerHTML = modalCardHTML
    modalCard.id = "modalcard";
    modalCard.querySelector('.more-info-wrapper').style.display = 'block';
}

//---------------------------
// EVENT LISTENERS
//---------------------------

document.addEventListener("DOMContentLoaded", function() {

    wrapper.addEventListener('click', (e) => {
        const cardForFocus = e.target.closest('.card');
        cardForFocus.id = 'focuscard';
        generateModalCard(cardForFocus)
        overlay.style.display = 'block';
    })

})

overlay.addEventListener('click', (e) => {
    let btn = e.target;
    const focusCard = document.getElementById('focuscard')
    const modalCard = document.getElementById("modalcard");
    const previousCard = focusCard.previousElementSibling
    const nextCard = focusCard.nextElementSibling

    if (btn.id === 'close-btn') {
        overlay.style.display = "none"
        focusCard.removeAttribute('id')
        modalCard.remove()
    }
    else if (btn.id === 'left-arrow' && previousCard !== null) {
        focusCard.removeAttribute("id");
        previousCard.id = "focuscard"
        modalCard.remove()
        generateModalCard(previousCard)
    } else if (btn.id === 'right-arrow' && nextCard !== null) {
        focusCard.removeAttribute("id");
        nextCard.id = "focuscard"
        modalCard.remove()
        generateModalCard(nextCard)
    }

})

filter.addEventListener('keyup', (e) => {
    let filterText = filter.value.toLowerCase();
    cardsNodeList = document.getElementsByClassName('card');
    const cardsArray = Array.prototype.slice.call(document.getElementsByClassName('card'));
    // show all cards again
    cardsArray.forEach(card => card.style.display = 'flex')

    // loop through first and last name
    cardsArray.forEach(card => {
        let name = card.children[1].children[0].innerText.toLowerCase();
        if (name.includes(filterText) === false) {
            card.style.display = 'none'
        }

    })
        
})



