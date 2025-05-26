window.addEventListener('DOMContentLoaded', () => {
  let projectHeader = document.getElementById('project-header');
  let preview = document.querySelectorAll('.preview');

  if (projectHeader) projectHeader.classList.add('active');
  preview.forEach((el, i) => {
    if (i === 0) {
      el.classList.add('visible');  // first visible
    } else {
      el.classList.remove('visible'); // others x visible
    }
  });

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {               //if entering
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // scroll half then show up

  for (let i = 1; i < preview.length; i++) {
    observer.observe(preview[i]);
  }
});