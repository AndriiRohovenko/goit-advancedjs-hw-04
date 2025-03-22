import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const gallery_config = {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
};

let lightbox = null;

export function renderImageMarkup(images, append = false) {
  if (!images || images.length === 0) {
    gallery.innerHTML = '';
    return;
  }

  const galleryMarkup = images
    .map(
      img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img
          class="gallery-image"
          src="${img.webformatURL}"
          alt="${img.tags}"
        />
      </a>
          <div class="image-info">
        <p class="image-info-text"><strong>Likes</strong> <span>${img.likes}</span></p>
        <p class="image-info-text"><strong>Views</strong> <span>${img.views}</span></p>
        <p class="image-info-text"><strong>Comments</strong> <span>${img.comments}</span></p>
        <p class="image-info-text"><strong>Downloads</strong> <span>${img.downloads}</span></p>
      </div>
    </li>
  `
    )
    .join('');
  if (append) {
    gallery.insertAdjacentHTML('beforeend', galleryMarkup);
  } else {
    gallery.innerHTML = galleryMarkup;
  }

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', gallery_config);
  } else {
    lightbox.refresh();
  }
}
