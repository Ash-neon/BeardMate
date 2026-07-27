document.documentElement.classList.remove('no-js');

const header = document.querySelector('[data-site-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
const toast = document.getElementById('siteToast');

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
};

const closeMenu = () => {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute('aria-expanded', 'false');
  mobileNav.classList.remove('is-open');
  document.body.classList.remove('menu-open');
};

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

if (header) {
  const updateHeader = () => header.classList.toggle('is-sticky', window.scrollY > 160);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

const thumbnails = Array.from(document.querySelectorAll('.thumb'));
const mainImage = document.getElementById('productMainImage');
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    thumbnails.forEach((item) => item.classList.remove('active'));
    thumbnail.classList.add('active');
    if (mainImage && thumbnail.dataset.image) {
      mainImage.src = thumbnail.dataset.image;
      mainImage.alt = thumbnail.querySelector('img')?.alt || mainImage.alt;
    }
  });
});

document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    button.classList.toggle('active', !expanded);
    if (panel) panel.hidden = expanded;
  });
});

document.querySelectorAll('.faq-button').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!expanded));
    if (panel) panel.hidden = expanded;
  });
});

document.querySelectorAll('form[action*="/cart/add"]').forEach((form) => {
  form.addEventListener('submit', async (event) => {
    if (!event.submitter || event.submitter.name !== 'add') return;
    event.preventDefault();
    const submitButton = form.querySelector('[type="submit"]');
    const originalText = submitButton?.innerHTML;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Adding…';
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      });
      if (!response.ok) throw new Error('Unable to add item');

      const cartResponse = await fetch('/cart.js', { headers: { Accept: 'application/json' } });
      const cart = await cartResponse.json();
      document.querySelectorAll('.cart-count').forEach((count) => { count.textContent = cart.item_count; });
      showToast('Added to your cart.');
    } catch (error) {
      showToast('We could not add that item. Opening the cart page…');
      window.setTimeout(() => form.submit(), 600);
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
      }
    }
  });
});

document.querySelectorAll('[data-share]').forEach((button) => {
  button.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        await navigator.share({ title: document.title, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('Link copied to your clipboard.');
      }
    } catch (error) {
      if (error.name !== 'AbortError') showToast('Copy the page URL to share BeardMate.');
    }
  });
});
