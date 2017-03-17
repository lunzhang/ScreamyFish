import Phaser from 'phaser';

export default class Fish extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'fish',frame);
    this.scale.setTo(0.3,0.3);
    this.game.physics.arcade.enableBody(this);
  }

  scream(amount){
    this.body.velocity.y = -amount || -300;
    this.game.add.tween(this).to({ angle: 0 }, 100).start();
  }

}
