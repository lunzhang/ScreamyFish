import Phaser from 'phaser';
import Fish from '../sprites/fish.js';
import PipeGroup from '../sprites/pipegroup.js';

export default class GameState extends Phaser.State{

  create(){
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 500;

    //init sprites
    this.fish = new Fish(this.game,this.game.world.centerX,this.game.world.centerY);
    this.game.add.existing(this.fish);
    this.pipeGroup = new PipeGroup(this.game);
    this.pipeGenerator = this.game.time.events.loop(1500,this.generatePipe,this);
    this.pipeGenerator.timer.start();

    var w = this.input.keyboard.addKey(Phaser.Keyboard.W);
    w.onDown.add(this.fish.scream, this.fish);
  }

  update() {
      this.game.physics.arcade.collide(this.fish, this.pipeGroup, this.loss,null,this);
      if(this.fish.y > this.game.height){
        this.game.state.start('menu');
      }else if(this.fish.y < 0){
          this.fish.body.velocity.y = 200;
      }
  }

  generatePipe(){
      this.pipeGroup.generatePipes();
  }

  loss(){
    this.game.state.start('menu');
  }


}
