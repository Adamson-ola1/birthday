// ==========================================
// BIRTHDAY WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTS
    // ==========================================

    const loader = document.getElementById("loader");
    const openBtn = document.getElementById("openBtn");
    const opening = document.getElementById("opening");
    const hero = document.getElementById("hero");

    const music = document.getElementById("birthdayMusic");
    const musicBtn = document.getElementById("musicBtn");

    const typing = document.getElementById("typing");

    const blowBtn = document.getElementById("blowBtn");
    const flame = document.querySelector(".flame");

    const topBtn = document.getElementById("topBtn");

    const confettiContainer = document.getElementById("confetti");


    // ==========================================
    // LOADING SCREEN
    // ==========================================

    window.addEventListener("load", () => {

        setTimeout(() => {

            if (loader) {
                loader.style.opacity = "0";

                setTimeout(() => {
                    loader.style.display = "none";
                }, 500);
            }

        }, 3000);

    });


    // ==========================================
    // OPEN GIFT
    // ==========================================

    if (openBtn) {

        openBtn.addEventListener("click", () => {

            // Hide opening screen
            opening.style.opacity = "0";

            setTimeout(() => {

                opening.style.display = "none";

                // Show hero
                hero.style.display = "flex";

                // Trigger hero animation
                setTimeout(() => {
                    hero.classList.add("show");
                }, 100);

            }, 500);


            // Start music
            if (music) {

                music.play()
                    .then(() => {

                        musicBtn.innerHTML =
                            '<i class="fa-solid fa-volume-high"></i>';

                    })
                    .catch(() => {

                        console.log("Music playback requires user interaction.");

                    });

            }


            // Start typing
            startTyping();

            // Launch celebration
            createConfetti();

            createFireworks();

        });

    }


    // ==========================================
    // TYPING EFFECT
    // ==========================================

    const text =
        "🎉 Wishing You Endless Happiness, Success & Joy! 🎂";

    let typingIndex = 0;

    function startTyping() {

        if (!typing) return;

        typing.innerHTML = "";
        typingIndex = 0;

        function type() {

            if (typingIndex < text.length) {

                typing.innerHTML += text.charAt(typingIndex);

                typingIndex++;

                setTimeout(type, 70);

            }

        }

        type();

    }


    // ==========================================
    // MUSIC BUTTON
    // ==========================================

    if (musicBtn && music) {

        musicBtn.addEventListener("click", () => {

            if (music.paused) {

                music.play();

                musicBtn.innerHTML =
                    '<i class="fa-solid fa-volume-high"></i>';

            } else {

                music.pause();

                musicBtn.innerHTML =
                    '<i class="fa-solid fa-volume-xmark"></i>';

            }

        });

    }


    // ==========================================
    // BLOW CANDLE
    // ==========================================

    if (blowBtn && flame) {

        blowBtn.addEventListener("click", () => {

            if (flame.style.display === "none") {

                // Relight candle
                flame.style.display = "block";

                blowBtn.innerHTML = "🎂 Blow the Candle";

            } else {

                // Blow candle
                flame.style.display = "none";

                blowBtn.innerHTML = "✨ Make Another Wish";

                createConfetti();

                createFireworks();

                setTimeout(() => {

                    alert(
                        "🎂 Happy Birthday Debukola! 🎉\n\nMake a beautiful wish! ❤️"
                    );

                }, 300);

            }

        });

    }


    // ==========================================
    // SCROLL TO TOP
    // ==========================================

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    if (topBtn) {

        topBtn.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ==========================================
    // SECTION FADE-IN ANIMATION
    // ==========================================

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    sections.forEach((section) => {

        observer.observe(section);

    });


    // ==========================================
    // FLOATING BALLOONS
    // ==========================================

    function createBalloon() {

        const balloon = document.createElement("div");

        balloon.className = "floating-balloon";

        balloon.innerHTML = "🎈";

        balloon.style.left =
            Math.random() * 100 + "vw";

        balloon.style.fontSize =
            30 + Math.random() * 25 + "px";

        balloon.style.animationDuration =
            7 + Math.random() * 5 + "s";

        document.body.appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        }, 13000);

    }


    setInterval(createBalloon, 1500);


    // ==========================================
    // CONFETTI
    // ==========================================

    function createConfetti() {

        const numberOfConfetti = 100;

        for (let i = 0; i < numberOfConfetti; i++) {

            const confetti = document.createElement("div");

            confetti.className = "confetti-piece";

            confetti.innerHTML = "🎊";

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.fontSize =
                10 + Math.random() * 20 + "px";

            confetti.style.animationDuration =
                3 + Math.random() * 3 + "s";

            confetti.style.animationDelay =
                Math.random() * 1.5 + "s";

            if (confettiContainer) {

                confettiContainer.appendChild(confetti);

            } else {

                document.body.appendChild(confetti);

            }

            setTimeout(() => {

                confetti.remove();

            }, 7000);

        }

    }


    // ==========================================
    // FIREWORKS
    // ==========================================

    function createFireworks() {

        const canvas = document.getElementById("fireworks");

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        function createExplosion(x, y) {

            for (let i = 0; i < 40; i++) {

                const angle =
                    Math.random() * Math.PI * 2;

                const speed =
                    Math.random() * 6 + 2;

                particles.push({

                    x: x,
                    y: y,

                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,

                    life: 100

                });

            }

        }


        function animate() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            particles.forEach((particle, index) => {

                particle.x += particle.vx;

                particle.y += particle.vy;

                particle.vy += 0.05;

                particle.life--;

                ctx.beginPath();

                ctx.arc(
                    particle.x,
                    particle.y,
                    2,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle =
                    `hsl(${Math.random() * 360}, 100%, 60%)`;

                ctx.fill();

                if (particle.life <= 0) {

                    particles.splice(index, 1);

                }

            });

            requestAnimationFrame(animate);

        }


        createExplosion(
            window.innerWidth * 0.3,
            window.innerHeight * 0.3
        );

        createExplosion(
            window.innerWidth * 0.7,
            window.innerHeight * 0.25
        );

        animate();

    }


    // ==========================================
    // WINDOW RESIZE
    // ==========================================

    window.addEventListener("resize", () => {

        const canvas = document.getElementById("fireworks");

        if (canvas) {

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

        }

    });


    // ==========================================
    // CONSOLE MESSAGE
    // ==========================================

    console.log(
        "🎉 Happy Birthday Debukola! Website loaded successfully."
    );


