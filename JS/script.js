const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const madedLogo = document.querySelector(".madedLogo");
const topText = document.querySelector(".top-text");
const headline = document.querySelector(".headline");

const t1 = new TimelineMax();
t1.fromTo(hero, 1.5, { height: "0%" }, { height: "80%", ease: Power2.easeIn })
  .fromTo(hero, 1.5, { width: "100%" }, { width: "80%", ease: Power2.easeOut })
  .fromTo(
    slider,
    1.5,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.5"
  )
  .fromTo(madedLogo, 0.7, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=0.7")
  .fromTo(topText, 0.7, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=0.7")
  .fromTo(headline, 0.7, { opacity: 0, x: 20 }, { opacity: 1, x: 0 }, "-=0.7");
// box lines style
function scrollAppear() {
  var introText = document.querySelector(".intro_text");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if (introPosition < screenPosition) {
    introText.classList.add("intro_appear");
  }
}

window.addEventListener("scroll", scrollAppear);
