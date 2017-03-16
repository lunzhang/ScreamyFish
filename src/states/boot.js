import Phaser from 'phaser';

export default class BootState extends Phaser.State{

  preload(){
    this.game.state.start('menu', true, false);
  }

}
