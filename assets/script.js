const yearEl = document.getElementById('year');
const thumbnails = Array.from(document.querySelectorAll('.thumb'));
const mainImage = document.getElementById('productMainImage');
const accordionButtons = Array.from(document.querySelectorAll('.accordion-button'));
const faqButtons = Array.from(document.querySelectorAll('.faq-button'));

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

thumbnails.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbnails.forEach((item) => item.classList.remove('active'));
    thumb.classList.add('active');
    const imageSrc = thumb.dataset.image;
    if (mainImage && imageSrc) {
      mainImage.src = imageSrc;
    }
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const active = button.classList.contains('active');
    accordionButtons.forEach((other) => {
      other.classList.remove('active');
      other.setAttribute('aria-expanded', 'false');
      other.nextElementSibling.style.display = 'none';
    });

    if (!active) {
      button.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
      button.nextElementSibling.style.display = 'block';
    }
  });
});

faqButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isExpanded));
    panel.style.display = isExpanded ? 'none' : 'block';
  });
});
