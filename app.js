import './style.scss';
import ScreamyFish from './src/main.js';

export class App{

  constructor(){
    this.audioCtx = new (AudioContext || webkitAudioContext)();
    this.analyser = this.audioCtx.createAnalyser();
    navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
        let source = this.audioCtx.createMediaStreamSource(stream);
        source.connect(this.analyser);
        this.animate();
    }).catch((err)=>{
        //alert(err.name);
    });
    this.screamyFish = new ScreamyFish();
  }

  animate(){
    requestAnimationFrame(this.animte);
  }

}


const app = new App();
