import Phaser from 'phaser';
import BootState from './states/boot.js';
import GameState from './states/game.js';
import MenuState from './states/menu.js';

export default class ScreamyFish extends Phaser.Game {

  constructor(width,height){
    super(width, height, Phaser.AUTO, 'world');

    ScreamyFish.highScore = localStorage.sfHighScore !== undefined ? localStorage.sfHighScore : 0;
    ScreamyFish.score = 0;

    this.state.add('boot', BootState, false);
    this.state.add('game', GameState, false);
    this.state.add('menu', MenuState, false);
    this.state.start('boot');
  }


}
