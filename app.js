function sendEmail() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br>  Message : ${message} <br>`;
    Email.send({
    SecureToken : "99bafa80-ca79-45a9-8ba6-22ed71458b2a",
    To : "gloriazhu66@gmail.com",
    From : "gloriazhu66@gmail.com",
    Subject: "MESSAGE FROM PERSONAL WEBSITE!",
    Body: finalmessage,
    })
    .then(function (message) {
    alert("Thanks for your message!")
    });
      

    }