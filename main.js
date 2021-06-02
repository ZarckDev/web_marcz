const ledButton = document.getElementById('scroll-down-btn');
const firstSection = document.getElementById('presentation');
/* more services */
const moreList = document.querySelectorAll('.more-services__selectors li');
const modeContent = document.querySelector('.more-services__content');
const moreHeading = document.querySelector('.more-services__heading');
const moreDesc = document.querySelector('.more-services__details');
const moreImg = document.querySelector('.more-services__image img');
const moreBtn = document.querySelector('.more-services__btn');
/* nav */
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const menuLink = document.querySelectorAll('.menu_link');
const mainNav = document.querySelector('nav');
/* myself */
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');



ledButton.addEventListener('click', () => {
  firstSection.scrollIntoView({
    behavior: "smooth"
  })
})


window.addEventListener('scroll', fixNav) //call function fixNav on scroll

function fixNav () {
    if(window.scrollY > (mainNav.offsetHeight + 300)){
      mainNav.classList.add('active')
    } else {
      mainNav.classList.remove('active')
    }
}


/* More services */
const more_description = [{
	head: 'Création Web',
	text: 'Pour votre entreprise, pour mettre en avant un produit, ou encore pour créer une application basée sur le web. Un site réalisé en respectant les règles d\'écoconception primordiales à la limitation des données dans l\'internet.',
  img: 'assets/more/more_website.svg',
  link: ''
},{
	head: 'Impression 3D',
	text: 'Grâce à des outils de CAO et à une imprimante 3D, il est possible de compléter le prototypage d\'un projet dans le but de pouvoir y intégrer directement la ou les cartes électronique. Matières PLA, PETG, TPU.',
  img: 'assets/more/more_3d_modeling.svg',
  link: ''
},{
	head: 'Application de bureau',
	text: 'Multi-platformes (MacOS, Windows, Linux) grâce à Electron et aux languages du web. Permet d\'avoir une application sans installation, avec accès aux fichiers locaux et aux périphériques de l\'ordinateur.',
  img: 'assets/more/more_desktopapp.svg',
  link: ''
}];

// initial content
updateContent(0);

moreList.forEach((el, idx) => {
  el.addEventListener('click', () => {
    removeActiveClasses(); // remove all active classes first

    el.classList.add('active-service');

    setTimeout(function() {
      updateContent(idx);
      
    },300)
  })
})

/* nav */
openBtn.addEventListener('click', () => {
  nav.forEach((nav_el) => {
      nav_el.classList.add('visible');
  })
})

closeBtn.addEventListener('click', () => {
  nav.forEach((nav_el) => {
      nav_el.classList.remove('visible');
  })
})

menuLink.forEach((item) => {
  item.addEventListener('click', () => {
    nav.forEach((nav_el) => {
      nav_el.classList.remove('visible');
    })
  })
})


/* myself */
questions.forEach((question, idx) => {
  question.addEventListener('click', () => {
    question.classList.toggle('show-question');

    answers[idx].classList.toggle('show-answer');
  })
})



/* Functions */
function removeActiveClasses () {
  modeContent.classList.remove("show");
  moreList.forEach((el) => {
      el.classList.remove('active-service');
      
  })
}

function updateContent(idx) {
  const content = more_description[idx];
  moreHeading.innerHTML = content.head;
  moreDesc.innerHTML = content.text;
  moreImg.setAttribute('src', content.img);
  if(content.link.length > 0){
    moreBtn.style.display = 'initial'
    moreBtn.setAttribute('href', content.link);
  } else {
    //don't show button
    moreBtn.style.display = 'none'
  }
  modeContent.classList.add("show");
}

