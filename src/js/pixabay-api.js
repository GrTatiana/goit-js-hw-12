export function getImage(image) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    key: '44418874-6a40f19281481af9f7a412a08',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  console.log(url);
  return fetch(url)
    .then(data => data.json())
    .catch(err => {});
}
