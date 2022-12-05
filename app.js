function sendEmail() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
    Email.send({
    SecureToken : "4b5c58f5-8497-40d0-9ad5-d5ad5de50902",
    To : "gloriazhu66@gmail.com",
    From : "gloriazhu66@gmail.com",
    Subject: "MESSAGE FROM PERSONAL WEBSITE!",
    Body: finalmessage,
    })
    .then(function (message) {
    alert("Thanks for your message!")
    });
      

    }
