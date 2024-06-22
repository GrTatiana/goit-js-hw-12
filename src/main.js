import { getImage } from './js/pixabay-api.js';
import { marcupImage, showLoader, hideLoader } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import 'simplelightbox/dist/simple-lightbox.min.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formSearch: document.querySelector('#search'),
  inputImgSearch: document.querySelector('.input-img-search'),
  imgGallery: document.querySelector('.gallery'),
  galleryList: document.querySelector('.gallery-list'),
  loader: document.querySelector('.loader'),
};

refs.formSearch.addEventListener('submit', event => {
  event.preventDefault();
  const imgKeyWord = refs.inputImgSearch.value.trim();
  if (imgKeyWord === '') {
    refs.galleryList.innerHTML = ' ';
    iziToast.warning({
      title: 'warning',
      message: ' Enter a word for the query, please.',
      layout: 2,
      position: 'topRight',
      displayMode: 'once',
    });
    return;
  }
  showLoader();
  const data = getImage(imgKeyWord);
  if (data != []) {
    data.then(data => marcupImage(data.hits));
  }
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    layout: 2,
    position: 'topRight',
    displayMode: 'once',
    zz,
  });
  return;
});
arr.finally(() => {
  hideLoader();
  refs.formSearch.reset();
});
