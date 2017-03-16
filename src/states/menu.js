import Phaser from 'phaser';

export default class MenuState extends Phaser.State{

  create(){
    let text = this.game.add.text(this.game.world.centerX, this.game.world.centerY,
      "Start Game",{
      fill:'#ffffff',
      align: "center"
    });
    text.inputEnabled = true;
    text.anchor.set(0.5);

    text.events.onInputDown.add((item)=>{
        this.game.state.start('game');
    });

  }

}
