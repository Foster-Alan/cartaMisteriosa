/* eslint-disable no-param-reassign */
const btn = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paranText = document.querySelector('#carta-gerada');
const textCount = document.querySelector('#carta-contador');

const classGroup = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

const addClass = (element) => {
  const randomClasses = classGroup
    // eslint-disable-next-line no-shadow
    .map((classGroup) => classGroup[Math.floor(Math.random()
    * classGroup.length)]);
  element.className = randomClasses.join(' ');
};

const create = () => {
  let counter = 0;
  const split = inputText.value.split(' ');
  for (let i = 0; i < split.length; i += 1) {
    const spanCreate = document.createElement('span');
    spanCreate.innerText = `${split[i]}`;
    spanCreate.id = [i];
    addClass(spanCreate);
    paranText.appendChild(spanCreate);
    counter += 1;
  }
  textCount.innerText = counter;
};

const insertSpan = () => {
  if (paranText.childNodes) {
    paranText.innerHTML = '';
    create();
  } else {
    create();
  }
};

const verifyText = () => {
  if (inputText.value === '' || inputText.value === ' ') {
    paranText.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    insertSpan();
  }
};

const changeClass = (event) => {
  if (event.target.tagName === 'SPAN') {
    addClass(event.target);
  }
};

document.addEventListener('click', changeClass);
btn.addEventListener('click', verifyText);
