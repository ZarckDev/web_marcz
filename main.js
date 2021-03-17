const ledButton = document.getElementById('scroll-down-btn');
const firstSection = document.querySelector('.features');

ledButton.addEventListener('click', () => {
    firstSection.scrollIntoView({
        behavior: "smooth"
      });;
})