/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
import Appear from './Appear.js';
import Map from './Map.js';
import Punch from './Punch.js';

export default function start() {
  const newMap = new Map(16);
  const newAppear = new Appear(16);
  newMap.add();
  setInterval(() => newAppear.appear(), 1000);
  const newPunch = new Punch(16);
  newPunch.hummer();
}
start();