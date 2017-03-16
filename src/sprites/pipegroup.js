import Phaser from 'phaser';
import Pipe from './pipe.js';

export default class PipeGroup extends Phaser.Group{

    constructor(game){
      super(game);
      this.x = this.game.width;
    }

    generatePipes(){
        let pipeH1 = this.game.rnd.integerInRange(0,this.game.height-100);
        let topPipe = new Pipe(this.game,0,0);
        topPipe.height = pipeH1;
        this.game.add.existing(topPipe);
        this.add(topPipe);

        let pipeH2 = this.game.height - pipeH1 - 100;
        let bottomPipe = new Pipe(this.game,0,this.game.height-pipeH2);
        bottomPipe.height = pipeH2;
        this.game.add.existing(bottomPipe);
        this.add(bottomPipe);
    }
}