// ==================================================
// INTERACTIVE IMAGE GALLERY / LIGHTBOX
// ==================================================

const galleryItems =
    document.querySelectorAll(".gallery-item img");

const lightbox =
    document.getElementById("imageLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxCounter =
    document.getElementById("lightboxCounter");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


let currentImageIndex = 0;


// Open image

function openLightbox(index) {

    if (!galleryItems.length) return;

    currentImageIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "lightbox-open"
    );

}


// Update image

function updateLightbox() {

    const image =
        galleryItems[currentImageIndex];

    if (!image) return;

    lightboxImage.src =
        image.src;

    lightboxImage.alt =
        image.alt;

    lightboxCaption.textContent =
        image.alt;

    lightboxCounter.textContent =
        `${currentImageIndex + 1} / ${galleryItems.length}`;

}


// Close image

function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "lightbox-open"
    );

}


// Previous image

function previousImage() {

    currentImageIndex--;

    if (currentImageIndex < 0) {

        currentImageIndex =
            galleryItems.length - 1;

    }

    updateLightbox();

}


// Next image

function nextImage() {

    currentImageIndex++;

    if (
        currentImageIndex >=
        galleryItems.length
    ) {

        currentImageIndex = 0;

    }

    updateLightbox();

}


// Click gallery image

galleryItems.forEach(
    (image, index) => {

        image.addEventListener(
            "click",
            () => {

                openLightbox(index);

            }
        );

    }
);


// Close button

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


// Previous button

if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        previousImage
    );

}


// Next button

if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        nextImage
    );

}


// Click outside image to close

if (lightbox) {

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target ===
                lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


// Keyboard controls

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowLeft") {

            previousImage();

        }


        if (event.key === "ArrowRight") {

            nextImage();

        }

    }
);



});
