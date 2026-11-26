/* ============================================================
   Aperture — Creative Image Gallery
   Data, filtering, masonry rendering and lightbox behaviour
   ============================================================ */

/* ---------- 1. Gallery data ---------- */
const galleryImages = [
  {
    id: "nature-01",
    title: "Alpine Silence",
    category: "Nature",
    location: "Yosemite, USA",
    photoId: "photo-1506744038136-46273834b3fb",
    ratio: "4 / 5",
    alt: "Mountain lake reflecting snow-capped peaks under a soft sky"
  },
  {
    id: "nature-02",
    title: "Forest Whispers",
    category: "Nature",
    location: "Pacific Northwest, USA",
    photoId: "photo-1441974231531-c6227db76b6e",
    ratio: "3 / 4",
    alt: "Sunlight filtering through a dense green forest"
  },
  {
    id: "nature-03",
    title: "Above the Clouds",
    category: "Nature",
    location: "Dolomites, Italy",
    photoId: "photo-1470071459604-3b5ec3a7fe05",
    ratio: "5 / 4",
    alt: "Misty mountain ridges rising above a sea of clouds"
  },
  {
    id: "nature-04",
    title: "Blue Hour Tide",
    category: "Nature",
    location: "Atlantic Coast",
    photoId: "photo-1518837695005-2083093ee35b",
    ratio: "1 / 1",
    alt: "An ocean wave curling at blue hour"
  },
  {
    id: "nature-05",
    title: "Still Waters",
    category: "Nature",
    location: "Banff, Canada",
    photoId: "photo-1493246507139-91e8fad9978e",
    ratio: "4 / 3",
    alt: "Calm alpine lake surrounded by pine forest"
  },
  {
    id: "architecture-01",
    title: "Geometry of Light",
    category: "Architecture",
    location: "Copenhagen, Denmark",
    photoId: "photo-1487958449943-2429e8be8625",
    ratio: "4 / 5",
    alt: "White modern building with clean geometric lines"
  },
  {
    id: "architecture-02",
    title: "Vertical Rhythm",
    category: "Architecture",
    location: "Berlin, Germany",
    photoId: "photo-1518005020951-eccb494ad742",
    ratio: "3 / 4",
    alt: "Modern building facade photographed from a low angle"
  },
  {
    id: "architecture-03",
    title: "Quiet Interiors",
    category: "Architecture",
    location: "Stockholm, Sweden",
    photoId: "photo-1497366754035-f200968a6e72",
    ratio: "5 / 4",
    alt: "Minimal bright interior filled with natural light"
  },
  {
    id: "architecture-04",
    title: "Concrete Poetry",
    category: "Architecture",
    location: "Chicago, USA",
    photoId: "photo-1524230572899-a752b3835840",
    ratio: "1 / 1",
    alt: "Architectural detail of a concrete and glass building"
  },
  {
    id: "architecture-05",
    title: "Lines & Shadows",
    category: "Architecture",
    location: "Lisbon, Portugal",
    photoId: "photo-1494526585095-c41746248156",
    ratio: "4 / 3",
    alt: "Contemporary house with crisp lines and soft shadows"
  },
  {
    id: "portrait-01",
    title: "Soft Focus",
    category: "Portrait",
    location: "Studio series",
    photoId: "photo-1534528741775-53994a69daeb",
    ratio: "4 / 5",
    alt: "Portrait of a woman in soft natural light"
  },
  {
    id: "portrait-02",
    title: "The Thinker",
    category: "Portrait",
    location: "Studio series",
    photoId: "photo-1506794778202-cad84cf45f1d",
    ratio: "3 / 4",
    alt: "Portrait of a man against a muted background"
  },
  {
    id: "portrait-03",
    title: "Golden Gaze",
    category: "Portrait",
    location: "Studio series",
    photoId: "photo-1524504388940-b1c1722653e1",
    ratio: "5 / 4",
    alt: "Warm-toned portrait of a woman looking toward the light"
  },
  {
    id: "portrait-04",
    title: "Between Moments",
    category: "Portrait",
    location: "Studio series",
    photoId: "photo-1531123897727-8f129e1688ce",
    ratio: "1 / 1",
    alt: "Thoughtful portrait of a woman in gentle daylight"
  },
  {
    id: "portrait-05",
    title: "Natural Light",
    category: "Portrait",
    location: "Studio series",
    photoId: "photo-1508214751196-bcfd4ca60f91",
    ratio: "4 / 3",
    alt: "Close portrait of a woman with a calm expression"
  },
  {
    id: "travel-01",
    title: "Parisian Afternoon",
    category: "Travel",
    location: "Paris, France",
    photoId: "photo-1502602898657-3e91760cbb34",
    ratio: "4 / 5",
    alt: "Eiffel Tower rising above Paris rooftops"
  },
  {
    id: "travel-02",
    title: "Waterways",
    category: "Travel",
    location: "Venice, Italy",
    photoId: "photo-1523906834658-6e24ef2386f9",
    ratio: "3 / 4",
    alt: "Narrow Venetian canal lined with historic buildings"
  },
  {
    id: "travel-03",
    title: "Colour Coast",
    category: "Travel",
    location: "Cinque Terre, Italy",
    photoId: "photo-1516483638261-f4dbaf036963",
    ratio: "5 / 4",
    alt: "Colourful seaside village on the Italian coast"
  },
  {
    id: "travel-04",
    title: "White Horizons",
    category: "Travel",
    location: "Santorini, Greece",
    photoId: "photo-1533105079780-92b9be482077",
    ratio: "1 / 1",
    alt: "Whitewashed buildings overlooking the Aegean Sea"
  },
  {
    id: "travel-05",
    title: "City Lights",
    category: "Travel",
    location: "New York, USA",
    photoId: "photo-1477959858617-67f85cf4f1df",
    ratio: "4 / 3",
    alt: "Dense city skyline glowing at dusk"
  }
];

