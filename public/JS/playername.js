const db = firebase.firestore();
const auth = firebase.auth();


auth.onAuthStateChanged(user => {
        console.log(user);
        console.log(user.email);
        const loginBtn = document.getElementById("btnLogin");
        if(user) {
            loginBtn.style.display = 'none';
            console.log('User has logged in!')
        } else{
            loginBtn.style.display = 'block';
            console.log('User has logged out!')
        }
});

let username = document.getElementById("username");
let form = document.getElementById("form");
let submitBtn = document.querySelector(".redyes");
let cancelBtn = document.querySelector(".blueno");


db.collection('users').get().then(snapshot => {
    setupUsers(snapshot.docs);
});

// const setupUsers = (user) => {
//     db.collection('users').doc(user.uid).get().then(doc => {
//         console.log(user.email);
//     });    
// }


const setupUsers = (data) => {
    data.forEach(doc => {
        const guide = doc.data();
        console.log(guide)
    });
}

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log(username.value);
    let user = firebase.auth().currentUser;
    console.log(user);
    let userUID = user.uid;
    console.log(userUID);
    db.collection('users').doc(userUID).update({
        name: username.value,
    },{ merge: true })
    .then(() => {
        console.log("Document successfully written!");
    })
    redirect_Page();
    // document.location.href = '/html/playinggame.html';
});

//Changes the press start URL to the game page//

// const changestartgameURL = document.getElementById("pressstart");

// pressstart.addEventListener('click', () => {
// const playernameURL = document.getElementById("playernameURL");
//     playernameURL.href = "html/playinggame.html";

// });


//This function delays the page navigation to allow the users name input to update to the db

let redirect_Page = () => {
    let tID = setTimeout(function () {
        window.location.href = document.location.href = '/html/playinggame.html';
        window.clearTimeout(tID);		// clear time out.
    }, 1000);
}

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    loginBtn.style.display = 'block';
    console.log('User has logged out!');
});


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
