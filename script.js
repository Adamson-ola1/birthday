/* ============================================================
   DEBUKOLA BIRTHDAY WEBSITE
   Main JavaScript
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* ========================================================
       ELEMENTS
       ======================================================== */

    const loader =
        document.getElementById("loader");

    const opening =
        document.getElementById("opening");

    const openBtn =
        document.getElementById("openBtn");

    const hero =
        document.getElementById("hero");

    const typing =
        document.getElementById("typing");

    const music =
        document.getElementById("birthdayMusic");

    const musicBtn =
        document.getElementById("musicBtn");

    const topBtn =
        document.getElementById("topBtn");

    const blowBtn =
        document.getElementById("blowBtn");

    const flame =
        document.getElementById("flame");

    const wishMessage =
        document.getElementById("wishMessage");

    const galleryContainer =
        document.getElementById("galleryContainer");

    const galleryEmpty =
        document.getElementById("galleryEmpty");

    const timelineContainer =
        document.getElementById("timelineContainer");

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

    const confettiContainer =
        document.getElementById("confetti");

    const fireworksCanvas =
        document.getElementById("fireworks");


    /* ========================================================
       SETTINGS
       ======================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    /* ========================================================
       IMAGE CONFIGURATION
       ======================================================== */

    /*
     * IMPORTANT:
     *
     * All image paths are kept here.
     *
     * If an image filename is different on your computer,
     * change it HERE instead of searching through the HTML.
     */

    const galleryImages = [

        {
            src: "images/debukola.jpg",
            title: "A Beautiful Smile",
            alt: "Debukola"
        },

        {
            src: "images/cake.jpg",
            title: "Birthday Cake",
            alt: "Birthday cake"
        },

        {
            src: "images/gift.jpg",
            title: "A Special Gift",
            alt: "Birthday gift"
        },

        {
            src: "images/baloon.jpg",
            title: "Birthday Celebration",
            alt: "Birthday balloons"
        },

        {
            src: "images/pic_1.jpg",
            title: "Beautiful Memory",
            alt: "Birthday memory"
        },

        {
            src: "images/pic_2.jpg",
            title: "Another Beautiful Moment",
            alt: "Birthday memory"
        }

    ];


    /*
     * LIFE JOURNEY
     *
     * These filenames should match the files inside
     * your images folder exactly.
     */

    const timelineMemories = [

        {
            number: "01",
            image: "images/joygiver_..jpg",
            label: "The Beginning",
            title: "A Moment Full of Joy",
            text:
                "Some moments arrive quietly but leave behind memories that stay forever. This is one of those beautiful moments — a reminder of the joy, warmth, and happiness that make life special."
        },

        {
            number: "02",
            image: "images/pic_3.jpg",
            label: "A Beautiful Chapter",
            title: "Moments Worth Remembering",
            text:
                "Life becomes beautiful when ordinary moments become unforgettable memories. This picture captures one of those moments that deserves a special place in the story."
        },

        {
            number: "03",
            image: "images/pic_4.jpg",
            label: "A Special Moment",
            title: "Smiles That Tell a Story",
            text:
                "Behind every smile is a story, and behind every beautiful picture is a moment that cannot be repeated. This memory reminds us to appreciate every beautiful second life gives us."
        },

        {
            number: "04",
            image: "images/pic_5.jpg",
            label: "Growing & Shining",
            title: "Another Beautiful Chapter",
            text:
                "Every chapter brings something new — new experiences, new lessons, new smiles, and new reasons to be grateful. This is another beautiful page in the journey."
        },

        {
            number: "05",
            image: "images/pic_6.jpg",
            label: "Precious Memory",
            title: "The Moments That Matter",
            text:
                "Years may pass, but special memories never really disappear. They remain in our hearts as reminders of laughter, connection, happiness, and everything that made that moment meaningful."
        },

        {
            number: "06",
            image: "images/pic_7.jpg",
            label: "Beautiful Memories",
            title: "Keep Smiling",
            text:
                "There is something special about memories filled with genuine happiness. May there always be more moments like this — moments that bring laughter and make the journey worthwhile."
        },

        {
            number: "07",
            image: "images/pic_8.jpg",
            label: "A Moment to Treasure",
            title: "Memories Become Treasures",
            text:
                "The best memories are not always the biggest moments. Sometimes, they are simple moments that quietly become treasures we carry with us for years."
        },

        {
            number: "08",
            image: "images/pic_9.jpeg",
            label: "Unforgettable",
            title: "A Memory to Keep Forever",
            text:
                "This moment becomes part of a bigger story — a story filled with experiences, beautiful people, laughter, growth, and memories that make the journey uniquely yours."
        },

        {
            number: "09",
            image: "images/pic_10.jpg",
            label: "Another Chapter",
            title: "More Reasons to Smile",
            text:
                "Every new experience adds another layer to the story. May this chapter be remembered for the happiness it brought and the beautiful memories it created."
        },

        {
            number: "10",
            image: "images/pic_11.jpg",
            label: "A Memory of Love",
            title: "Moments Close to the Heart",
            text:
                "Some memories feel different because they carry something deeper — love, friendship, gratitude, laughter, or simply the feeling of being surrounded by people who matter."
        },

        {
            number: "11",
            image: "images/pic_12.jpg",
            label: "Keep Shining",
            title: "The Journey Continues",
            text:
                "The beautiful thing about life is that the story never really ends. There are always new places, new memories, new achievements, and new reasons to celebrate."
        },

        {
            number: "12",
            image: "images/pic_13.jpg",
            label: "New Beginnings",
            title: "A New Chapter Awaits",
            text:
                "With every passing year comes another opportunity to grow, dream bigger, love deeper, and create memories that will one day become part of the beautiful story of your life."
        },

        {
            number: "13",
            image: "images/pic_14.jpg",
            label: "Birthday Chapter",
            title: "Celebrating You",
            text:
                "Today is more than just another date on the calendar. It is a celebration of you, your journey, your growth, your smile, and all the beautiful possibilities waiting ahead."
        },

        {
            number: "14", 
            image: "images/joygiver.jpg",
            label: "🌷 Joygiver",
            title: "A Beautiful Source of Joy",
            text: "Some people have a special way of bringing warmth, happiness, and positive energy wherever they go. This memory celebrates the beautiful joy you bring into the lives of the people around you." 
        },

        {
            number: "15",
            image: "images/pic_16.jpg",
            label: "✨ The Next Chapter",
            title: "A Beautiful Future Awaits",
            text: "Every memory behind us has helped shape the journey, but there is still so much ahead. May this new chapter bring greater happiness, unforgettable experiences, meaningful achievements, and countless reasons to smile."
        },

        {
            number: "16",
            image: "images/pic_15.jpg",
            label: "To Be Continued...",
            title: "The Best Is Still Ahead",
            text:
                "These memories are beautiful, but they are only part of the story. There are still countless moments waiting to be created, dreams waiting to become reality, and beautiful chapters waiting to unfold."
        }

    ];


    /* ========================================================
       LOADER
       ======================================================== */

    function hideLoader() {

        if (!loader) {
            return;
        }

        loader.classList.add("hidden");
    }


    window.addEventListener("load", () => {

        setTimeout(
            hideLoader,
            prefersReducedMotion ? 500 : 1800
        );

    });


    /*
     * Safety fallback.
     */

    setTimeout(
        hideLoader,
        5000
    );


    /* ========================================================
       IMAGE PLACEHOLDER
       ======================================================== */

    function createImageErrorCard(
        filename,
        type = "memory"
    ) {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "image-error";


        const icon =
            document.createElement("div");

        icon.className =
            "image-error-icon";

        icon.textContent =
            type === "cake"
                ? "🎂"
                : "📷";


        const title =
            document.createElement("strong");

        title.textContent =
            type === "cake"
                ? "Birthday cake image unavailable"
                : "Memory image unavailable";


        const small =
            document.createElement("small");

        small.textContent =
            filename;


        wrapper.appendChild(icon);

        wrapper.appendChild(title);

        wrapper.appendChild(small);


        return wrapper;
    }


    /* ========================================================
       GALLERY
       ======================================================== */

    function renderGallery() {

        if (!galleryContainer) {
            return;
        }


        galleryContainer.innerHTML = "";


        let renderedCount = 0;


        galleryImages.forEach(
            (image, index) => {

                const card =
                    document.createElement("article");

                card.className =
                    "gallery-item";

                card.dataset.galleryIndex =
                    index;


                const img =
                    document.createElement("img");

                img.src =
                    image.src;

                img.alt =
                    image.alt;

                img.loading =
                    index < 3
                        ? "eager"
                        : "lazy";

                img.decoding =
                    "async";


                const overlay =
                    document.createElement("div");

                overlay.className =
                    "gallery-overlay";


                const title =
                    document.createElement("span");

                title.className =
                    "gallery-title";

                title.textContent =
                    image.title;


                const zoom =
                    document.createElement("span");

                zoom.className =
                    "zoom-icon";

                zoom.innerHTML =
                    '<i class="fa-solid fa-magnifying-glass-plus"></i>';


                overlay.appendChild(title);

                card.appendChild(img);

                card.appendChild(overlay);

                card.appendChild(zoom);

                galleryContainer.appendChild(card);


                img.addEventListener(
                    "error",
                    () => {

                        console.warn(
                            "Gallery image could not be loaded:",
                            image.src
                        );


                        card.innerHTML = "";

                        card.classList.add(
                            "image-error-container"
                        );


                        const errorCard =
                            createImageErrorCard(
                                image.src
                            );


                        card.appendChild(
                            errorCard
                        );

                    }
                );


                renderedCount++;

            }
        );


        if (galleryEmpty) {

            galleryEmpty.classList.toggle(
                "hidden",
                renderedCount > 0
            );

        }

    }


    /* ========================================================
       TIMELINE
       ======================================================== */

    function renderTimeline() {

        if (!timelineContainer) {
            return;
        }


        timelineContainer.innerHTML = "";


        timelineMemories.forEach(
            (memory) => {

                const article =
                    document.createElement("article");

                article.className =
                    "timeline-item";


                article.innerHTML = `

                    <div class="timeline-node">
                        <span>${memory.number}</span>
                    </div>

                    <div class="timeline-card">

                        <div
                            class="timeline-image gallery-item"
                            data-timeline="true"
                        >

                            <img
                                src="${memory.image}"
                                alt="${memory.title}"
                                loading="lazy"
                                decoding="async"
                            >

                            <span class="memory-number">
                                Memory ${memory.number}
                            </span>

                            <span class="timeline-zoom">
                                <i class="fa-solid fa-magnifying-glass-plus"></i>
                            </span>

                        </div>

                        <div class="timeline-content">

                            <span class="timeline-label">
                                ${memory.label}
                            </span>

                            <h3>
                                ${memory.title}
                            </h3>

                            <p>
                                ${memory.text}
                            </p>

                        </div>

                    </div>
                `;


                const image =
                    article.querySelector(
                        ".timeline-image img"
                    );


                if (image) {

                    image.addEventListener(
                        "error",
                        () => {

                            console.warn(
                                "Timeline image could not be loaded:",
                                memory.image
                            );


                            const imageWrapper =
                                article.querySelector(
                                    ".timeline-image"
                                );


                            if (!imageWrapper) {
                                return;
                            }


                            imageWrapper.innerHTML = "";

                            imageWrapper.classList.add(
                                "image-error"
                            );


                            imageWrapper.appendChild(
                                createImageErrorCard(
                                    memory.image
                                )
                            );

                        }
                    );

                }


                timelineContainer.appendChild(
                    article
                );

            }
        );

    }


    renderGallery();

    renderTimeline();


    /* ========================================================
       LIGHTBOX
       ======================================================== */

    let lightboxImages = [];

    let currentImageIndex = 0;

    let lastFocusedElement = null;


    function refreshLightboxImages() {

        const images =
            document.querySelectorAll(
                ".gallery-item img"
            );


        lightboxImages =
            Array.from(images)
                .filter(
                    (image) =>
                        image.naturalWidth > 0
                )
                .map(
                    (image) => ({
                        src:
                            image.currentSrc ||
                            image.src,

                        alt:
                            image.alt ||
                            "Birthday memory"
                    })
                );

    }


    function updateLightbox() {

        if (
            !lightboxImages.length ||
            !lightboxImage
        ) {
            return;
        }


        const image =
            lightboxImages[
                currentImageIndex
            ];


        if (!image) {
            return;
        }


        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;


        if (lightboxCaption) {

            lightboxCaption.textContent =
                image.alt;

        }


        if (lightboxCounter) {

            lightboxCounter.textContent =
                `${currentImageIndex + 1} / ${lightboxImages.length}`;

        }


        const multiple =
            lightboxImages.length > 1;


        if (lightboxPrev) {

            lightboxPrev.disabled =
                !multiple;

        }


        if (lightboxNext) {

            lightboxNext.disabled =
                !multiple;

        }

    }


    function openLightbox(
        imageElement
    ) {

        if (!lightbox) {
            return;
        }


        refreshLightboxImages();


        if (!lightboxImages.length) {
            return;
        }


        const imageList =
            Array.from(
                document.querySelectorAll(
                    ".gallery-item img"
                )
            )
            .filter(
                (image) =>
                    image.naturalWidth > 0
            );


        const clickedIndex =
            imageList.indexOf(
                imageElement
            );


        currentImageIndex =
            clickedIndex >= 0
                ? clickedIndex
                : 0;


        lastFocusedElement =
            document.activeElement;


        updateLightbox();


        lightbox.classList.add(
            "active"
        );


        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "lightbox-open"
        );


        requestAnimationFrame(
            () => {

                if (lightboxClose) {

                    lightboxClose.focus();

                }

            }
        );

    }


    function closeLightbox() {

        if (!lightbox) {
            return;
        }


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


        setTimeout(
            () => {

                if (
                    !lightbox.classList.contains(
                        "active"
                    )
                ) {

                    if (lightboxImage) {

                        lightboxImage.src = "";

                    }

                }

            },
            300
        );


        if (
            lastFocusedElement &&
            typeof lastFocusedElement.focus === "function"
        ) {

            lastFocusedElement.focus();

        }

    }


    function previousImage() {

        if (
            lightboxImages.length <= 1
        ) {
            return;
        }


        currentImageIndex--;


        if (currentImageIndex < 0) {

            currentImageIndex =
                lightboxImages.length - 1;

        }


        updateLightbox();

    }


    function nextImage() {

        if (
            lightboxImages.length <= 1
        ) {
            return;
        }


        currentImageIndex++;


        if (
            currentImageIndex >=
            lightboxImages.length
        ) {

            currentImageIndex = 0;

        }


        updateLightbox();

    }


    /* ========================================================
       GALLERY / TIMELINE CLICK
       ======================================================== */

    document.addEventListener(
        "click",
        (event) => {

            const image =
                event.target.closest(
                    ".gallery-item img"
                );


            if (!image) {
                return;
            }


            if (
                !image.complete ||
                image.naturalWidth === 0
            ) {

                return;

            }


            openLightbox(image);

        }
    );


    if (lightboxClose) {

        lightboxClose.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightboxPrev) {

        lightboxPrev.addEventListener(
            "click",
            previousImage
        );

    }


    if (lightboxNext) {

        lightboxNext.addEventListener(
            "click",
            nextImage
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    /* ========================================================
       KEYBOARD LIGHTBOX CONTROLS
       ======================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                !lightbox ||
                !lightbox.classList.contains(
                    "active"
                )
            ) {

                return;

            }


            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }


            if (
                event.key === "ArrowLeft"
            ) {

                event.preventDefault();

                previousImage();

            }


            if (
                event.key === "ArrowRight"
            ) {

                event.preventDefault();

                nextImage();

            }

        }
    );


    /* ========================================================
       TOUCH / SWIPE
       ======================================================== */

    let touchStartX = 0;

    let touchStartY = 0;


    if (lightbox) {

        lightbox.addEventListener(
            "touchstart",
            (event) => {

                if (!event.touches.length) {
                    return;
                }


                touchStartX =
                    event.touches[0].clientX;

                touchStartY =
                    event.touches[0].clientY;

            },
            {
                passive: true
            }
        );


        lightbox.addEventListener(
            "touchend",
            (event) => {

                if (
                    !event.changedTouches.length
                ) {
                    return;
                }


                const touch =
                    event.changedTouches[0];


                const deltaX =
                    touch.clientX -
                    touchStartX;


                const deltaY =
                    touch.clientY -
                    touchStartY;


                if (
                    Math.abs(deltaX) <
                    Math.abs(deltaY)
                ) {

                    return;

                }


                if (
                    Math.abs(deltaX) < 50
                ) {

                    return;

                }


                if (deltaX < 0) {

                    nextImage();

                } else {

                    previousImage();

                }

            },
            {
                passive: true
            }
        );

    }


    /* ========================================================
       TYPING EFFECT
       ======================================================== */

    const typingText =
        "🎉 Wishing You Endless Happiness, Success & Joy! 🎂";


    function startTyping() {

        if (!typing) {
            return;
        }


        typing.textContent = "";


        if (prefersReducedMotion) {

            typing.textContent =
                typingText;

            return;

        }


        let index = 0;


        function type() {

            if (
                index >=
                typingText.length
            ) {

                return;

            }


            typing.textContent +=
                typingText.charAt(index);


            index++;


            setTimeout(
                type,
                60
            );

        }


        type();

    }


    /* ========================================================
       OPEN GIFT
       ======================================================== */

    let surpriseOpened = false;


    if (openBtn) {

        openBtn.addEventListener(
            "click",
            () => {

                if (surpriseOpened) {
                    return;
                }


                surpriseOpened = true;


                if (opening) {

                    opening.classList.add(
                        "fade-out"
                    );

                }


                setTimeout(
                    () => {

                        if (opening) {

                            opening.style.display =
                                "none";

                        }


                        if (hero) {

                            hero.classList.add(
                                "show"
                            );

                        }


                        startTyping();

                    },
                    650
                );


                startMusic();

                createConfetti();

                createFireworkShow();

                startFloatingCelebration();

            },
            {
                once: true
            }
        );

    }


    /* ========================================================
       MUSIC
       ======================================================== */

    let musicPlaying = false;


    function updateMusicIcon() {

        if (!musicBtn) {
            return;
        }


        musicBtn.innerHTML =
            musicPlaying
                ? '<i class="fa-solid fa-volume-high"></i>'
                : '<i class="fa-solid fa-volume-xmark"></i>';


        musicBtn.setAttribute(
            "aria-label",
            musicPlaying
                ? "Pause birthday music"
                : "Play birthday music"
        );

    }


    async function startMusic() {

        if (!music) {
            return;
        }


        try {

            await music.play();

            musicPlaying = true;

            updateMusicIcon();

        } catch (error) {

            musicPlaying = false;

            updateMusicIcon();

            console.info(
                "Music playback requires user interaction.",
                error
            );

        }

    }


    if (music) {

        music.addEventListener(
            "play",
            () => {

                musicPlaying = true;

                updateMusicIcon();

            }
        );


        music.addEventListener(
            "pause",
            () => {

                musicPlaying = false;

                updateMusicIcon();

            }
        );

    }


    if (musicBtn) {

        musicBtn.addEventListener(
            "click",
            async () => {

                if (!music) {
                    return;
                }


                if (music.paused) {

                    await startMusic();

                } else {

                    music.pause();

                }

            }
        );

    }


    /* ========================================================
       CAKE / CANDLE
       ======================================================== */

    let candleBlown = false;


    if (blowBtn) {

        blowBtn.addEventListener(
            "click",
            () => {

                if (!flame) {
                    return;
                }


                if (!candleBlown) {

                    flame.classList.add(
                        "blown-out"
                    );


                    candleBlown = true;


                    blowBtn.innerHTML =
                        "✨ Make Another Wish";


                    if (wishMessage) {

                        wishMessage.textContent =
                            "Your wish is on its way... ❤️✨";

                    }


                    createConfetti();

                    createFireworkShow();

                } else {

                    flame.classList.remove(
                        "blown-out"
                    );


                    candleBlown = false;


                    blowBtn.innerHTML =
                        "🎂 Blow the Candle";


                    if (wishMessage) {

                        wishMessage.textContent =
                            "";

                    }

                }

            }
        );

    }


    /* ========================================================
       SCROLL TO TOP
       ======================================================== */

    function handleScroll() {

        if (!topBtn) {
            return;
        }


        if (
            window.scrollY >
            350
        ) {

            topBtn.classList.add(
                "show"
            );

        } else {

            topBtn.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        handleScroll,
        {
            passive: true
        }
    );


    if (topBtn) {

        topBtn.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,

                    behavior:
                        prefersReducedMotion
                            ? "auto"
                            : "smooth"
                });

            }
        );

    }


    /* ========================================================
       SECTION REVEAL
       ======================================================== */

    const sections =
        document.querySelectorAll(
            ".content-section"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const observer =
            new IntersectionObserver(
                (
                    entries,
                    observerInstance
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );


                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.08
                }
            );


        sections.forEach(
            (section) => {

                observer.observe(
                    section
                );

            }
        );

    } else {

        sections.forEach(
            (section) => {

                section.classList.add(
                    "visible"
                );

            }
        );

    }


    /* ========================================================
       TIMELINE REVEAL
       ======================================================== */

    const timelineItems =
        document.querySelectorAll(
            ".timeline-item"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const timelineObserver =
            new IntersectionObserver(
                (
                    entries,
                    observerInstance
                ) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "timeline-visible"
                                );


                                observerInstance.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.1
                }
            );


        timelineItems.forEach(
            (item) => {

                timelineObserver.observe(
                    item
                );

            }
        );

    } else {

        timelineItems.forEach(
            (item) => {

                item.classList.add(
                    "timeline-visible"
                );

            }
        );

    }


    /* ========================================================
       FLOATING CELEBRATION
       ======================================================== */

    let celebrationStarted = false;


    let balloonInterval = null;

    let heartInterval = null;


    function createBalloon() {

        const balloon =
            document.createElement(
                "div"
            );


        balloon.className =
            "floating-balloon";


        balloon.textContent =
            "🎈";


        balloon.style.left =
            `${Math.random() * 100}vw`;


        balloon.style.fontSize =
            `${30 + Math.random() * 25}px`;


        balloon.style.animationDuration =
            `${8 + Math.random() * 5}s`;


        document.body.appendChild(
            balloon
        );


        setTimeout(
            () => {

                balloon.remove();

            },
            15000
        );

    }


    function createHeart() {

        const heart =
            document.createElement(
                "div"
            );


        heart.className =
            "floating-heart";


        const hearts = [
            "❤️",
            "💕",
            "💗",
            "💖",
            "💓"
        ];


        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            `${Math.random() * 100}vw`;


        heart.style.fontSize =
            `${16 + Math.random() * 18}px`;


        heart.style.animationDuration =
            `${7 + Math.random() * 6}s`;


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.remove();

            },
            16000
        );

    }


    function startFloatingCelebration() {

        if (
            celebrationStarted ||
            prefersReducedMotion
        ) {

            return;

        }


        celebrationStarted =
            true;


        createBalloon();

        createHeart();


        balloonInterval =
            setInterval(
                createBalloon,
                2800
            );


        heartInterval =
            setInterval(
                createHeart,
                2300
            );

    }


    /* ========================================================
       CONFETTI
       ======================================================== */

    function createConfetti() {

        if (!confettiContainer) {
            return;
        }


        const count =
            prefersReducedMotion
                ? 20
                : 90;


        const symbols = [
            "🎊",
            "✨",
            "💖",
            "🎉",
            "⭐",
            "💕"
        ];


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const piece =
                document.createElement(
                    "div"
                );


            piece.className =
                "confetti-piece";


            piece.textContent =
                symbols[
                    Math.floor(
                        Math.random() *
                        symbols.length
                    )
                ];


            piece.style.left =
                `${Math.random() * 100}vw`;


            piece.style.fontSize =
                `${10 + Math.random() * 18}px`;


            piece.style.animationDuration =
                `${3 + Math.random() * 3}s`;


            piece.style.animationDelay =
                `${Math.random() * 1.2}s`;


            confettiContainer.appendChild(
                piece
            );


            setTimeout(
                () => {

                    piece.remove();

                },
                7000
            );

        }

    }


    /* ========================================================
       FIREWORKS
       ======================================================== */

    let fireworksRunning = false;

    let fireworksFrame = null;

    let fireworksParticles = [];


    function setupFireworksCanvas() {

        if (!fireworksCanvas) {
            return;
        }


        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        const width =
            window.innerWidth;


        const height =
            window.innerHeight;


        fireworksCanvas.width =
            width * ratio;


        fireworksCanvas.height =
            height * ratio;


        fireworksCanvas.style.width =
            `${width}px`;

        fireworksCanvas.style.height =
            `${height}px`;


        const ctx =
            fireworksCanvas.getContext(
                "2d"
            );


        if (ctx) {

            ctx.setTransform(
                ratio,
                0,
                0,
                ratio,
                0,
                0
            );

        }

    }


    function createExplosion(
        x,
        y,
        particleCount = 55
    ) {

        const colors = [
            "#ff5c8a",
            "#ffd166",
            "#c77dff",
            "#ffffff",
            "#ff9fba"
        ];


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const speed =
                1.5 +
                Math.random() * 5;


            fireworksParticles.push({

                x,

                y,

                vx:
                    Math.cos(angle) *
                    speed,

                vy:
                    Math.sin(angle) *
                    speed,

                life:
                    70 +
                    Math.random() * 40,

                maxLife:
                    110,

                size:
                    1.2 +
                    Math.random() * 2.2,

                color:
                    colors[
                        Math.floor(
                            Math.random() *
                            colors.length
                        )
                    ]

            });

        }

    }


    function animateFireworks() {

        if (
            !fireworksCanvas ||
            !fireworksRunning
        ) {
            return;
        }


        const ctx =
            fireworksCanvas.getContext(
                "2d"
            );


        if (!ctx) {
            return;
        }


        ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );


        fireworksParticles =
            fireworksParticles.filter(
                (particle) => {

                    particle.x +=
                        particle.vx;

                    particle.y +=
                        particle.vy;

                    particle.vy +=
                        0.035;

                    particle.vx *=
                        0.995;

                    particle.life--;


                    const alpha =
                        Math.max(
                            particle.life /
                            particle.maxLife,
                            0
                        );


                    ctx.globalAlpha =
                        alpha;

                    ctx.beginPath();


                    ctx.arc(
                        particle.x,
                        particle.y,
                        particle.size,
                        0,
                        Math.PI * 2
                    );


                    ctx.fillStyle =
                        particle.color;

                    ctx.fill();


                    return particle.life > 0;

                }
            );


        ctx.globalAlpha = 1;


        fireworksFrame =
            requestAnimationFrame(
                animateFireworks
            );

    }


    function createFireworkShow() {

        if (
            prefersReducedMotion ||
            !fireworksCanvas
        ) {

            return;

        }


        if (fireworksFrame) {

            cancelAnimationFrame(
                fireworksFrame
            );

        }


        setupFireworksCanvas();


        fireworksParticles = [];

        fireworksRunning = true;


        const width =
            window.innerWidth;


        const height =
            window.innerHeight;


        createExplosion(
            width * 0.25,
            height * 0.25
        );


        createExplosion(
            width * 0.75,
            height * 0.3
        );


        createExplosion(
            width * 0.5,
            height * 0.18
        );


        animateFireworks();


        setTimeout(
            () => {

                fireworksRunning =
                    false;


                if (fireworksFrame) {

                    cancelAnimationFrame(
                        fireworksFrame
                    );

                }

            },
            4000
        );

    }


    /* ========================================================
       RESIZE
       ======================================================== */

    let resizeTimer;


    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimer
            );


            resizeTimer =
                setTimeout(
                    () => {

                        setupFireworksCanvas();

                    },
                    150
                );

        }
    );


    /* ========================================================
       INITIALIZATION
       ======================================================== */

    setupFireworksCanvas();

    updateMusicIcon();

    handleScroll();


    console.log(
        "🎉 Debukola Birthday Website initialized successfully."
    );

});