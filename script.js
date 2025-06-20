/*enterSite*/
function enterSite() {
  let slogan = document.getElementById("slogan");
  slogan.classList.add("fade-out");
  setTimeout(() => {
    slogan.style.display = "none";
    document.getElementById("slide").scrollIntoView({ behavior: "smooth" });
  }, 800);
}

/*menu*/
let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");
let closeSidebar = document.getElementById("closeSidebar");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

closeSidebar.addEventListener("click", () => {
  menu.classList.remove("show");
})

/*header scroll */
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  /*if scroll ↓ over 10px add scrolled sinon scroll top remove scrolled */
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


/*slide*/
let slides = document.querySelectorAll('.slideImg');
let next = document.querySelector('.next');
let back = document.querySelector('.back');

let current = 0;   //start :0

function updateSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'left', 'right');  //reset all slides classes

    if (index === current) {
      slide.classList.add('active');    //if this img shows:active
    } else if (index === (current - 1 + slides.length) % slides.length) {    //current - 1 : img before
      slide.classList.add('left');
    } else if (index === (current + 1) % slides.length) {    //current + 1 : img after
      slide.classList.add('right');
    }
  });
}

next.addEventListener('click', () => {
  current = (current + 1) % slides.length; // 1 2 3 0 to the first img
  updateSlides();
});

back.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length; // 3 0 1 2 
  updateSlides();
});

//add images
let slideImages = [
  { src: 'images/logo.png', link: 'project-details.html?id=1' },
  { src: 'images/on-last-grind01.jpg', link: 'project-details.html?id=2' },
  { src: 'images/invictus01.jpg', link: 'project-details.html?id=3' },
  { src: 'images/fresh_lobster.jpg', link: 'project-details.html?id=4' },
];

for (let item of slideImages) {

  let a = document.createElement('a');
  a.href = item.link;
  a.className = 'slideImg';
  
  let img = document.createElement('img')
  img.src = item.src;
  img.alt = 'slideImg';
  

  a.appendChild(img);
  //put into slideContainer
  document.querySelector('.slideContainer').appendChild(a);
}

//restart
slides = document.querySelectorAll('.slideImg')
updateSlides();