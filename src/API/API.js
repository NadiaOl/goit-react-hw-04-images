const KEY = '34756592-add6791e980caa28afb1f7410';
const BASE_URL = 'https://pixabay.com/api';

export const getPicture = (searchText, page) => {
  return fetch(`${BASE_URL}/?key=${KEY}&q=${searchText}&page=${page}&per_page=12&image_type=photo&orientation=horizontal&safesearch=true`)

}
