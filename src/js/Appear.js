/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export default class Appear {
  constructor(maxMap) {
    this.maxMap = maxMap;
    this.numArr = [];
  }

  appear() {
    const min = Math.ceil(0);
    const max = Math.floor(this.maxMap);
    const number = Math.floor(Math.random() * (max - min));
    const goblin = document.querySelectorAll('.goblin');
    const active = document.querySelector('.active');
    while (this.numArr[0] === number && number > min) {
      goblin[number - 1].classList.add('active');
      this.numArr[0] = number - 1;
    }
    while (this.numArr[0] === number && number < max - 1) {
      goblin[number + 1].classList.add('active');
      this.numArr[0] = number + 1;
    }
    goblin[number].classList.add('active');
    this.numArr[0] = number;
    if (active) {
      active.classList.remove('active');
    }
  }
}
