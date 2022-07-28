let myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', async ($scope)=>{

    let button = document.querySelector('#button')
        .addEventListener('click', async ()=>{
            let res = await fetch('http://localhost:8080/');
            let cat = await res.json();
            for (category of cat)
            {
                let li = document.createElement('li');
                let ul = document.querySelector('#header')
                li.textContent = category[2];
                ul.appendChild(li);
            }
        })
})