let username = document.getElementById("username");
let submitBtn = document.querySelector(".redyes");

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    document.location.href = '../html/playinggame.html';
});

//Changes the press start URL to the game page//

// const changestartgameURL = document.getElementById("pressstart");

// pressstart.addEventListener('click', () => {
// const playernameURL = document.getElementById("playernameURL");
//     playernameURL.href = "html/playinggame.html";

// });


//This function delays the page navigation to allow the users name input to update to the db

// let redirect_Page = () => {
//     let tID = setTimeout(function () {
//         window.location.href = document.location.href = '/html/playinggame.html';
//         window.clearTimeout(tID);		// clear time out.
//     }, 1000);
// }



// const database = firebase.database();
// const rootRef = database.ref('/users');



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

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault();
//     const autoId = rootRef.push().key
//     rootRef.child(autoId).set({
//         First_Name: username.value,
//         Balance: 500
//     });
//     document.location.href = '/html/playinggame.html';
// });

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
