const body = document.body;
const menu = document.querySelector("#site-menu");
const menuToggle = document.querySelector(".menu-toggle");
const closeButtons = document.querySelectorAll("[data-close-menu]");
const previewCards = document.querySelectorAll("[data-preview]");
const previewLinks = document.querySelectorAll("[data-preview-target]");
const contactForm = document.querySelector("[data-contact-form]");
const firstPreviewLink = previewLinks[0];
let selectedPreview = firstPreviewLink?.dataset.previewTarget || previewCards[0]?.dataset.preview;

function setMenu(open) {
  menu.classList.toggle("is-open", open);
  menu.setAttribute("aria-hidden", String(!open));
  menuToggle.setAttribute("aria-expanded", String(open));
  body.classList.toggle("menu-open", open);
}

menuToggle?.addEventListener("click", () => setMenu(true));
closeButtons.forEach((button) => {
  button.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMenu(false);
  }
});

function showPreview(id) {
  if (!id) {
    return;
  }

  previewCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.preview === id);
  });

  previewLinks.forEach((link) => {
    const isSelected = link.dataset.previewTarget === id;
    link.classList.toggle("is-selected", isSelected);
    if (isSelected) {
      link.setAttribute("aria-current", "true");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

showPreview(selectedPreview);

previewLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => showPreview(link.dataset.previewTarget));
  link.addEventListener("focus", () => showPreview(link.dataset.previewTarget));
  link.addEventListener("mouseleave", () => showPreview(selectedPreview));
  link.addEventListener("blur", () => showPreview(selectedPreview));
  link.addEventListener("pointerdown", () => {
    selectedPreview = link.dataset.previewTarget;
    showPreview(selectedPreview);
  });
});

if (contactForm) {
  const inquirySelect = contactForm.querySelector("[data-inquiry-select]");
  const locationSelect = contactForm.querySelector("[data-location-select]");
  const messageField = contactForm.querySelector("[data-message-field]");
  const formHelper = contactForm.querySelector("[data-form-helper]");

  function syncContactForm() {
    const selectedInquiry = inquirySelect?.value || "Brand campaign";
    const selectedLocation = locationSelect?.value || "";

    if (messageField && !messageField.value.trim()) {
      messageField.placeholder = `${selectedInquiry}: tell us your campaign goal, timing, and what success looks like.`;
    }

    if (formHelper) {
      formHelper.textContent = selectedLocation
        ? `${selectedInquiry} enquiry for ${selectedLocation}. This will be sent to Kobe and Nic.`
        : `${selectedInquiry} enquiry. Pick a location if you already have one in mind.`;
    }
  }

  inquirySelect?.addEventListener("change", syncContactForm);
  locationSelect?.addEventListener("change", syncContactForm);
  syncContactForm();
}
