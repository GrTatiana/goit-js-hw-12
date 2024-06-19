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
  loader: document.querySelector('.loader'),
};

refs.formSearch.addEventListener('submit', event => {
  event.preventDefault();
  const imgKeyWord = refs.inputImgSearch.value.trim();
  if (imgKeyWord === '') {
    refs.imgGallery.innerHTML = ' ';
    iziToast.warning({
      title: 'warning',
      message: ' Enter a word for the query, please.',
      position: 'center',
      displayMode: 'once',
      maxWidth: 500,
      imageWidth: 600,
    });
  }

  showLoader();
  const arr = getImage(imgKeyWord);
  if (arr.length !== 0) {
    arr.then(data => marcupImage(data.hits));
  }
  arr.catch(err => {
    iziToast.show({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'center',
      displayMode: 'once',
      maxWidth: 500,
      imageWidth: 600,
    });
  });
  arr.finally(() => {
    hideLoader();
    refs.formSearch.reset();
  });
});
