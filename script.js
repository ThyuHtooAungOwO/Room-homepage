const slidesData = [
  {
    desktopImage: "./images/desktop-image-hero-1.jpg",
    mobileImage: "./images/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    desktopImage: "./images/desktop-image-hero-2.jpg",
    mobileImage: "./images/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktopImage: "./images/desktop-image-hero-3.jpg",
    mobileImage: "./images/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

//DOM Element References
const heroImageContainer = document.querySelector(".hero");
const discoverTitle = document.getElementById("discover-title");
const discoverDescription = document.getElementById("discover-description");
const arrowLeftBtn = document.getElementById("arrow-left-btn");
const arrowRightBtn = document.getElementById("arrow-right-btn");

// Mobile menu elements
const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileMenu = document.getElementById("mobileMenu");
const menuCloseBtn = document.getElementById("menuCloseBtn");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const body = document.body;

//State Variable
let currentSlideIndex = 0;

//Functions
const updateSlideContent = () => {
  const slide = slidesData[currentSlideIndex];

  if (window.innerWidth >= 768) {
    heroImageContainer.style.backgroundImage = `url(${slide.desktopImage})`;
  } else {
    heroImageContainer.style.backgroundImage = `url(${slide.mobileImage})`;
  }

  discoverTitle.textContent = slide.title;
  discoverDescription.textContent = slide.description;
};

const goToNextSlide = () => {
  currentSlideIndex++;
  if (currentSlideIndex >= slidesData.length) {
    currentSlideIndex = 0;
  }
  updateSlideContent();
};

const goToPreviousSlide = () => {
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slidesData.length - 1;
  }
  updateSlideContent();
};

const toggleMobileMenu = () => {
  mobileMenu.classList.toggle("open");
  mobileMenuOverlay.classList.toggle("active");
  body.classList.toggle("no-scroll");
  hamburgerIcon.setAttribute(
    "aria-expanded",
    mobileMenu.classList.contains("open")
  );
};

//Event Listeners

if (arrowLeftBtn) {
  arrowLeftBtn.addEventListener("click", goToPreviousSlide);
}
if (arrowRightBtn) {
  arrowRightBtn.addEventListener("click", goToNextSlide);
}

if (hamburgerIcon) {
  hamburgerIcon.addEventListener("click", toggleMobileMenu);
}
if (menuCloseBtn) {
  menuCloseBtn.addEventListener("click", toggleMobileMenu);
}
if (mobileMenuOverlay) {
  mobileMenuOverlay.addEventListener("click", toggleMobileMenu);
}

updateSlideContent();

window.addEventListener("resize", () => {
  updateSlideContent();

  if (window.innerWidth >= 768 && mobileMenu.classList.contains("open")) {
    toggleMobileMenu();
  }
});
