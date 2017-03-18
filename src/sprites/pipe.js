import Phaser from 'phaser';
import ScreamyFish from '../main.js';
export default class Pipe extends Phaser.Sprite{

  constructor(game,x,y,key,frame){
      super(game,x,y,'pipe',frame);
      this.game.physics.arcade.enableBody(this);
      this.body.allowGravity = false;
      this.checkWorldBounds = true;
      this.outOfBoundsKill = true;
      this.body.velocity.x = -200;
      this.events.onOutOfBounds.add(this.onOutOfBounds,this);
  }

  onOutOfBounds(){
      ScreamyFish.score += .5;
      this.destroy();
  }

}
