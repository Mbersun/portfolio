function pop(){
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    alert(` \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message}`);
}