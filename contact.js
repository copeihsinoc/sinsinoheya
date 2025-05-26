
/*contact*/
document.getElementById('contactForm').addEventListener('submit', function(event){
    event.preventDefault();

    document.getElementById('nameError').textContent='';
    document.getElementById('emailError').textContent='';
    document.getElementById('messageError').textContent='';


    try{
        let name = document.getElementById('name').value.trim();
        if(name === ''){
            throw new Error("The name is required.");
        }

        let email = document.getElementById('email').value.trim();
        if(email === ''){
            throw new Error("The email is required.");
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            throw new Error("Enter a valid email.");
        }

        let message = document.getElementById('message').value.trim();
        if(message === ''){
            throw new Error("The message is required.");
        }
        
        alert("Submitted!");
    }catch(error){
        if(error.message.includes("name")){
            document.getElementById('nameError').textContent = error.message;
        }else if(error.message.includes("email")){
            document.getElementById('emailError').textContent = error.message;
        }else if(error.message.includes("message")){
            document.getElementById('messageError').textContent = error.message;
        }
        
        }finally{
            console.log("Check complete.")
        }
    });