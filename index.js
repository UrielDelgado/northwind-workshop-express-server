'use strict'

const filterDropdown = document.getElementById('filterDropdown');
const categoryDropdown = document.getElementById('categoryDropdown');
const content = document.getElementById('content');

document.addEventListener("DOMContentLoaded",function () {
     filterDropdown.addEventListener('change',getData)

});

function getData(){
   
    const endpoint = filterDropdown.value;

    console.log(endpoint);


        fetch(`http://localhost:8089/api/${endpoint}`)
        .then(response=> response.json())
        .then(data => {GenerateDropdown(data)

            

})};


function GenerateDropdown(data) {
    const fragment = document.createDocumentFragment();
    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.name;
        option.text = `${item.name} `;
        fragment.appendChild(option);
    });
    categoryDropdown.appendChild(fragment);
    console.log(data);
};