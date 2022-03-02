//annonymous auth//

// firebase.auth().signInAnonymously()
//   .then(() => {
//     // Signed in..
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });


//Start Game Homepage Button//

// const btnLogin = document.getElementById('pressstart');



// btnLogin.addEventListener('click', e => {
//     firebase.auth().signInAnonymously();
//     console.log('poo');
// });
// firebase.auth().onAuthStateChanged(firebaseUser => {
//     console.log(firebaseUser);
// })

//modal close applies to all modals
const modalclose1 = document.querySelectorAll('.modal-close')[0];
const modalclose2 = document.querySelectorAll('.modal-close')[1];

modalclose1.addEventListener('click', (closeModal));
modalclose2.addEventListener('click', (closeModal));

function closeModal() {
    signupmodal.classList.remove('is-active');
    loginmodal.classList.remove('is-active');
};

//If the customer has an existing account this is the button that will take them to the sign in page

const existingUser = document.getElementById('.existingUser');

modalclose2.addEventListener('click', (closeModal));

// User Signup

const signupForm = document.getElementById("signup-form");
const signupmodal = document.getElementById("signupmodal");
const auth = firebase.auth();

signupForm.addEventListener('submit', (e) => {
    // this prevents page refresh after user presses submit
    e.preventDefault();

    //get user info from input fields
    const email = signupForm['userEmail'].value;
    const password = signupForm['userPassword'].value;

    //Sign up the user with email and pw
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
    })
    signupmodal.classList.remove('is-active');
});

//User Logout

const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User has signed out');
    })
});

//User Login

const btnLogin = document.getElementById("btnLogin");
const loginmodal = document.querySelector(".loginmodal");
const loginform = document.getElementById("login-form");

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    loginmodal.classList.add('is-active');
    //get user info from input fields
    const email = loginform['loginEmail'].value;
    const password = loginform['loginPassword'].value;

    console.log(email, password);
});

loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info from input fields
    const email = loginform['loginEmail'].value;
    const password = loginform['loginPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        loginmodal.classList.remove('is-active');
        console.log('User has logged in');
    })
});
