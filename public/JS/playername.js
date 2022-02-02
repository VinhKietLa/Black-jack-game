const database = firebase.database();
const rootRef = database.ref('users');

let username = document.getElementById("username");
let form = document.getElementById("form");
let submitBtn = document.querySelector(".redyes");
let cancelBtn = document.querySelector(".blueno");


// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     document.location.href = '/html/playinggame.html';
// });
cancelBtn.addEventListener('click', (event) => {
    function alert1(){
        alert(store);
    }
    // document.location.href = '../index.html';
});

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key    
    rootRef.child(autoId).set({
        first_name: username.value,
    });
    document.location.href = '/html/playinggame.html';
});

rootRef.on('child_added', snapshot => {
    console.log('Child added !');
});


// addBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     rootRef.child(userId.value).set({
//         first_name: firstName.value,
//     });
// });

// updateBtn.addEventListener('click', (e) => {
//     e.preventDefault;
//     const newData = {
//         age: age.value,
//         first_name: firstName.value
//     };
//     rootRef.child(userId.value).update(newData);
// });

// removeBtn.addEventListener('click', (e) => {
//     e.preventDefault;
//     // rootRef.child(userId.value).remove();
//     database.ref('users').child(userId.value).remove;
// });