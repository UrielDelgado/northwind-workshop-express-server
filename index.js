'use strict'

const filterDropdown = document.getElementById('filterDropdown');
const categoryDropdown = document.getElementById('categoryDropdown');
const content = document.getElementById('content');

document.addEventListener("DOMContentLoaded",function () {
     filterDropdown.addEventListener('change',getData)
     categoryDropdown.addEventListener('change',() => { 
        content.innerHTML = ""
        const categoryValue = categoryDropdown.value;

        fetch(`http://localhost:8089/api/products/bycategory/${categoryValue}`)
        .then(response=> response.json())
        .then(data => {showContent(data)});})

});

function getData(){
   
    const endpoint = filterDropdown.value;

    console.log(endpoint);

    if(endpoint === `products`){
        fetch(`http://localhost:8089/api/${endpoint}`)
        .then(response=> response.json())
        .then(data => {showContent(data)

    })

    } else if(endpoint === `categories`){
        fetch(`http://localhost:8089/api/${endpoint}`)
        .then(response=> response.json())
        .then(data => {GenerateDropdown(data)

})}};


function GenerateDropdown(data) {
    categoryDropdown.innerHTML = "";
    const fragment = document.createDocumentFragment();
    
    data.forEach(item => {
        const option = document.createElement("option");
        option.value = item.categoryId;
        option.text = `${item.name} `;
        fragment.appendChild(option);
    });
    categoryDropdown.appendChild(fragment);
    console.log(data);
   
}

function showContent(products){
    products.forEach(product => {
        content.innerHTML += 
        `
         <div> ${product.productName}<div>
        <div> ${product.unitPrice}<div>
        <div> ${product.unitsInStock}<div>
        `
        
    });

}
