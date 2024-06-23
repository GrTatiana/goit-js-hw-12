import axios from 'axios';
import { perPage, refs } from '../main';
axios.defaults.baseURL = 'https://pixabay.com';

export async function getArticle(query, currentPage) {
  const params = {
    key: '44418874-6a40f19281481af9f7a412a08',
    q: query,
    page: currentPage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: perPage,
    order: 'popular',
  };
  const result = await axios.get('/api/', { params });
  console.log(result.data);
  return result.data;
}
