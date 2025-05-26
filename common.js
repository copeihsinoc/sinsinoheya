/*menu*/
let menuToggle = document.getElementById("menuToggle");
let menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// control submenu on/off
document.querySelectorAll('.submenuToggle').forEach(toggleBtn => {
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // stop others 
    let parentDropdown = toggleBtn.closest('.dropdown1') || toggleBtn.closest('.dropdown2');
    
    document.querySelectorAll('.dropdown1.show, .dropdown2.show').forEach(openDropdown => {
      if (openDropdown !== parentDropdown) {
        openDropdown.classList.remove('show');
      }
    });

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


