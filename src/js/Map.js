/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
export default class Map {
  constructor(square) {
    this.square = square;
  }

  add() {
    const board = document.createElement('div');
    board.classList.add('board');
    document.body.appendChild(board);
    const statusDead = document.createElement('div');
    statusDead.classList.add('status');
    statusDead.textContent = 'Гоблинов убито : ';
    document.body.appendChild(statusDead);
    const dead = document.createElement('span');
    dead.id = 'dead';
    dead.textContent = '0';
    statusDead.appendChild(dead);
    const statusLost = document.createElement('div');
    statusLost.classList.add('status');
    statusLost.textContent = 'Гоблинов сбежало : ';
    document.body.appendChild(statusLost);
    const lost = document.createElement('span');
    lost.id = 'lost';
    lost.textContent = '0';
    statusLost.appendChild(lost);
    for (let i = 0; i < this.square; i++) {
      const newMap = document.createElement('div');
      newMap.classList.add('map');
      board.appendChild(newMap);
      const newImgDiv = document.createElement('div');
      newImgDiv.classList.add('img');
      newMap.appendChild(newImgDiv);
      const imgDiv = new Image();
      imgDiv.src = 'https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true';
      imgDiv.classList.add('goblin');
      // imgDiv.id = `goblin${i}`;
      newImgDiv.appendChild(imgDiv);
    }
  }
}
