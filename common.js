/*menu*/
let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");
let closeSidebar = document.getElementById("closeSidebar");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

closeSidebar.addEventListener("click", () => {
  menu.classList.remove("show");
});

/*header scroll */
window.addEventListener("scroll", ()=>{
  let header = document.querySelector("header");
  /*if scroll ↓ over 10px add scrolled sinon scroll top remove scrolled */
  if(window.scrollY > 10){      
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
});

