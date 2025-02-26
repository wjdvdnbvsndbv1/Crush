function showImages() {
    let crushName = document.getElementById("crushName").value.trim().toLowerCase();
    let imageBox = document.getElementById("imageBox");

    let images = [];

    if (crushName === "vanshika") {
        images = [
            "https://i.pinimg.com/564x/4d/9a/24/4d9a24c5ba21ad961541b5f5b7f7cad1.jpg",
            "https://i.pinimg.com/564x/1b/43/3d/1b433d50a0c1d15eb02d25e88eb1fc11.jpg",
            "https://i.pinimg.com/564x/1f/c4/3f/1fc43fb2e79cb66688a32f784bd13e96.jpg"
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
    images.forEach(imgSrc => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<figure class="image"><img src="${imgSrc}" alt="Image"></figure>`;
        imageBox.appendChild(card);
    });

    imageBox.style.display = "flex";
    changeCompliments();
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


function toggleMusic() {
    let music = document.getElementById("backgroundMusic");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.querySelector(".floating-hearts");

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("span");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 5 + 5 + "s";
        heartContainer.appendChild(heart);
    }
});
