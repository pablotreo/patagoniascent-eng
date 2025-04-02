// src/scripts/initLightbox.js

export async function initLightbox() {
  if (typeof window === 'undefined') return;

  // Import dinámico para que Vite lo resuelva correctamente
  const PhotoSwipeLightbox = (await import('photoswipe/lightbox')).default;

  const lightbox = new PhotoSwipeLightbox({
    gallery: '#lightbox-gallery',
    children: 'a',
    pswpModule: () => import('photoswipe'),
  });

  lightbox.init();
}
