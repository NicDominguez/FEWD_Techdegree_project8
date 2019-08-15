const wrapper = document.getElementById('wrapper')



//---------------------------
// FETCH FUNCTIONS
//---------------------------

fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then(data => generateHTML(data))

//---------------------------
// HELPER FUNCTIONS
//---------------------------

function generateHTML(data) {
    data.results.forEach((employee, i) => {
        let card = document.createElement('DIV')
        const cardHtml =
            `
        <div class="card">
            <div class="image-wrapper">
                <img src="${data.results[i].picture.large}" alt="${data.results[i].name.first}">
            </div>
            <div class="info-wrapper">
                <p class="employee-name">${data.results[i].name.first} ${data.results[i].name.last}</p>
                <p class="employee-email">${data.results[i].email}</p>
                <p class="employee-city">${data.results[i].location.city}</p>
            </div>
            <div class="more-info-wrapper">
                <p class="employee-phone">${data.results[i].phone}</p>
                <p class="employee-address">${data.results[i].location.street} ${data.results[i].location.city} ${data.results[i].location.state} ${data.results[i].location.postcode}</p>
                <p class="employee-dob">Birthday ${data.results[i].dob.date}</p>
            </div>
        </div>
        `;
        card.innerHTML = cardHtml;
        wrapper.appendChild(card);
    })
}




//---------------------------
// EVENT LISTENERS
//---------------------------

    //on click of card 
        // show transparent overlay
        // enlarge card by adding class
        // show additional employee info
        // add flip book arrows
const overlay = document.getElementById('overlay')


wrapper.addEventListener('click', (e) => {
    const cardForFocus = e.target.closest('.card');
    const moreInfo = cardForFocus.querySelector('.more-info-wrapper');
    if (e.target.classList.contains('card') ||
        e.target.parentNode.classList.contains('card') ||
        e.target.parentNode.parentNode.classList.contains('card') ||
        e.target.parentNode.parentNode.parentNode.classList.contains('card')) 
    
        {   cardForFocus.classList.add('focuscard');
            moreInfo.style.display = 'block';
            overlay.style.display = 'block';
        }
})




    //on click of closing x
        // remove card class
        // hide overlay

    // on click of flip book arrow
        // load next employee info
        






/* data to get:
results.picture.thumbnail = picture
results.name.first & results.name.last = name
results.email = email
results.location.city = city
results.phone = phone#
results.location.street & results.location.city & results.location.state & results.location.postcode = mailngaddress
results.dob.date = birthday */