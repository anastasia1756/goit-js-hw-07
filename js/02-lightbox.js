import { galleryItems } from './gallery-items.js';
// Change code below this line

const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageGallery(images) {
    return galleryItems.map(({preview, original, description}) => {
          return `<li class="gallery__list"><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;
      }).join('');
  }
let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

createImageGallery()

  

