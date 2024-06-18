import { getImage } from './js/pixabay-api.js';
import { marcupImage, showLoader, hideLoader } from './js/render-function.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'simplelightbox/dist/simple-lightbox.min.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formSearch: document.querySelector('#search'),
  inputImgSearch: document.querySelector('.input-img-search'),
  imgGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.formSearch.addEventListener('submit', event => {
  event.preventDefault();
  const imgKeyWord = refs.inputImgSearch.value.trim();
  console.log(imgKeyWord);
  if (imgKeyWord === '') {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
    refs.imgGallery.innerHTML = '';
  } else {
    getImage(imgKeyWord)
      .then(data => marcupImage(data))
      .catch(err => {});
  }
});
// refs.formSearch.reset();
