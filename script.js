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
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// 控制 submenu 展開/收起
document.querySelectorAll('.submenuToggle').forEach(toggleBtn => {
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // 阻止事件冒泡，避免其他點擊被觸發
    const parentDropdown = toggleBtn.closest('.dropdown1') || toggleBtn.closest('.dropdown2');
    
    // 關閉其他 submenu（可選）
    document.querySelectorAll('.dropdown1.show, .dropdown2.show').forEach(openDropdown => {
      if (openDropdown !== parentDropdown) {
        openDropdown.classList.remove('show');
      }
    });

    // 切換目前 submenu
    parentDropdown.classList.toggle('show');
  });
});

// 點任何 link 時，收起 menu（手機使用情境）
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
    document.querySelectorAll('.dropdown1.show, .dropdown2.show').forEach(drop => {
      drop.classList.remove('show');
    });
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