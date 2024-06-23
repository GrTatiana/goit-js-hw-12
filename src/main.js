import { getArticle } from './js/pixabay-api.js';
import {
  marcupImage,
  showLoader,
  hideLoader,
  showLoadBtn,
  updateLoadBtnStatus,
  hideLoadBtn,
  formReset,
  showError,
  scrollGallery,
} from './js/render-function.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const refs = {
  formSearch: document.querySelector('#search'),
  inputImgSearch: document.querySelector('.input-img-search'),
  imgGallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadBtn: document.querySelector('.load-btn'),
};
let query;
export let currentPage = 1;
export let maxPage;
export const perPage = 15;

refs.formSearch.addEventListener('submit', async event => {
  event.preventDefault();
  query = event.target.elements.search.value.trim();

  if (!query) {
    refs.imgGallery.innerHTML = ' ';
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
  hideLoadBtn();
  currentPage = 1;
  try {
    const data = await getArticle(query, currentPage);
    maxPage = Math.ceil(data.totalHits / perPage);
    if (maxPage === 0) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      hideLoader();
      updateLoadBtnStatus();
      return;
      formReset();
    }
    const marcup = marcupImage(data.hits);
    refs.imgGallery.insertAdjacentHTML('beforeend', marcup);
  } catch (error) {
    console.log(error);
  }
  hideLoader();
  updateLoadBtnStatus();
  formReset();
});

refs.loadBtn.addEventListener('click', async event => {
  currentPage++;
  hideLoadBtn();
  showLoader();
  try {
    const data = await getArticle(query, currentPage);
    const marcup = marcupImage(data.hits);
    refs.imgGallery.insertAdjacentHTML('beforeend', marcup);
    scrollGallery();
  } catch (error) {
    console.log(error);
  }
  hideLoader();
  updateLoadBtnStatus();
});
