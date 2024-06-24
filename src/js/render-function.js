import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { currentPage, maxPage, refs } from '../main';
import iziToast from 'izitoast';

let lightbox = new SimpleLightbox('.gallery li', {
  captionsData: 'alt',
  captionDelay: 250,
});
export function marcupImage(images) {
  const marcup = images
    .map(image => {
      return `<li class="gallery-item"
      <a class="gallery-link" href="${image.largeImageURL}">
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
            </li>
        `;
    })
    .join('');
  refs.imgGallery.insertAdjacentHTML('beforeend', marcup);
  lightbox.refresh();
  // return marcup;
}
export function showLoader() {
  refs.loader.classList.remove('hidden');
}

export function hideLoader() {
  refs.loader.classList.add('hidden');
}
export function formReset() {
  refs.formSearch.reset();
}
export function showLoadBtn() {
  refs.loadBtn.classList.remove('hidden');
}
export function hideLoadBtn() {
  refs.loadBtn.classList.add('hidden');
}

export function scrollGallery() {
  const liElem = refs.imgGallery.children[0];
  const height = liElem.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

export function updateLoadBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadBtn();
    if (maxPage) {
      showError("We're sorry, but you've reached the end of search results.");
    }
  } else {
    showLoadBtn();
  }
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
    layout: 2,
    position: 'topRight',
    displayMode: 'once',
  });
}
