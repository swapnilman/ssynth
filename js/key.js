class Key {
  constructor(index, type, container) {
    this.keyIndex = index;
    this.keyDown = false;
    this.el = document.createElement('div');
    this.el.className = 'key';
    this.el.classList.add(type);
    container.appendChild(this.el);
    this.osc1 = new Oscillator(this.keyIndex);
    this.osc2 = new Oscillator(this.keyIndex);
  }

  play(synth) {
    if(!this.keyDown){
      if(synth.osc1Control.active) this.osc1.play({'shift': synth.shift, 'control': synth.osc1Control});
      if(synth.osc2Control.active) this.osc2.play({'shift': synth.shift, 'control': synth.osc2Control});
      this.keyDown = true;
      this.el.classList.add('pressed')
    }
  }

  stop() {
    this.osc1.stop();
    this.osc2.stop();
    this.keyDown = false;
    this.el.classList.remove('pressed')
  }
}
