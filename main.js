let menuIcon = document.querySelectorAll('#menu-icon');
let navbar = document.querySelectorAll('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id +']') ?.classList.add('active')
            })

        }

    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



// ---------contact stiings------
    // Initialize EmailJS
    (function () {
        emailjs.init("gd44SYn1dJPoH9FCd"); // Replace with your EmailJS Public Key
    })();

    // Handle form submission
    document.getElementById("contact_form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Send form data using EmailJS
        emailjs.sendForm("service_h0jo4oa", "template_l3szixr", this)
            .then(function () {
                 // Show custom success message
                 const successMessage = document.getElementById("success-message");
                 successMessage.style.display = "block";
 
                 // Hide the message after 5 seconds
                 setTimeout(() => {
                     successMessage.style.display = "none";
                 }, 5000);
 
                document.getElementById("contact-form").reset(); // Clear the form
            }, function (error) {
                alert("Failed to send the message. Please try again later.");
                console.error("Error:", error);
            });
    });
    document.getElementById('menu-icon').addEventListener('click', function () {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.style.display = mobileMenu.style.display === 'none' || mobileMenu.style.display === '' ? 'block' : 'none';
    });
    


   
    // --bg-color:#BDC3C7;          
    // --second-bg-color:#7F8C8D;        sec background white 
    // --text-color:#2C3E50;                         dark color nain heading
    // --main-color: #34495E;             sub hight blueeading l

   