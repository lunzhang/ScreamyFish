import Phaser from 'phaser';
import Bubble from './bubble.js';

export default class BubbleGroup extends Phaser.Group{

    constructor(game){
      super(game);
      this.x = this.game.width;
    }

    generateBubbles(){
        let height = this.game.rnd.integerInRange(0,this.game.height-50);
        let bubble = new Bubble(this.game,0,height);
        this.add(bubble);
    }

}
