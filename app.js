const config = window.KAYAN_CONFIG || {};

document.querySelectorAll('[data-email]').forEach((element) => {
  const address = config[element.dataset.email];
  if (!address) return;
  element.textContent = address;
  element.href = `mailto:${address}`;
});

document.querySelectorAll('[data-publisher]').forEach((element) => {
  element.textContent = config.publisher || 'DamoorApps';
});

document.querySelectorAll('[data-updated]').forEach((element) => {
  element.textContent = config.updated || '';
});

const legalNotice = document.querySelector('[data-legal-notice]');
if (legalNotice && config.legalNotice) legalNotice.textContent = config.legalNotice;

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('[data-carousel-track]');
  const previous = carousel.querySelector('[data-carousel-prev]');
  const next = carousel.querySelector('[data-carousel-next]');
  if (!track || !previous || !next) return;

  const update = () => {
    previous.disabled = track.scrollLeft < 8;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  };

  const move = (direction) => {
    const card = track.querySelector('.shot-card');
    const distance = card ? card.getBoundingClientRect().width + 17 : track.clientWidth * .82;
    track.scrollBy({ left: direction * distance, behavior: 'smooth' });
  };

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  track.addEventListener('scroll', update, { passive: true });
  update();
});
