const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const madedLogo = document.querySelector(".madedLogo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

const t1 = new TimelineMax();
t1.fromTo(hero,1, {height: "0%"}, {height: "80%", ease: Power2.easeInOut});
// box lines style
function scrollAppear(){
  var introText = document.querySelector('.intro_text');
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  if(introPosition < screenPosition){
    introText.classList.add('intro_appear');
  }
}

window.addEventListener('scroll', scrollAppear);
