class Shift {
  constructor(container) {
    this.shift = 3;
    this.upEl = document.createElement('button');
    this.upEl.className = 'btn up'
    this.downEl = document.createElement('button');
    this.downEl.className = 'btn down'
    container.appendChild(this.upEl);
    container.appendChild(this.downEl);
  }

  changeShift(btn) {
    if(btn === 'up' && this.shift < 6) this.shift++;
    if(btn === 'down' && this.shift > 1) this.shift--;
  }

  getShift() {
    return this.shift;
  }
}


// class LowFreqOsc {
//   constructor(container) {
//     this.osc = ac.createOscillator();
//     this.gain = ac.createGain();
//     this.osc.connect(this.gain);
//     this.osc.start();
//     this.waveType = 0;
//     this.freq = 0;
//     this.amount = 0;
//     this.osc1active = false;
//     this.osc2active = false;
//     this.waveTypeEl = document.createElement('div');
//     this.waveTypeEl.className = 'dial';
//     this.waveTypeEl.style.background = 'url("images/dial.png") no-repeat center / cover';
//     this.freqEl = document.createElement('div');
//     this.freqEl.className = 'dial';
//     this.freqEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.activeEl = document.createElement('div');
//     this.osc1activeEl = document.createElement('div');
//     this.osc1activeEl.className = 'checkbox';
//     this.osc2activeEl = document.createElement('div');
//     this.osc2activeEl.className = 'checkbox';
//     this.activeEl.appendChild(this.osc1activeEl);
//     this.activeEl.appendChild(this.osc2activeEl)
//     this.amountEl = document.createElement('div');
//     this.amountEl.className = 'dial';
//     this.amountEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.amountEl.style.margin = '2px 64px'
//     container.appendChild(this.waveTypeEl);
//     container.appendChild(this.freqEl);
//     container.appendChild(this.activeEl);
//     container.appendChild(this.amountEl);
//   }

//   init(waveType, freq, amount, osc1active, osc2active) {
//     this.waveType = waveType;
//     this.freq = freq;
//     this.amount = amount;
//     this.osc1active = osc1active;
//     this.osc2active = osc2active;
//     this.osc.frequency.value = this.freq;
//     this.osc.type = this.waveType;
//     this.gain.gain.value = this.amount;

//   }

//   changeWaveType(move) {
//     if(move === 'next') this.waveType = (this.waveType + 1) % 4;
//     if(move === 'prev') this.waveType = (this.waveType - 1) % 4;
//     if(this.waveType < 0) this.waveType +=4;
//     this.osc.type = this.waveType;
//     let angle = this.waveType * 90;
//     this.waveTypeEl.style.transform = 'rotate(' + angle + 'deg)'
//   }

//   changeFreq(move) {
//     if(move === 'next' && this.freq < 127) this.freq++;
//     if(move === 'prev' && this.freq > 0) this.freq--;
//     // this.osc.frequency.value = this.freq;
//     let angle = -this.freq * 2;
//     this.freqEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   changeAmount(move) {
//     if(move === 'next' && this.amount < 127) this.amount++;
//     if(move === 'prev' && this.amount > 0) this.amount--;
//     // this.gain.gain.value = this.amount;
//     let angle = -this.amount * 2;
//     this.amountEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   toggleOsc1Active() {
//     this.osc1active = !this.active
//     this.osc1activeEl.classList.toggle('chk')
//   }

//   toggleOsc2Active() {
//     this.osc2active = !this.active
//     this.osc2activeEl.classList.toggle('chk')
//   }
// }


class OscControl {
  constructor(waveType, detune, container) {
    this.container = container
    this.waveType = waveType;
    this.detune = detune;
    this.active = true;
    this.waveTypeEl = document.createElement('div');
    this.waveTypeEl.className = 'dial';
    this.waveTypeEl.style.background = 'url("images/dial.png") no-repeat center / cover';
    this.detuneEl = document.createElement('div');
    this.detuneEl.className = 'dial';
    this.detuneEl.style.background = 'url("images/diald.png") no-repeat center / cover';
    this.activeEl = document.createElement('div');
    this.activeEl.className = 'checkbox chk';
    container.appendChild(this.waveTypeEl);
    container.appendChild(this.activeEl);
    container.appendChild(this.detuneEl);
  }

  init(waveType, detune) {
    this.waveType = waveType;
    this.detune = detune;
  }

  changeWaveType(move) {
    if(move === 'next') this.waveType = (this.waveType + 1) % 4;
    if(move === 'prev') this.waveType = (this.waveType - 1) % 4;
    if(this.waveType < 0) this.waveType +=4;
    let angle = this.waveType * 90;
    this.waveTypeEl.style.transform = 'rotate(' + angle + 'deg)'
  }

