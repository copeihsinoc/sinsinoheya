//get id
function getArtworkIdFromURL() {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}
//get chaque artwork:id
function getArtwork(id) {
    return artworks.find(art => art.id ===id);
}

function showArtwork(artwork) {
    let container = document.querySelector('.artworkContainer');

    if (!artwork) {
        container.innerHTML = "<p>Artwork not found.</p>";
        return;
    }
    //boucle for + une img
    let galleryHTML = "";
    if(artwork.gallery && artwork.gallery.length > 0){
        for (let i = 0; i < artwork.gallery.length; i++){
            galleryHTML += `
                <a href="${artwork.gallery[i]}" data-lightbox="gallery">
                    <img src="${artwork.gallery[i]}" alt="Gallery image">
                </a>
            `;
        }
    }

    let detailsHTML = "";
    if(artwork.details && artwork.details.length > 0){
        detailsHTML += `<table class="details-table"><tbody>`;
        for(let i=0; i < artwork.details.length; i++){
            detailsHTML +=`
                <tr>
                    <td><strong>${artwork.details[i].label}<strong>:
                    <span class="tool">${artwork.details[i].tool}</span>
                    </td>
                </tr>
            `;
        }
        detailsHTML += `</tbody></table>`;
    }

    container.innerHTML = `
            <div class="left-column">
                <div class="main-image">
                    <a href="${artwork.mainImage}" data-lightbox="gallery">
                        <img src="${artwork.mainImage}" alt="${artwork.title}">
                    </a>
                </div>
                <div class="other-image">${galleryHTML}</div>
            </div>
            <div class="right-column">
                <h2>${artwork.title}</h2>
                <p>${artwork.description}</p>
                <div class="details">${detailsHTML}</div>
            </div>
        </div>
    `;
}


//btn-Next
function slideNext(currentId) {
    let currentIndex = artworks.findIndex(art => art.id === currentId);
    if (currentIndex === -1) return;

    let nextIndex = (currentIndex + 1) % artworks.length; 
    let nextId = artworks[nextIndex].id;
    window.location.href = `artwork.html?id=${nextId}`;
}

//btn-Prev
function slidePrev(currentId) {
    let currentIndex = artworks.findIndex(art => art.id === currentId);
    if (currentIndex === -1) return;

    let prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    let prevId = artworks[prevIndex].id;
    window.location.href = `artwork.html?id=${prevId}`;
}

//show prev/next title 
function updateButtons(currentIndex) {
    let prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
    let nextIndex = (currentIndex + 1) % artworks.length;

    let prevTitle = document.getElementById("prevTitle");
    let nextTitle = document.getElementById("nextTitle");

    if(prevTitle && nextTitle){
        prevTitle.textContent = artworks[prevIndex].title;
        nextTitle.textContent = artworks[nextIndex].title;
    }
}

//data download completed-action
document.addEventListener("DOMContentLoaded", () => {
    let id = getArtworkIdFromURL();
    let currentIndex = artworks.findIndex(art => art.id === id);
    let artwork = getArtwork(id);

    showArtwork(artwork);

    if (currentIndex !== -1) {
        updateButtons(currentIndex);
    }

    let btnPrev = document.querySelector(".btnPrev button");
    let btnNext = document.querySelector(".btnNext button");

    if(btnPrev && btnNext){
        btnPrev.addEventListener("click", ()=>{
            let currentId = getArtworkIdFromURL();
            slidePrev(currentId);
        });

        btnNext.addEventListener("click", ()=>{
            let currentId = getArtworkIdFromURL();
            slideNext(currentId);
        });
    }

});
