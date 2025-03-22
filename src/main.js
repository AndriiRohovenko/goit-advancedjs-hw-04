import { fetchSearchData, showError } from './js/pixabay-api';
import { renderImageMarkup } from './js/render-functions';

const search_form = document.getElementById('search-form');
search_form.addEventListener('submit', search_image);

const loader = document.getElementById('loader');

function search_image(event) {
  event.preventDefault();
  loader.style.display = 'block';
  const search_phrase = event.currentTarget.elements.query.value;
  if (!search_phrase) {
    showError('The request cant be empty, please fill in the input value!');
    loader.style.display = 'none';
    return;
  }
  event.currentTarget.reset();
  fetchSearchData(search_phrase).then(data => {
    loader.style.display = 'none';
    renderImageMarkup(data);
  });
}
