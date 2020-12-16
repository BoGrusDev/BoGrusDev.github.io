document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM');
    fetch("inc/header.html")
        .then(response => {
        return response.text()
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;    
        var burger = document.querySelector('.navbar-burger');
        var menu = document.querySelector('#' + burger.dataset.target);
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    })
});

// https://BoGrusDev.github.io