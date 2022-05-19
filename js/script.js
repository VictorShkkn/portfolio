function funonload() {


let mainScreenTitle = document.querySelector('.section__main-screen__title-animation-before');
mainScreenTitle.classList.add('section__main-screen__title-animation-after');

let mainScreenDescription = document.querySelector('.section__description-animation-before');
mainScreenDescription.classList.add('section__description-animation-after');

let mainScreenContact = document.querySelector('.section_main__contact-animation-before')
mainScreenContact.classList.add('section__description-animation-after');

let mainScreenBtn = document.querySelector('.section_main__button-animation-before')
mainScreenBtn.classList.add('section_main__button-animation-after');

console.log(123);

}
window.onload = funonload;