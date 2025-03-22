import { fetchSearchData, showError } from './js/pixabay-api';
import { renderImageMarkup } from './js/render-functions';

const search_form = document.getElementById('search-form');
const loader = document.getElementById('loader');
const loadMoreBtn = document.querySelector('.load-more-button-js');

let page = 1;
let search_phrase = '';

search_form.addEventListener('submit', search_image);
loadMoreBtn.addEventListener('click', load_more_images);

async function search_image(event) {
  event.preventDefault();
  page = 1;
  loader.style.display = 'block';
  search_phrase = event.currentTarget.elements.query.value.trim();

  if (!search_phrase) {
    showError('The request cant be empty, please fill in the input value!');
    loader.style.display = 'none';
    return;
  }

  event.currentTarget.reset();

  const data = await fetchSearchData(search_phrase, page);
  try {
    loader.style.display = 'none';
    renderImageMarkup(data);
    loadMoreBtn.style.display = 'inline-block';
    if (data.length === 0) {
      loadMoreBtn.style.display = 'none';
    }
  } catch (err) {
    console.error(err);
    loader.style.display = 'none';
    loadMoreBtn.style.display = 'none';
  }
}

async function load_more_images() {
  try {
    page += 1;
    const data = await fetchSearchData(search_phrase, page);
    renderImageMarkup(data, true);
  } catch (err) {
    console.error(err);
  }
}
