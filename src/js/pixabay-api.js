import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com/api/`;

// need to remove it to env variables or secured storage
export const API_KEY = '49355059-ef28fa3d6cd8d2c420ac797e4';

export async function fetchSearchData(
  search_phrase,
  page_number = 1,
  fetch_per_page = 15
) {
  const request_options = {
    params: {
      key: API_KEY,
      q: search_phrase,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      page: page_number,
      per_page: fetch_per_page,
    },
  };
  const response_data = (await axios.get('', request_options)).data.hits;
  try {
    if (!response_data || response_data.length === 0) {
      const errorText =
        '❌ Sorry, there are no images matching your search query. Please try again!';
      showError(errorText);
      // throw new Error(errorText);
    }
    return response_data;
  } catch {
    console.error('Error fetching data:', error);
    // throw error;
  }
}

export function showError(errorText) {
  iziToast.show({
    title: '',
    message: errorText,
    backgroundColor: '#FF5B61',
    titleColor: 'white',
    messageColor: 'white',
    position: 'topRight',
  });
}
