import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.js';
import { refs } from '../main';

export function marcupImage(images) {
  const marcup = images
    .map(image => {
      return `<a class="gallery-link" href="${image.largeImageURL}">
  <li class="gallery-item">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${image.webFormatURL}"
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
  refs.imgGallery.innerHTML = marcup;
  new SimpleLightbox('.gallery a').refresh();
}
export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
