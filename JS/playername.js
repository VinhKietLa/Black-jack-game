let username = document.getElementById("username");
let currentScore = 500;
let submitBtn = document.querySelector(".redyes");

submitBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let initial = username.value; //This is the value of the current input from the user in the ID initals//

    let newUser  = {name: initial, score: currentScore}; //This creates a new object with the properties name + score with the values initial input and the users current score.

    console.log(initial);
  

    let users = localStorage.getItem("Users"); //This accesses localStorage and checks if an existing item called 'User' exists, if it exists it will return the value as a string.

        if (users) { //This checks if users is true and not equal to null or undefined.
            users = JSON.parse(users); //JSON.parse converts the string value into a Javascript object and is necessary because when items are added to localStorage they're stored as a string//
            users.push(newUser);//This adds the new user objects to the array of existing users. 
    
        } else {
            users = [newUser]; //If there are no existing items callled user, then we create a new array as the user item.
    
        }
        localStorage.setItem("Users", JSON.stringify(users));
    
    document.location.href = '../html/playinggame.html';
});
