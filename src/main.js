import Phaser from 'phaser';
import BootState from './states/boot.js';
import GameState from './states/game.js';
import MenuState from './states/menu.js';

export default class ScreamyFish extends Phaser.Game {

  constructor(){
    super(800, 600, Phaser.AUTO, 'content', null);
    this.state.add('boot', BootState, false);
    this.state.add('game', GameState, false);
    this.state.add('menu', MenuState, false);
    this.state.start('boot');
  }


}
