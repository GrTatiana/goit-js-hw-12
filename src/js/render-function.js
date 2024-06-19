// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { refs } from '../main';
let lightbox;
export function marcupImage(images) {
  const gallery = refs.imgGallery;
  const marcup = images
    .map(image => {
      return `<a class="gallery-link" href="${image.largeImageURL}">
  <li class="gallery-item">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags} " />
          <div class="image-info">
               <p>LIKES: ${image.likes}</p>
                    <p>VIEWS: ${image.views}</p>
                    <p>COMMENTS: ${image.comments}</p>
                    <p>DOWNLOADS: ${image.downloads}</p>
                </div>
            </a>
        `;
    })
    .join('');
  gallery.innerHTML = marcup;
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  }).refresh();
}
export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
