import Phaser from 'phaser';

export default class Pipe extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
      super(game,x,y,'__missing',frame);
      this.game.physics.arcade.enable(this);
      this.body.allowGravity = false;
      this.checkWorldBounds = true;
      this.outOfBoundsKill = true;
      this.body.velocity.x = -200;
  }

}
