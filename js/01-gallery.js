import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemEl = document.querySelector('.gallery__item');




imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryEl.addEventListener('click', onImageClick);

function createImageGallery(images) {
  return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}

function onImageClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
    }
    
    const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="1280">
`
    )
    modal.show();

if(modal) {
  document.addEventListener("keydown", event => {
    if(event.code === 'NumpadEnter') {
      modal.close()
    }
  }, { once: true });
}
}