/* ---------- 2. Element references ---------- */
const filterBar = document.getElementById("filter-bar");
const galleryGrid = document.getElementById("gallery-grid");
const resultCount = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");

const lightbox = document.getElementById("lightbox");
const lightboxBackdrop = document.getElementById("lightbox-backdrop");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxLocation = document.getElementById("lightbox-location");
const lightboxCounter = document.getElementById("lightbox-counter");
const toTopButton = document.getElementById("to-top");

const arrowIcon = `
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

/* ---------- 3. Application state ---------- */
let activeCategory = "all";
let visibleImages = [];
let currentIndex = 0;
let lastFocusedElement = null;

/* ---------- 4. Image helpers ---------- */
function imageUrl(photoId, width, quality = 80) {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

function fallbackUrl(seed) {
  return `https://picsum.photos/seed/${seed}/900/1100`;
}

/* If a remote image ever fails, swap in a dependable placeholder. */
function handleImageError(event) {
  const image = event.target;
  if (image.dataset.fallbackApplied === "true") return;

  const seed = image.dataset.fallback || image.id || "aperture";
  image.dataset.fallbackApplied = "true";
  image.removeEventListener("error", handleImageError);
  image.src = fallbackUrl(seed);
}

galleryGrid.addEventListener("error", handleImageError, true);
lightboxImage.addEventListener("error", handleImageError);
document.querySelectorAll(".hero-visual img").forEach((image) => {
  image.addEventListener("error", handleImageError);
});

/* ---------- 5. Scroll reveal ---------- */
let revealObserver = null;

if ("IntersectionObserver" in window) {
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
}

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!revealObserver) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => revealObserver.observe(element));
}

/* ---------- 6. Render and filter the gallery ---------- */
function renderGallery() {
  const selectedImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category.toLowerCase() === activeCategory
        );

  visibleImages = selectedImages;

  galleryGrid.innerHTML = selectedImages
    .map(
      (image, index) => `
        <div class="card-wrap reveal">
          <button class="gallery-card" type="button" data-index="${index}"
                  aria-label="Open ${image.title} in full-screen preview">
            <span class="card-media" style="aspect-ratio: ${image.ratio}">
              <img src="${imageUrl(image.photoId, 800)}"
                   alt="${image.alt}"
                   loading="lazy"
                   decoding="async"
                   data-fallback="${image.id}">
              <span class="card-category">${image.category}</span>
              <span class="card-info">
                <span>
                  <span class="card-title">${image.title}</span>
                  <span class="card-location">${image.location}</span>
                </span>
                <span class="card-arrow" aria-hidden="true">${arrowIcon}</span>
              </span>
            </span>
          </button>
        </div>`
    )
    .join("");

  resultCount.textContent = `${selectedImages.length} ${
    selectedImages.length === 1 ? "frame" : "frames"
  }`;
  emptyState.hidden = selectedImages.length > 0;

  observeRevealElements();
}

filterBar.addEventListener("click", (event) => {
  const clickedButton = event.target.closest(".filter-btn");
  if (!clickedButton) return;

  activeCategory = clickedButton.dataset.category;

  filterBar.querySelectorAll(".filter-btn").forEach((button) => {
    const isActive = button === clickedButton;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderGallery();
});

galleryGrid.addEventListener("click", (event) => {
  const clickedCard = event.target.closest(".gallery-card");
  if (!clickedCard) return;

  openLightbox(Number(clickedCard.dataset.index));
});

/* ---------- 7. Lightbox ---------- */
function updateLightbox() {
  const image = visibleImages[currentIndex];
  if (!image) return;

  lightboxImage.dataset.fallback = image.id;
  lightboxImage.src = imageUrl(image.photoId, 1600, 90);
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = image.title;
  lightboxCategory.textContent = image.category;
  lightboxLocation.textContent = image.location;

  const position = String(currentIndex + 1).padStart(2, "0");
  const total = String(visibleImages.length).padStart(2, "0");
  lightboxCounter.textContent = `${position} / ${total}`;
}

function openLightbox(index) {
  if (!visibleImages[index]) return;

  lastFocusedElement = document.activeElement;
  currentIndex = index;
  updateLightbox();

  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");

  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

function navigateLightbox(step) {
  if (visibleImages.length < 2) return;

  currentIndex =
    (currentIndex + step + visibleImages.length) % visibleImages.length;
  updateLightbox();
}

function trapLightboxFocus(event) {
  const focusableButtons = [lightboxClose, lightboxPrev, lightboxNext];
  const firstButton = focusableButtons[0];
  const lastButton = focusableButtons[focusableButtons.length - 1];

  if (event.shiftKey && document.activeElement === firstButton) {
    event.preventDefault();
    lastButton.focus();
  } else if (!event.shiftKey && document.activeElement === lastButton) {
    event.preventDefault();
    firstButton.focus();
  }
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
lightboxNext.addEventListener("click", () => navigateLightbox(1));

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowRight") {
    navigateLightbox(1);
  } else if (event.key === "ArrowLeft") {
    navigateLightbox(-1);
  } else if (event.key === "Tab") {
    trapLightboxFocus(event);
  }
});

/* ---------- 8. Back to top ---------- */
function updateToTopButton() {
  toTopButton.classList.toggle("is-visible", window.scrollY > 600);
}

window.addEventListener("scroll", updateToTopButton, { passive: true });
toTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------- 9. Start ---------- */
renderGallery();
updateToTopButton();
