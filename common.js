/*menu*/
let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", ()=>{
    menu.classList.toggle("show");      //in html no show when click => show
});

let submenuToggle = document.querySelectorAll(".submenuToggle");

submenuToggle.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
      let dropdown = btn.parentNode;
      let submenu = dropdown.querySelector(".submenu");
      submenu.classList.toggle("show");
    });
});


