const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const errorMessage = document.querySelectorAll('.error-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    errorMessage.forEach(message => {
        message.textContent = '';
    });

    if (nameInput.value.trim() === '') {
        nameInput.nextElementSibling.textContent = 'Please enter your name.';
        isValid = false;
    }

    if (emailInput.value.trim() === '') {
        emailInput.nextElementSibling.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (messageInput.value.trim() === '') {
        messageInput.nextElementSibling.textContent = 'Please enter your message.';
        isValid = false;
    }

    if (isValid) {
        // Store data in local storage
        const feedbackData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

        // Display success message
        messageInput.nextElementSibling.textContent = 'Feedback submitted successfully!';
        messageInput.nextElementSibling.style.color = 'green';
    }
});
function savePost(){
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value;
    let m = document.getElementById("message").value;
    // let d = document.getElementById("FormControlTextarea1").value;
    let data = {name:n, email:e,message:m }
    data = JSON.stringify(data);
    fetch("http://localhost:3000/posts",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:data
    }).then(response=>{
        if(response.status===201){
            alert("Post saved successfully");
        }
        else{
            throw new Error(response.statusText);
        }
    }).catch(error=>{
        alert(error);
    })
}