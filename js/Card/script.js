import data from './main.js'

console.log(data)
const wrap = document.querySelector('#wrapper');
console.log(wrap)


data.forEach(res => {
    wrap.innerHTML += `<div class="card ">
            <span>${res.id}</span>
            <h2>${res.title.toUpperCase()}</h2>
            <p>${res.body}</p>
        </div> `


});

// string 

// array 

// object

// Linked list 

// Hash Maps

// trees 

// trie

// Graphs 












