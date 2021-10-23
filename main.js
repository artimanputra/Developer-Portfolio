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




homeName.innerHTML = `<span>I'M</span> ${detail.mainname}`;
homeIntro.innerHTML = `${detail.homePageIntro}`;

aboutIntro.innerHTML = `${detail.aboutIntro}`;


aboutDetail1.innerHTML = `${detail.aboutDetailPara1}`;
aboutDetail2.innerHTML = `${detail.aboutDetailPara2}`;


prjDetails1.innerHTML = `${detail.prjDetails1}`;
prjDetails2.innerHTML = `${detail.prjDetails2}`;
prjDetails3.innerHTML = `${detail.prjDetails3}`;

prjTitle1.innerHTML = `${detail.prjTitle1}`;
prjTitle2.innerHTML = `${detail.prjTitle2}`;
prjTitle3.innerHTML = `${detail.prjTitle3}`;

prjLink1.href = `${detail.prjLink1}`;
prjLink2.href = `${detail.prjLink2}`;
prjLink3.href = `${detail.prjLink3}`;

socialLink1.href = `${detail.socialLinktwitter}`;
socialLink2.href = `${detail.socialLinkinsta}`;
socialLink3.href = `${detail.socialLinklinkedin}`;
socialLink4.href = `${detail.socialLinkgithub}`;

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});