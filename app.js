const main            = document.querySelector('main');
const iconOpen        = document.querySelector('.icon-open');
const iconClose       = document.querySelector('.icon-close');
const navBarContainer = document.querySelector('.nav-bar-container');
const features        = document.querySelector('.features');
const company         = document.querySelector('.company');
const arrowDown       = document.querySelectorAll('.arrow-down');
const arrowUp         = document.querySelectorAll('.arrow-up');
const dropdownMenu  = document.querySelectorAll('.dropdown-menu');



if (document.documentElement.clientWidth > 1024) {
    iconOpen.classList.add('hidden');
    iconClose.classList.add('hidden');
    navBarContainer.classList.remove('hidden');
} else {
    iconOpen.classList.remove('hidden');
    iconClose.classList.remove('hidden');
    navBarContainer.classList.add('hidden');
}



iconOpen.addEventListener('click', () => {
    navBarContainer.classList.remove('hidden');
    main.classList.add('hidden');
});

iconClose.addEventListener('click', () => {
    navBarContainer.classList.add('hidden');
    main.classList.remove('hidden');
});

features.addEventListener('click', () => {
    dropdownMenu[0].classList.toggle('hidden');
    arrowDown[0].classList.toggle('hidden');
    arrowUp[0].classList.toggle('hidden');
});

company.addEventListener('click', () => {
    dropdownMenu[1].classList.toggle('hidden');
    arrowDown[1].classList.toggle('hidden');
    arrowUp[1].classList.toggle('hidden');
});