  getWaveType() {
    switch(this.waveType){
      case 0:
        return 'sine';
        break;
      case 1:
        return 'square';
        break;
      case 2:
        return 'sawtooth';
        break;
      case 3:
        return 'triangle';
        break;
      default:
        return undefined;
    }
  }

  changeDetune(move) {
    if(move === 'next' && this.detune < 127) this.detune++;
    if(move === 'prev' && this.detune > -127) this.detune--;
    let angle = this.detune * 1.3;
    this.detuneEl.style.transform = 'rotate(' + angle + 'deg)'
  }

  getDetune() {
    return this.detune
  }

  toggleActive() {
    this.active = !this.active
    this.activeEl.classList.toggle('chk')
  }
}


// class Filter {
//   constructor(container) {
//     this.filterType = 'hi';
//     this.frequency = 0;
//     this.resonance = 0;
//     this.attack = 0;
//     this.decay = 0;
//     this.sustain = 0;
//     this.release = 0;
//     this.freqEl = document.createElement('div');
//     this.freqEl.className = 'dial';
//     this.freqEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.freqEl.style.margin = '2px 50px 2px 64px';
//     this.filterTypeEl = document.createElement('div');
//     this.filterTypeEl.style.display = 'inline-block';
//     this.filterTypeEl.style.width = '12px';
//     this.filterTypeEl.style.margin = '2px 8px';
//     this.hiPassEl = document.createElement('div');
//     this.hiPassEl.className = 'checkbox chk';
//     this.hiPassEl.style.margin = '16px 0px';
//     this.loPassEl = document.createElement('div');
//     this.loPassEl.className = 'checkbox';
//     this.loPassEl.style.margin = '16px 0px';
//     this.filterTypeEl.appendChild(this.hiPassEl);
//     this.filterTypeEl.appendChild(this.loPassEl);
//     this.resonanceEl = document.createElement('div');
//     this.resonanceEl.className = 'dial';
//     this.resonanceEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.resonanceEl.style.margin = '2px 64px 2px 50px';
//     this.envelopEl = document.createElement('div');
//     this.envelopEl.style.display = 'inline-block';
//     this.attackEl = document.createElement('div');
//     this.attackEl.className = 'dial';
//     this.attackEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.decayEl = document.createElement('div');
//     this.decayEl.className = 'dial';
//     this.decayEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.sustainEl = document.createElement('div');
//     this.sustainEl.className = 'dial';
//     this.sustainEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.releaseEl = document.createElement('div');
//     this.releaseEl.className = 'dial';
//     this.releaseEl.style.background = 'url("images/dialg.png") no-repeat center / cover';
//     this.envelopEl.appendChild(this.attackEl);
//     this.envelopEl.appendChild(this.decayEl);
//     this.envelopEl.appendChild(this.sustainEl);
//     this.envelopEl.appendChild(this.releaseEl);
//     container.appendChild(this.freqEl);
//     container.appendChild(this.filterTypeEl);
//     container.appendChild(this.resonanceEl);
//     this.spaceEl = document.createElement('div')
//     this.spaceEl.style.height = '18px'
//     container.appendChild(this.spaceEl)
//     container.appendChild(this.envelopEl);
//   }

//   toggleFilterType() {
//     if(this.filterType === 'hi') this.filterType = 'lo';
//     if(this.filterType === 'lo') this.filterType = 'hi'
//     this.hiPassEl.classList.toggle('chk')
//     this.loPassEl.classList.toggle('chk')
//   }

//   changeFrequency(move) {
//     if(move === 'next' && this.frequency < 127) this.frequency++;
//     if(move === 'prev' && this.frequency > 0) this.frequency--;
//     let angle = -this.frequency * 2;
//     this.freqEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   changeResonance(move) {
//     if(move === 'next' && this.resonance < 127) this.resonance++;
//     if(move === 'prev' && this.resonance > 0) this.resonance--;
//     let angle = -this.resonance * 2;
//     this.resonanceEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   changeAttack(move) {
//     if(move === 'next' && this.attack < 127) this.attack++;
//     if(move === 'prev' && this.attack > 0) this.attack--;
//     let angle = -this.attack * 2;
//     this.attackEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   changeDecay(move) {
//     if(move === 'next' && this.decay < 127) this.decay++;
//     if(move === 'prev' && this.decay > 0) this.decay--;
//     let angle = -this.decay * 2;
//     this.decayEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   changeSustain(move) {
//     if(move === 'next' && this.sustain < 127) this.sustain++;
//     if(move === 'prev' && this.sustain > 0) this.sustain--;
//     let angle = -this.sustain * 2;
//     this.sustainEl.style.transform = 'rotate(' + angle + 'deg)';
//   }

//   changeRelease(move) {
//     if(move === 'next' && this.release < 127) this.release++;
//     if(move === 'prev' && this.release > 0) this.release--;
//     let angle = -this.release * 2;
//     this.releaseEl.style.transform = 'rotate(' + angle + 'deg)';
//   }
// }
