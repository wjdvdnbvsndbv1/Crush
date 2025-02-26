function showImages() {
    let crushName = document.getElementById("crushName").value.trim().toLowerCase();
    let imageBox = document.getElementById("imageBox");

    let images = [];

    if (crushName === "vanshika") {
        images = [
            "images/OIP.jpeg",
            "images/OIP2.jpeg",
            "images/th.jpeg"
        ];
    } else if (crushName === "lisa") {
        images = [
            "https://i.pinimg.com/564x/5e/5e/22/5e5e224dbb4b7f646c4ec3ea5e5bfe37.jpg",
            "https://i.pinimg.com/564x/8a/0b/3f/8a0b3f7e5cb1c62f0e2d20be8cd7d1e6.jpg",
            "https://i.pinimg.com/564x/47/77/32/477732fca81f50c8b09c3a9dcadb3bd5.jpg"
        ];
    } else {
        alert("No images available for this name! Try Vanshika or Lisa.");
        return;
    }

    imageBox.innerHTML = ""; // Clear previous images
    let delay = 500; // Delay between each image appearing

    images.forEach((imgSrc, index) => {
        setTimeout(() => {
            let card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `<figure class="image"><img src="${imgSrc}" alt="Image"></figure>`;
            card.style.display = "block"; // Show image with delay
            card.onclick = function () {
                changeBackground(imgSrc);
            };
            imageBox.appendChild(card);
        }, index * delay);
    });

    imageBox.style.display = "flex";

    // Play Music when Images Appear
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    }

    changeCompliments(); // Start compliment rotation
}

function changeBackground(imgSrc) {
    document.body.style.background = `url('${imgSrc}') no-repeat center center fixed`;
    document.body.style.backgroundSize = "cover";
}

function changeCompliments() {
    let compliments = [
        "💕 You are the reason my heart beats faster! 💕",
        "😍 Your smile is my favorite thing in the world! 😍",
        "💖 You make every moment special! 💖",
        "🌟 You shine brighter than all the stars! 🌟",
        "💘 My world is more beautiful because of you! 💘"
    ];

    let complimentIndex = 0;
    setInterval(() => {
        document.getElementById("complimentBox").innerHTML = compliments[complimentIndex];
        complimentIndex = (complimentIndex + 1) % compliments.length;
    }, 5000);
}

// Toggle Music On/Off
function toggleMusic() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Floating Hearts Animation
document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".floating-hearts");

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("span");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";
        heartContainer.appendChild(heart);
    }
});
