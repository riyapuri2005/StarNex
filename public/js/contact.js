window.form = document.getElementById('contact-form');
window.nameInput = document.getElementById('name');
window.emailInput = document.getElementById('email');
window.messageInput = document.getElementById('message');
window.errorMessage = document.querySelectorAll('.error-message');

window.form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    window.errorMessage.forEach(message => {
        message.textContent = '';
    });

    if (window.nameInput.value.trim() === '') {
        window.nameInput.nextElementSibling.textContent = 'Please enter your name.';
        isValid = false;
    }

    if (window.emailInput.value.trim() === '') {
        window.emailInput.nextElementSibling.textContent = 'Please enter your email address.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(window.emailInput.value)) {
        window.emailInput.nextElementSibling.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (window.messageInput.value.trim() === '') {
        window.messageInput.nextElementSibling.textContent = 'Please enter your message.';
        isValid = false;
    }

    if (isValid) {
        // Store data in local storage
        const feedbackData = {
            name: window.nameInput.value,
            email: window.emailInput.value,
            message: window.messageInput.value
        };

        localStorage.setItem('feedbackData', JSON.stringify(feedbackData));

        // Display success message
        window.messageInput.nextElementSibling.textContent = 'Feedback submitted successfully!';
        window.messageInput.nextElementSibling.style.color = 'green';
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