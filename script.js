/* ==================================================
   SVNCTM
   LANDING PAGE JAVASCRIPT
================================================== */


/* ==================================================
   LOADING SCREEN
================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");


    setTimeout(() => {

        loader.classList.add("hidden");

    }, 1500);

});



/* ==================================================
   MOUSE PARALLAX
================================================== */

const isTouchDevice =
    window.matchMedia(
        "(pointer: coarse)"
    ).matches;


if (!isTouchDevice) {


    const center =
        document.querySelector(".center");


    const orbOne =
        document.querySelector(".orb-one");


    const orbTwo =
        document.querySelector(".orb-two");


    const orbThree =
        document.querySelector(".orb-three");


    const orbFour =
        document.querySelector(".orb-four");


    let mouseX = 0;

    let mouseY = 0;


    let currentX = 0;

    let currentY = 0;



    window.addEventListener(
        "mousemove",
        (event) => {

            mouseX =
                (event.clientX /
                    window.innerWidth) -
                0.5;


            mouseY =
                (event.clientY /
                    window.innerHeight) -
                0.5;

        }
    );



    function animateParallax() {


        currentX +=
            (mouseX - currentX) *
            0.04;


        currentY +=
            (mouseY - currentY) *
            0.04;



        /* HERO MOVEMENT */

        center.style.transform =
            `
            translate(
                calc(-50% + ${currentX * -5}px),
                calc(-50% + ${currentY * -5}px)
            )
            `;



        /* BACKGROUND MOVEMENT */

        orbOne.style.marginLeft =
            `${currentX * 18}px`;

        orbOne.style.marginTop =
            `${currentY * 18}px`;


        orbTwo.style.marginLeft =
            `${currentX * -14}px`;

        orbTwo.style.marginTop =
            `${currentY * -14}px`;


        orbThree.style.marginLeft =
            `${currentX * 8}px`;

        orbThree.style.marginTop =
            `${currentY * 8}px`;


        orbFour.style.marginLeft =
            `${currentX * -6}px`;

        orbFour.style.marginTop =
            `${currentY * -6}px`;


        requestAnimationFrame(
            animateParallax
        );

    }


    animateParallax();

}