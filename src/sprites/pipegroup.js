import Phaser from 'phaser';
import Pipe from './pipe.js';

export default class PipeGroup extends Phaser.Group{

    constructor(game){
      super(game);
      this.x = this.game.width;
    }

    generatePipes(){
        let pipeH1 = this.game.rnd.integerInRange(50,this.game.height-170);
        let topPipe = new Pipe(this.game,0,0);
        topPipe.width = 50;
        topPipe.height = pipeH1;
        this.game.add.existing(topPipe);
        this.add(topPipe);

        let pipeH2 = this.game.height - pipeH1 - 120;
        let bottomPipe = new Pipe(this.game,0,this.game.height-pipeH2);
        bottomPipe.width = 50;
        bottomPipe.height = pipeH2;
        this.game.add.existing(bottomPipe);
        this.add(bottomPipe);
    }
}
