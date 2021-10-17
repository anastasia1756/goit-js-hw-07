import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(createImageGallery(galleryItems));
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
    // console.log(event.target.nodeName)
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    console.log(event.target);
    const imageEl = document.querySelector(".gallery__image");
    const largeImageEl = imageEl.dataset.source;
    console.log(largeImageEl); //неправильно?только первый берется


}