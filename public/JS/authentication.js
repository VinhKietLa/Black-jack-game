//getData
const db = firebase.firestore();
db.collection('Users').get().then(snapshot => {
    setupUsers(snapshot.docs);
});

const setupUsers = (data) => {
    data.forEach(doc => {
        const guide = doc.data();
        console.log(guide)
    });
}

//Listen for auth status changes
const auth = firebase.auth();
const pressstart = document.getElementById("pressstart").disabled = true;

auth.onAuthStateChanged(user => {
    const loginBtn = document.getElementById("btnLogin");
    const pressstart = document.getElementById("pressstart");

    if (user) {
        loginBtn.style.display = 'none';
        signupmodal.classList.remove('is-active');
        console.log('hehe');
        pressstart.disabled = false;
    } 
    else if (user === 'null') {
        loginBtn.style.display = 'block';
        pressstart.disabled = true;
        console.log('LOOOOOOOL')
    }

});

//displays username on page

let playerTitle = document.getElementById('playerName');

let DisplayName = () => {
    let me = auth.currentUser;
    console.log(me);
    const docRef = db.collection("users");
    const presstart = document.getElementById("playernameURL");
    let playerTitle = document.getElementById("playerName");
    if(!pressstart.disabled){
    docRef.doc((auth.currentUser.uid))
        .onSnapshot((doc) => {
            console.log("Current data: ", doc.data().name);
            playerTitle.innerHTML = doc.data().name;
            console.log('poo');
            if (playerTitle.innerHTML !== doc.data().name) {
                presstart.href = 'html/playername.html'
            } else {
                presstart.href = 'html/playinggame.html';

            }
        });
    }
    if (playerTitle.innerHTML.length >=0) {
        clearInterval(clearDM);
    }
};

let clearDM = setInterval(DisplayName, 1200);

//modal close applies to all modals
const modalclose1 = document.querySelectorAll('.modal-close')[0]; //This one is for the sign up to play 
const modalclose2 = document.querySelectorAll('.modal-close')[1]; //This one applies to the login page

modalclose1.addEventListener('click', (closeModal));
modalclose2.addEventListener('click', (closeModal));

function closeModal() {
    signupmodal.classList.remove('is-active');
    loginmodal.classList.remove('is-active');
};

//If the customer has an existing account this is the button that will take them to the sign in page

const existingUser = document.getElementById('existingUser');

function existingUserModal() {
    closeModal(modalclose1);
    loginmodal.classList.add('is-active');
}

existingUser.addEventListener('click', (existingUserModal));

// User Signup

const signupForm = document.getElementById("signup-form");
const signupmodal = document.getElementById("signupmodal");

signupForm.addEventListener('submit', (e) => {
    // this prevents page refresh after user presses submit
    e.preventDefault();
    //get user info from input fields
    const email = signupForm['userEmail'].value;
    const password = signupForm['userPassword'].value;

    //Sign up the user with email and pw
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        return db.collection('users').doc(cred.user.uid).set({
            Balance: 500,
            Email: email
        });
    }).then(() => {
        signupmodal.classList.remove('is-active');
    });
    // signupmodal.classList.remove('is-active');
});

//User Logout
const btnLogout = document.getElementById("btnLogout");

btnLogout.addEventListener('click', (e) => {
    const loginBtn = document.getElementById("btnLogin");
    e.preventDefault();
    loginBtn.style.display = 'block';
    window.location = 'index.html';
    console.log('User has logged out!');
    auth.signOut();
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
});

const loginForm = loginform.addEventListener('submit', (e) => {
    e.preventDefault();
    //get user info from input fields
    const email = loginform['loginEmail'].value;
    const password = loginform['loginPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        loginmodal.classList.remove('is-active');
    })
});

