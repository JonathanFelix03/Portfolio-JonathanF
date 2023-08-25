/* Typing animation */
var typed = new Typed(".typing",{
    strings:["","Web Designer", "Web Developer"],
    typeSpeed:120,
    BackSpeed:60,
    loop:true
})

// const smbtn = () => {
//     const mailAdress = document.getElementById("emails").value
//     const Recipients =  "jonathan.felixchan@gmail.com"
//     const subject = "This is my subject"
//     const body = document.getElementById('emails').value
//     const mailtoLink = `https://mail.google.com/mail/?view=cm&to:${Recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//     // const  link= `mailto:${mailAdress}?cc=${ccRecipients}&subject=${subject}&body=${body}`
//     window.location.href = mailtoLink;
//   }

const myButton = document.querySelector("#smbtns");
console.log(myButton)
myButton.addEventListener("click", handleClick);
function handleClick() {
    const recipient = "jonathan.felixchan@gmail.com";
    const subject = "Hello from JavaScript!";
    const body = "Send me a message";
    const mailtoLink = `https://mail.google.com/mail/?view=cm&to:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }