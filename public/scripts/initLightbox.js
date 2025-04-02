// public/scripts/initLightbox.js

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

if (typeof window !== 'undefined') {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '#lightbox-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  });

  lightbox.init();
}
