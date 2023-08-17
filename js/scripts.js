window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.getElementById("contact-form").addEventListener("submit", function (event) {

    var recipient = "hafsanasharafudheen@gmail.com";
    var subject = encodeURIComponent("Enquiry request By : " + document.getElementById("FullName").value);
    var message = encodeURIComponent(document.getElementById("textmessage").value);
    var mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=" + recipient + "&su=" + subject + "&body=" + message;
    document.getElementById("email-link").href = mailtoLink;
    document.getElementById("email-link").click();

});