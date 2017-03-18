import Phaser from 'phaser';
import Fish from '../sprites/fish.js';
import BubbleGroup from '../sprites/bubblegroup.js';

export default class MenuState extends Phaser.State{

  create(){
    //add detail
    let detail = this.game.add.text(this.game.world.centerX, 100,
      "Make sound to move the fish",{
      fill:'#ffffff',
      align: "center"
    });
    detail.anchor.set(0.5);

    //add start
    let start = this.game.add.text(this.game.world.centerX, 150,
      "Start Game",{
      fill:'#4CAF50',
      align: "center"
    });
    start.inputEnabled = true;
    start.anchor.set(0.5);
    start.events.onInputDown.add((item)=>{
        this.game.state.start('game');
    });

    //add warning
    let warning = this.game.add.text(this.game.world.centerX, this.game.world.centerY+150,
      "Please enable microphone to play the game",{
      fontSize:'16px',
      fill:'#ffffff',
      align: "center"
    });
    warning.anchor.set(0.5);

    //start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 300;

    //create fish
    this.fish = new Fish(this.game,this.game.world.centerX,this.game.world.centerY);
    this.game.add.existing(this.fish);

    this.bubbleGroup = new BubbleGroup(this.game);
    this.bubbleGenerator = this.time.events.loop(2000,this.generateBubble,this);
    this.bubbleGenerator.timer.start();
    this.generateBubble();

  }

  generateBubble(){
      this.bubbleGroup.generateBubbles();
  }

  update(){
      if(this.fish.y > this.game.world.centerY){
        this.fish.scream(150);
      }
  }

}
