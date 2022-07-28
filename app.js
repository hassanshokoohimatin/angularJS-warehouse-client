let categoryDiv = angular.module('categoryDiv', []);

categoryDiv.controller('categoryCtrl', async ($scope)=>{

    document.querySelector('#category-btn').addEventListener('click', async ()=>{
        let categoryPromise = await fetch('http://localhost:8080/');
        let categories = await categoryPromise.json();
        let categoryUl = document.querySelector('#category-ul');
        console.log(categories);
        for (let category of categories){
            let li = document.createElement('li');
            li.innerText = category['code'];
            categoryUl.appendChild(li);
        }
    })

})