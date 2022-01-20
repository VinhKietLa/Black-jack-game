//Thus function works on the playername page and directs the user to proceed with playing or going back to the homepage.

let username = document.getElementById("username");
let submitBtn = document.querySelector(".redyes");
let cancelBtn = document.querySelector(".blueno");


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.location.href = '/html/playinggame.html';
});

cancelBtn.addEventListener('click', (event) => {
    document.location.href = '../index.html';
});