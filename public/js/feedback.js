document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.form-content-section');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('InputText').value;
        const email = document.getElementById('InputEmail1').value;
        const contactNumber = document.getElementById('Inputcontact').value;
        const experience = document.getElementById('FormControlTextarea1').value;

        if (!name || !email || !experience) {
            alert("Please fill in all required fields.");
            return;
        }


        const feedback = [
            name,email,contactNumber,experience
        ];
        const existingFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];

        existingFeedback.push(feedback);
        localStorage.setItem('feedbackData', JSON.stringify(existingFeedback));

        form.reset();
        alert("Thank you for your feedback!");
    });
});
function savePost(){
    let t = document.getElementById("InputText").value;
    let b = document.getElementById("InputEmail1").value;
    let c = document.getElementById("Inputcontact").value;
    let d = document.getElementById("FormControlTextarea1").value;
    let data = {InputText:t, InputEmail1:b,Inputcontact:c ,FormControlTextarea1:d}
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