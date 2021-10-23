const homeName = document.querySelector('.homeName');
const homeIntro = document.querySelector('.homeIntro');

const aboutIntro = document.querySelector('.aboutIntro');
const aboutDetail1 = document.querySelector('.aboutDetail1');
const aboutDetail2 = document.querySelector('.aboutDetail2');

const prjDetails1 = document.querySelector('.prjDetails1');
const prjDetails2 = document.querySelector('.prjDetails2');
const prjDetails3 = document.querySelector('.prjDetails3');

const prjTitle1 = document.querySelector('.prjTitle1');
const prjTitle2 = document.querySelector('.prjTitle2');
const prjTitle3 = document.querySelector('.prjTitle3');

const prjLink1 = document.querySelector('.prjLink1');
const prjLink2 = document.querySelector('.prjLink2');
const prjLink3 = document.querySelector('.prjLink3');

const socialLink1 = document.querySelector('.socialLink1');
const socialLink2 = document.querySelector('.socialLink2');
const socialLink3 = document.querySelector('.socialLink3');
const socialLink4 = document.querySelector('.socialLink4');




homeName.innerHTML = `<span>I'M</span> Jon Doe`;
homeIntro.innerHTML = ``;

aboutIntro.innerHTML = ``;


aboutDetail1.innerHTML = ``;
aboutDetail2.innerHTML = ``;


prjDetails1.innerHTML = ``;
prjDetails2.innerHTML = ``;
prjDetails3.innerHTML = ``;

prjTitle1.innerHTML = ``;
prjTitle2.innerHTML = ``;
prjTitle3.innerHTML = ``;

prjLink1.href = ``;
prjLink2.href = ``;
prjLink3.href = ``;

socialLink1.href = ``;
socialLink2.href = ``;
socialLink3.href = ``;
socialLink4.href = ``;

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});