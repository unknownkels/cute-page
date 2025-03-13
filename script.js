document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const questionContainer = document.getElementById("questionContainer");
    const resultContainer = document.getElementById("resultContainer");

    noBtn.addEventListener("mouseover", () => {
        const maxX = window.innerWidth - noBtn.offsetWidth;
        const maxY = window.innerHeight - noBtn.offsetHeight;

        const newX = Math.floor(Math.random() * maxX);
        const newY = Math.floor(Math.random() * maxY);

        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    });

    yesBtn.addEventListener("click", () => {
        questionContainer.style.display = "none";
        resultContainer.style.display = "block";
    });
});