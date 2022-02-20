const database = firebase.database();
const rootRef = database.ref('/users');

let username = document.getElementById("username");
let form = document.getElementById("form");
let submitBtn = document.querySelector(".redyes");
let cancelBtn = document.querySelector(".blueno");


// submitBtn.addEventListener('click', (event) => {
//     event.preventDefault();
//     document.location.href = '/html/playinggame.html';
// });
// cancelBtn.addEventListener('click', (event) => {
//     function alert1() {
//         alert(store);
//     }
//     // document.location.href = '../index.html';
// });

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const autoId = rootRef.push().key
    rootRef.child(autoId).set({
        First_Name: username.value,
        Balance: 500
    });
    document.location.href = '/html/playinggame.html';
});

// rootRef.on('child_added', snapshot => {
//     console.log('Child added !');
// });


// addBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     rootRef.child(userId.value).set({
//         first_name: firstName.value,
//     });
// });

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault;
//     const newData = {
//         First_Name: username.value,
//         Balance: 1000
//     };
//     const autoId = rootRef.push().key;
//     console.log(autoId);
//     const updates = {};
//     updates['/users/' + autoId] = newData;
//     console.log(updates['/users/' + autoId] = newData);
//     database.ref().update(updates);
// });
// removeBtn.addEventListener('click', (e) => {
//     e.preventDefault;
//     // rootRef.child(userId.value).remove();
//     database.ref('users').child(userId.value).remove;
// });