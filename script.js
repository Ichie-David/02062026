const correctPassword = "0212";

/* PIN CHECK */
const unlockBtn = document.getElementById("unlockBtn");
const passwordInput = document.getElementById("passwordInput");
const message = document.getElementById("message");
const lockScreen = document.getElementById("lockScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const letterScreen = document.getElementById("letterScreen");

if (unlockBtn) {
  unlockBtn.addEventListener("click", () => {
    if (passwordInput.value === correctPassword) {
      message.textContent = "Welcome ❤️";
      setTimeout(() => {
        lockScreen.classList.remove("active");
        envelopeScreen.classList.add("active");
      }, 1000);
    } else {
      message.innerHTML =
        "Hmm... try again <br> Hint:4 digits, Two of US shared ❤️";
    }
  });
}

/* OPEN LETTER */
const openLetterBtn = document.getElementById("openLetterBtn");
const envStage = document.getElementById("envStage");

if (openLetterBtn) {
  openLetterBtn.addEventListener("click", () => {
    envStage.classList.add("open");

    setTimeout(() => {
      envelopeScreen.style.opacity = "0";
      envelopeScreen.style.transition = "1.2s ease";
    }, 1200);

    setTimeout(() => {
      envelopeScreen.classList.remove("active");
      letterScreen.classList.add("active");
    }, 2200);
  });
}

/* REVEAL ON SCROLL */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

reveals.forEach((item) => observer.observe(item));

/* TYPEWRITER */
const typewriters = document.querySelectorAll(".typewriter");

const typeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.6 },
);

typewriters.forEach((el) => {
  el.style.animationPlayState = "paused";
  typeObserver.observe(el);
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const lightboxClose = document.getElementById("lightbox-close");

if (lightbox) {
  function openLightbox(type, src) {
    if (type === "img") {
      lightboxImg.src = src;
      lightboxImg.style.display = "block";
      lightboxVideo.style.display = "none";
      lightboxVideo.pause();
    } else {
      lightboxVideo.src = src;
      lightboxVideo.style.display = "block";
      lightboxImg.style.display = "none";
    }
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    lightbox.classList.remove("active");
    lightboxVideo.pause();
    lightboxVideo.src = "";
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  document
    .querySelectorAll(".memory-item img, .polaroid img")
    .forEach((img) => {
      img.addEventListener("click", () => openLightbox("img", img.src));
    });

  document.querySelectorAll(".memory-item video").forEach((video) => {
    video.addEventListener("click", () => openLightbox("video", video.src));
  });

  lightboxClose.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
