import Phaser from 'phaser';

export default class Fish extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'__missing',frame);
    this.anchor.setTo(0.5, 0.5);
    this.animations.add('scream', [0, 1, 2, 3, 4], 10, true);
    this.game.physics.arcade.enableBody(this);
  }

  update() {
    if (this.angle < 90) {
      this.angle += 2.5;
    }
  }

  scream(){
    this.body.velocity.y = -200;
    this.game.add.tween(this).to({ angle: 0 }, 100).start();
  }

}
