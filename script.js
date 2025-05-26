/*enterSite*/
function enterSite(){
  let slogan = document.getElementById("slogan");
  slogan.classList.add("fade-out");
  setTimeout(()=>{
    slogan.style.display = "none";
    document.getElementById("slide").scrollIntoView({behavior: "smooth"});
  }, 800);
}

/*menu*/
let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle("show");      //in html no show when click => show
});

document.querySelectorAll('.submenuToggle').forEach(toggleBtn => {
  toggleBtn.addEventListener('click', () => {
    let parentDropdown = toggleBtn.closest('.dropdown1', '.dropdown2');
    if(parentDropdown){
      parentDropdown.classList.toggle('show');
    }
  });
});

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});

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

//add a new image
let newImg = document.createElement('img');
newImg.src = 'images/fresh_lobster01.jpg';
newImg.alt = 'slideImg';
newImg.className = 'slideImg';

//put into slideContainer
document.querySelector('.slideContainer').appendChild(newImg);

//restart
slides = document.querySelectorAll('.slideImg')
updateSlides();