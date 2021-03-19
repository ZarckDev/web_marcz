const ledButton = document.getElementById('scroll-down-btn');
const firstSection = document.querySelector('.features');
const moreList = document.querySelectorAll('.more-services__selectors li');
const modeContent = document.querySelector('.more-services__content');
const moreHeading = document.querySelector('.more-services__heading');
const moreDesc = document.querySelector('.more-services__details');
const moreImg = document.querySelector('.more-services__image img');


ledButton.addEventListener('click', () => {
  firstSection.scrollIntoView({
    behavior: "smooth"
  });;
})




/* More services */
const more_description = [{
	head: 'Ecoconception Web',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem adipisci fuga amet nostrum? Fugiat quaerat ut maiores quasi quia eius consequuntur sed dolorem, aliquam fugit sit libero molestias quae vitae!',
  img: 'assets/more/more_website.svg'
},{
	head: 'Impression 3D',
	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem adipisci fuga amet nostrum? Fugiat quaerat ut maiores quasi quia eius consequuntur sed dolorem, aliquam fugit sit libero molestias quae vitae!',
  img: 'assets/more/more_3d_modeling.svg'
}];

moreList.forEach((el, idx) => {
  el.addEventListener('click', () => {
    modeContent.classList.remove('fadeout');

    removeActiveClasses(); // remove all active classes first

    el.classList.add('active-service');

    const content = more_description[idx];
    moreHeading.innerHTML = content.head;
    moreDesc.innerHTML = content.text;
    moreImg.setAttribute('src', content.img);
    modeContent.classList.add('fadeout');
  })
})

function removeActiveClasses () {
  
  moreList.forEach((el) => {
      el.classList.remove('active-service');
      
  })
}

