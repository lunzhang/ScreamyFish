import Phaser from 'phaser';

export default class Fish extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'fish',frame);
    this.anchor.setTo(0.5);
    this.scale.setTo(0.3,0.3);
    this.game.physics.arcade.enableBody(this);
  }

  scream(amount){
    this.body.velocity.y = -amount || -200;
  }

}
