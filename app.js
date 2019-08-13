const wrapper = document.getElementById('wrapper')


//---------------------------
// FETCH FUNCTIONS
//---------------------------

fetch('https://randomuser.me/api/?results=3')
    .then(response => response.json())
    .then(data => generateHTML(data))

//---------------------------
// HELPER FUNCTIONS
//---------------------------

function generateHTML(data) {
const html =     
`
<div class="card">
    <div class="image-wrapper">
        <img src="${data.results[0].picture.large}" alt="${data.results[0].name.first}">
            </div>
        <div class="info-wrapper">
            <p class="employee-name">${data.results[0].name.first} ${data.results[0].name.last}</p>
            <p class="employee-email">${data.results[0].email}</p>
            <p class="employee-city">${data.results[0].location.city}</p>
        </div>
    </div>
</div>
`;

wrapper.innerHTML = html;
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