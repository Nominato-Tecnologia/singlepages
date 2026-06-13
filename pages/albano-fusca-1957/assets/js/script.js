const floatingWhatsappButton = document.querySelector('.floating-whatsapp');

function toggleFloatingWhatsappButton() {
  if (!floatingWhatsappButton) {
    return;
  }

  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const shouldShowButton = scrollPosition > 280;

  floatingWhatsappButton.classList.toggle('is-visible', shouldShowButton);
}

window.addEventListener('scroll', toggleFloatingWhatsappButton, { passive: true });
window.addEventListener('load', toggleFloatingWhatsappButton);
