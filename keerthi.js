/* PAGE ELEMENTS */

const surpriseBtn = document.getElementById("surpriseBtn");

const galleryPage = document.getElementById("galleryPage");

const nextBtn = document.getElementById("nextBtn");

const lovePage = document.getElementById("lovePage");

/* SHOW PAGE 2 */

surpriseBtn.addEventListener("click", () => {

    galleryPage.style.display = "flex";

    galleryPage.scrollIntoView({
        behavior:"smooth"
    });

});

/* SHOW PAGE 3 */

nextBtn.addEventListener("click", () => {

    lovePage.style.display = "flex";

    lovePage.scrollIntoView({
        behavior:"smooth"
    });

});

/* Falling Hearts Animation */

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "30px";
    heart.style.animation = "fall 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}, 700);

/* Falling Animation */

const style = document.createElement("style");

style.innerHTML = `

@keyframes fall{

    to{
        transform:translateY(110vh) rotate(360deg);
        opacity:0;
    }

}

`;

document.head.appendChild(style);