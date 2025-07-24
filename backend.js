let menuIcon = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// ----------------------------------------------------------------------------------------------------------------------

const roles = ["a Student!", "a Content Creator!", "an Engineer!"];
const typedText = document.getElementById("typed-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentRole = roles[roleIndex];
    const currentText = currentRole.substring(0, charIndex);
    typedText.textContent = currentText;

    if (!isDeleting && charIndex < currentRole.length) {
        charIndex++;
        setTimeout(typeEffect, 150); // typing speed
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 120); // deleting speed
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, 1000); // pause before next word
    }
}
    // Start the animation
    typeEffect();

// ---------------------------------------------------------------------------------------------------------------------

const projects = {
    "Full-Stack": [
        {
            title: "Portfolio Website",
            desc: "Fully responsive personal website built using HTML, CSS, and JavaScript.",
            link: "https://paramtanna.github.io/Portfolio-Website/"
        },
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // },
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // }
    ],
    "Machine Learning": [
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // },
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // },
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // }
    ],
    "Quantitative Analysis": [
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // },
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // },
        // {
        //     title: "",
        //     desc: "",
        //     link: ""
        // }
    ]
};

// Select default tab
document.getElementById("fullstack-tab").classList.add("active");
updateCards("Full-Stack");


function updateCards(category) {
    const cards = document.querySelectorAll(".card");
    const data = projects[category];

    // Hide all cards initially
    cards.forEach(card => {
        card.style.display = "none";
        card.classList.remove("flipped");
    });

    const cardContainer = document.querySelector(".card-container");
    let comingSoonMsg = document.getElementById("coming-soon-msg");

    // Remove previous message if any
    if (comingSoonMsg) comingSoonMsg.remove();

    // If no data, show the message
    if (!data || data.length === 0) {
        comingSoonMsg = document.createElement("div");
        comingSoonMsg.id = "coming-soon-msg";
        comingSoonMsg.innerHTML = `
            <div style="
                text-align: center;
                color:rgb(255, 255, 255);
                font-size: 22px;
                font-weight: 500;
                margin-top: 40px;
                animation: fadeIn 1s ease-in-out;
            ">
                🚧 Projects coming soon...
            </div>
        `;
        cardContainer.appendChild(comingSoonMsg);
        return;
    }

    // Else: show available project cards
    data.forEach((project, index) => {
        const card = cards[index];
        if (card) {
            card.querySelector(".card-front p").textContent = project.title;
            card.querySelector(".card-description").textContent = project.desc;
            card.querySelector(".card-front a").href = project.link;
            card.style.display = "block";
        }
    });
}




// Add event listeners for tabs
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        const category = tab.textContent.trim();
        updateCards(category);
    });
});

// Card flip logic
document.querySelectorAll(".card").forEach(card => {
    const descBtn = card.querySelector(".card-button");
    const backBtn = card.querySelector(".card-back-button");

    descBtn.addEventListener("click", () => {
        card.classList.add("flipped");
    });

    backBtn.addEventListener("click", () => {
        card.classList.remove("flipped");
    });
});

//------------------------------------------------------------------------------------------------------------------

