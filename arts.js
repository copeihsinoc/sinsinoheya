let arts = [
  [
    { category: "3d", id: "diorama-bread-truck", src: "images/diorama-bread-truck.jpg", alt: "Diorama-bread-truck", caption: "Diorama-bread truck" },
    { category: "3d", id: "kiki-bakery", src: "images/kikis-bakery.jpg", alt: "Kiki's bakery", caption: "キキベーカリー<br>Kiki Backery" },
    { category: "3d", id: "tea-pet", src: "images/tea-pet02.png", alt: "Tea pet", caption: "ティーペット<br>Tea pet" },
  ],
  [
    { category: "3d", id: "a-quirky-old-elf", src: "images/Elf.png", alt: "A quirky old elf", caption: "A quirky old elf" },
    { category: "concept", id: "les-aventures-Oliver-Twist", src: "images/oliver-twist.jpg", alt: "Oliver Twist", caption: "Les aventures D'Oliver Twist" },
    { category: "concept", id: "martha-boddy-dream-home", src: "images/martha-boddy.jpg", alt: "Martha Boddy's Dream Home", caption: "Martha Boddy's Dream Home" },
  ],
  [
    { category: "concept", id: "dragon-slaver-aratorn", src: "images/aratorn.jpg", alt: "Dragon Slaver Aratorn", caption: "Dragon Slaver ー Aratorn" },
    { category: "concept", id: "camping-sunset", src: "images/camping-sunset.jpg", alt: "A camping sunset", caption: "A camping sunset" },
    { category: "concept", id: "photobashing", src: "images/photobashing.jpg", alt: "Photobashing", caption: "Photobashing" },
  ],
  [
    { category: "concept", id: "dream-of-the-lucky-cat", src: "images/lucky-cat.jpg", alt: "Dream of the Lucky Cat", caption: "Dream of the Lucky Cat" },
    { category: "concept", id: "the-purchase", src: "images/the-purchase.png", alt: "The Purchase", caption: "The Purchase" },
    { category: "concept", id: "mixed-waters", src: "images/mixed-waters.png", alt: "Mixed Waters", caption: "Mixed Waters" },
  ],
  [
    { category: "concept", id: "marche-au-tissu", src: "images/marche-au-tissu.jpg", alt: "Marché au Tissu", caption: "Marché au Tissu" },
    { category: "concept", id: "takoyaki-shop", src: "images/heyanotakoyaki.jpg", alt: "たこ焼き屋", caption: "たこ焼き屋" },
    { category: "concept", id: "fungus-girl", src: "images/fungus-girl.jpg", alt: "菌の少女", caption: "菌の少女" },
  ],
  [
    { category: "concept", id: "texture-1", src: "images/texture01.jpg", alt: "mur", caption: "Texture_Mur" },
    { category: "concept", id: "texture-2", src: "images/texture02.jpg", alt: "ocean", caption: "Texture_Ocean" },
    { category: "concept", id: "texture-3", src: "images/texture03.jpg", alt: "sakura", caption: "Texture_Sakura" },
  ],
  [
    { category: "illustration", id: "silent-gaze-1", src: "images/silent-gaze01.jpg", alt: "summer", caption: "夏 Summer" },
    { category: "illustration", id: "silent-gaze-2", src: "images/silent-gaze02.jpg", alt: "red", caption: "紅 red" },
    { category: "illustration", id: "silent-gaze-3", src: "images/silent-gaze03.jpg", alt: "passed away", caption: "逝去 Passed away" },
  ],
  [
    { category: "illustration", id: "no-face-1", src: "images/no-face01.jpg", alt: "no face-v1", caption: "no face" },
    { category: "illustration", id: "no-face-2", src: "images/no-face02.jpg", alt: "no face-v2", caption: "no face" },
    { category: "illustration", id: "no-face-3", src: "images/no-face03.jpg", alt: "no face-v3", caption: "no face" },
  ],
  [
    { category: "illustration", id: "cat-1", src: "images/cat01.jpg", alt: "cat", caption: "貓" },
    { category: "illustration", id: "cat-2", src: "images/cat02.jpg", alt: "cat", caption: "Cat's kiss" },
    { category: "illustration", id: "cat-3", src: "images/cat03.jpg", alt: "cat", caption: "貓" },
  ],
  [
    { category: "illustration", id: "her-1", src: "images/her01.jpg", alt: "Her", caption: "彼女 Her" },
    { category: "illustration", id: "her-2", src: "images/her02.jpg", alt: "Her", caption: "彼女 Her" },
    { category: "illustration", id: "her-3", src: "images/her03.jpg", alt: "Her", caption: "彼女 Her" },
  ],
];

function createArts(filterCategory = null) {
  //html:<div id="artsAll">
  let container = document.getElementById('artsAll');
  //clean et etre vide
  container.innerHTML = '';

  arts.forEach(themeGroup => {
    //filter catagory(artworks)
    let filterGroup = themeGroup.filter(art =>{
      return !filterCategory || art.category === filterCategory;
    });
    //if artworks no include category skip
    if(filterGroup.length === 0) return;

    // for <section class="theme1">
    let section = document.createElement('section');
    section.className = 'theme1';

    // for <div class="block1">
    let block = document.createElement('div');
    block.className = 'block1';


    filterGroup.forEach((art, index) => {
      // for <div class="column">
      let column = document.createElement('div');
      column.className = 'column';

      // for <figure>
      let figure = document.createElement('figure');

      //<a>
      let link = document.createElement('a');
      link.href = `artwork.html?id=${art.id}`;

      // <img>
      let img = document.createElement('img');
      img.src = art.src;
      img.alt = art.alt;

      link.appendChild(img);

      // <figcaption>
      let caption = document.createElement('figcaption');
      caption.innerHTML = art.caption; // innerHTML for <br>

      figure.appendChild(link);  //put link in figure :img in <a>
      figure.appendChild(caption); //put figcaption in figure

      column.appendChild(figure); //put figure in column
      block.appendChild(column); //put column in block

      // 如果不是最後一個作品，加 separator
      if (index < filterGroup.length - 1) {
        let separator = document.createElement('div');
        separator.className = 'separator';
        block.appendChild(separator);
      }
    });

    section.appendChild(block);  //put block in section 
    container.appendChild(section); //put section in container
  });
}


//page filter
function filterArtworksByCategory(category) {
  createArts(category);
}

document.querySelectorAll('.filter-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); //evite skip page
    const category = e.target.dataset.category; //select catagory
    filterArtworksByCategory(category); //do catagory
  });
});
//enter arts page
document.addEventListener("DOMContentLoaded", () => {
  //get catagory 
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  createArts(category);  // show catagory if not show all 
});

createArts();
