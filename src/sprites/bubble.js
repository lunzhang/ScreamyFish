import Phaser from 'phaser';

export default class Bubble extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
    super(game,x,y,'bubble',frame);
    this.width = 30;
    this.height = 30;
    this.game.physics.arcade.enable(this);
    this.body.allowGravity = false;
    let speed = this.game.rnd.integerInRange(50,150);
    this.body.velocity.x = -speed;
    this.checkWorldBounds = true;
    this.events.onOutOfBounds.add(this.onOutOfBounds,this);
  }

  onOutOfBounds(){
    this.destroy();
  }

}
