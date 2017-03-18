import './style.scss';
import ScreamyFish from './src/main.js';

export class App{

  constructor(){
    navigator.mediaDevices.getUserMedia({audio:true}).then((stream)=>{
      this.audioCtx = new (AudioContext || webkitAudioContext)();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 32;
      let source = this.audioCtx.createMediaStreamSource(stream);
      source.connect(this.analyser);
      this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
      this.analyser.getByteTimeDomainData(this.frequencyData);
      this.animate();
    }).catch((err)=>{
      console.log(err);
    });

    this.screamyFish = new ScreamyFish(600,400);

  }

  animate(){

    requestAnimationFrame(()=>{
      this.animate();
    });

    this.analyser.getByteFrequencyData(this.frequencyData);
    let state = this.screamyFish.state.getCurrentState();
    if(state.key === 'game'){
        let sound = 0;
        for(let i = 0;i<this.frequencyData.length;i++){
          sound+=this.frequencyData[i];
        }
        sound = sound / this.frequencyData.length;
        if(sound > 100){
          state.fish.scream(sound);
        }
      }
  }

}


const app = new App();
