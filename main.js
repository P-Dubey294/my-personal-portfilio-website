/*===================Toggle icon navbar=====================*/

let menuIcon = document.querySelector('#menu-Icon');
let navbar   = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

/*===================SCROLL SECTION  active Link =====================*/

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+ id + ']').classList.add('active');
            });
        };
    });

    /*===================Stickey navbar=====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*==================remove toogel and icon navbar =====================*/

menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');
};

/*==================scroll revel =====================*/
ScrollRevel({
    distance:'80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right'});

/*==================TYPE===JS=====================*/
const typed = new Typed('.multiple-text',{
    string: ['Frontend Devloper','Web Desginer','Mcastudent'],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
})