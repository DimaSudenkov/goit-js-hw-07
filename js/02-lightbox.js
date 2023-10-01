import { galleryItems } from './gallery-items.js';
// Change code below this line

const container = document.querySelector(".gallery");
console.log(container);

container.addEventListener("click", handlerClick)
container.insertAdjacentHTML("afterbegin", handlerModal(galleryItems))


function handlerModal(arr) {
  return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  ).join('')
}

function handlerClick(evt) {
  evt.preventDefault()
  if (evt.target === evt.currentTarget) {
    return
  }
  const lightbox = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
  });
}

