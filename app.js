const wrapper = document.getElementById('wrapper')


//---------------------------
// FETCH FUNCTIONS
//---------------------------

fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => generateHTML(data))

//---------------------------
// HELPER FUNCTIONS
//---------------------------

function generateHTML(data) {
    data.results.forEach((employee, i) => {
        const card = document.createElement('DIV')
        const html =
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
            </div>
        </div>
        `;
        card.innerHTML = html;
        wrapper.appendChild(card);
    })
}




//---------------------------
// EVENT LISTENERS
//---------------------------



/* data to get:
results.picture.thumbnail = picture
results.name.first & results.name.last = name
results.email = email
results.location.city = city
results.phone = phone#
results.location.street & results.location.city & results.location.state & results.location.postcode = mailngaddress
results.dob.date = birthday */