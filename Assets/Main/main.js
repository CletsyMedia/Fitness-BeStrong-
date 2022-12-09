let navMenu = document.getElementById("nav-menu");
let navClose = document.getElementById("nav-close");
let navToggle = document.getElementById("nav-toggle");

navToggle.onclick =()=>{
    navMenu.classList.add("active");
}
navClose.onclick =()=>{
    navMenu.classList.remove("active");
}
// Remove mobile menu
const navLink = document.querySelectorAll(".nav_link");
const linkAction = () =>{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove('active')
}
navLink.forEach(l => l.addEventListener("click", linkAction));

// Modal Box
let closeCard = document.querySelector(".boxClose");
let modal = document.getElementById("modal");
closeCard.onclick=()=>{
  modal.style.display="none";
}
// Modal Registration
let modalReg = document.getElementById("modalReg");
let modalClose = document.getElementById("modalClose");
let modalBox = document.querySelector(".modalBox")
modalReg.onclick=()=>{
  modalBox.classList.add("modalBox-active")
}
modalClose.onclick=()=>{
  modalBox.classList.remove("modalBox-active")
}
// Slides
let slideIndex1 = 0;
 showSlides1();

 function showSlides1() {
   let i;
   let slides = document.getElementsByClassName("slides");
   let dots = document.getElementsByClassName("dot");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   slideIndex1++;
   if (slideIndex1 > slides.length) {slideIndex1 = 1}    
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex1-1].style.display = "block";  
   dots[slideIndex1-1].className += " active";
   setTimeout(showSlides1, 2000); // Change image every 2 seconds
 };
//  ScrollSpy
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-Link')
		}else{
			sectionsClass.classList.remove('active-Link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



// Testimonial Slides
var swiper = new Swiper(".mySlider", {
  slidesPerView:1,
  spaceBetween:1,
  loop: true,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// AOS
AOS.init({
  offset:400,
  duration: 1000,
  easing: 'ease-in-out'
});
// AOS Ends







