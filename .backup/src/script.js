feather.replace();

// Active Menu
// const navLink = document.querySelector('.nav-link');
// const windowPathname = window.location.pathname;

// navLink.forEach(navLink => {
//     const navLinkPathname = new URL (navLink.href).pathname;

//     if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
//         navLink.classList.add('active');
//     }
// })


// Menu toggle
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// Scroll Up
const backTop = document.querySelector(".back-top");
window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 88) {
    backTop.style.display = "flex";
  } else {
    backTop.style.display = "none";
  }
}

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    // duration: 123
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const textElement = document.getElementById('animated-text');
  const textToType = 'Web Developer';
  let index = 0;

  function typeText() {
      if (index < textToType.length) {
          textElement.textContent += textToType.charAt(index);
          index++;
          setTimeout(typeText, 150);
      } else {
          setTimeout(eraseText, 2000);
      }
  }

  function eraseText() {
      if (index > 0) {
          textElement.textContent = textElement.textContent.substring(0, index - 1);
          index--;
          setTimeout(eraseText, 100);
      } else {
          setTimeout(typeText, 500);
      }
  }

  typeText();
});

// JavaScript untuk menangani modal
document.addEventListener("DOMContentLoaded", () => {
  const openCVButton = document.getElementById("open-cv-btn");
  const modal = document.getElementById("cv-modal");
  const closeModalButton = document.querySelector(".close-btn");

  // Buka modal saat tombol "Curriculum Vitae" diklik
  openCVButton.addEventListener("click", () => {
      modal.style.display = "flex";
  });

  // Tutup modal saat tombol close (x) diklik
  closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Tutup modal jika area luar modal diklik
  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-cards');
  const cards = document.querySelectorAll('.work-card');
  const hiddenClass = 'hidden';

  // Initially hide some cards
  cards.forEach((card, index) => {
      if (index >= 4) card.classList.add(hiddenClass);
  });

  toggleButton.addEventListener('click', () => {
      const isShowingMore = toggleButton.textContent === 'Show Less';

      cards.forEach((card, index) => {
          if (index >= 4) {
              card.classList.toggle(hiddenClass, isShowingMore);
          }
      });

      toggleButton.textContent = isShowingMore ? 'Show More' : 'Show Less';
  });
});


