import Phaser from 'phaser';
import Fish from '../sprites/fish.js';
import PipeGroup from '../sprites/pipegroup.js';
import ScreamyFish from '../main.js';
import BubbleGroup from '../sprites/bubblegroup.js';

export default class GameState extends Phaser.State{

  create(){

    //fish
    this.fish = new Fish(this.game,this.game.world.centerX,this.game.world.centerY);
    this.game.add.existing(this.fish);

    //pipes
    this.pipeGroup = new PipeGroup(this.game);
    this.pipeGenerator = this.game.time.events.loop(2000,this.generatePipe,this);
    this.pipeGenerator.timer.start();
    this.generatePipe();

    //clouds
    this.bubbleGroup = new BubbleGroup(this.game);
    this.bubbleGenerator = this.time.events.loop(3000,this.generateBubble,this);
    this.bubbleGenerator.timer.start();
    this.generateBubble();

    //score//high score
    this.score = this.game.add.text(20,20,'Score: '+ScreamyFish.Score,{
      fontSize:'16px',
      fill:'white'
    });

    let w = this.input.keyboard.addKey(Phaser.Keyboard.W);
    w.onDown.add(this.fish.scream, this.fish);
  }

  update() {
    this.game.physics.arcade.collide(this.fish, this.pipeGroup, this.loss,null,this);
    if(this.fish.y > this.game.height){
      this.loss();
    }else if(this.fish.y < 0){
      this.fish.y = 0;
    }
    this.score.text = 'Score: '+parseInt(ScreamyFish.score);
  }

  generatePipe(){
    this.pipeGroup.generatePipes();
  }

  generateBubble(){
      this.bubbleGroup.generateBubbles();
  }

  loss(){
    if(ScreamyFish.score > ScreamyFish.highScore){
      ScreamyFish.highScore = ScreamyFish.score;
      localStorage.sfHighScore = ScreamyFish.score;
    }
    ScreamyFish.score = 0;
    this.game.state.start('menu');
  }

}
