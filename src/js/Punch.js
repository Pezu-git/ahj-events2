/* eslint-disable linebreak-style */
/* eslint-disable no-loop-func */
/* eslint-disable func-names */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
export default class Punch {
  constructor(square) {
    this.square = square;
  }

  hummer() {
    const kill = document.getElementById('dead');
    const miss = document.getElementById('lost');
    const getGoblin = document.querySelectorAll('.img');
    for (let i = 0; i < this.square; i++) {
      getGoblin[i].addEventListener('click', () => {
        if (getGoblin[i].firstChild.className.includes('active')) {
          kill.textContent = Number(kill.textContent) + 1;
          if (kill.textContent === '10') {
            alert('Игра окончена! Вы убийца гоблинов!');
            location.reload();
          }
        } else {
          miss.textContent = Number(miss.textContent) + 1;
          if (miss.textContent === '5') {
            alert('Игра окончена! Гоблинам повезло с вашей реакцией');
            location.reload();
          }
        }
      });
    }
  }
}
