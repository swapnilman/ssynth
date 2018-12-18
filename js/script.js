var synthEl = document.getElementById('synth')
var keyboardEl = document.getElementById('keyboard');
var blackkeysEl = document.getElementById('blackkeys');
var presetEl = document.getElementById('preset')
// var lfoControlEl = document.getElementById('lfo-control')
var osc1ControlEl = document.getElementById('osc1-control')
var osc2ControlEl = document.getElementById('osc2-control')
// var filterControEl = document.getElementById('filter-control')
var shiftEl = document.getElementById('shift')
// var bendEl = document.getElementById('bend')

var ac = new AudioContext();
var transpose = 0

class Synth {
  constructor() {
    let count = 1;
    this.keys = [];
    for (let i = 1; i < 30; i++) {
      if (i % 2 != 0) {
        let key = new Key(count, 'white', keyboardEl);
        this.keys[count] = key;
        count++;
      } else {
        if (!(i % 14 == 6 || i % 14 == 0)) {
          let key = new Key(count, 'black', blackkeysEl);
          this.keys[count] = key;
          count++;
        } else {
          let el = document.createElement('div');
          el.className = 'spacer';
          blackkeys.appendChild(el);
        }
      }
    }
    this.shift = new Shift(shiftEl);
    // this.lfo = new LowFreqOsc(lfoControlEl);
    this.osc1Control = new OscControl(0, 0, osc1ControlEl);
    this.osc2Control = new OscControl(0, 0, osc2ControlEl);
    // this.filter = new Filter(filterControEl)

    document.addEventListener('keydown', (e) => this.keyDownEvent(e));
    document.addEventListener('keyup', (e) => this.keyUpEvent(e));
    this.shift.upEl.addEventListener('mousedown', (e) => this.shiftClick('up'));
    this.shift.downEl.addEventListener('mousedown', (e) => this.shiftClick('down'));
    this.osc1Control.waveTypeEl.addEventListener('wheel', (e) => this.osc1waveTypeScroll(e));
    this.osc1Control.detuneEl.addEventListener('wheel', (e) => this.osc1detuneScroll(e));
    this.osc1Control.activeEl.addEventListener('mousedown', (e) => this.osc1activeClick(e));
    this.osc2Control.waveTypeEl.addEventListener('wheel', (e) => this.osc2waveTypeScroll(e));
    this.osc2Control.detuneEl.addEventListener('wheel', (e) => this.osc2detuneScroll(e));
    this.osc2Control.activeEl.addEventListener('mousedown', (e) => this.osc2activeClick(e));
    // this.lfo.waveTypeEl.addEventListener('wheel', (e) => this.lfoWaveTypeScroll(e));
    // this.lfo.freqEl.addEventListener('wheel', (e) => this.lfoFreqScroll(e));
    // this.lfo.amountEl.addEventListener('wheel', (e) => this.lfoAmountScroll(e));
    // this.lfo.osc1activeEl.addEventListener('mousedown', (e) => this.lfoOsc1activeClick(e));
    // this.lfo.osc2activeEl.addEventListener('mousedown', (e) => this.lfoOsc2activeClick(e));
    // this.filter.freqEl.addEventListener('wheel', (e) => this.filterFreqScroll(e));
    // this.filter.filterTypeEl.addEventListener('mousedown', (e) => this.filterTypeClick(e))
    // this.filter.resonanceEl.addEventListener('wheel', (e) => this.filterResonanceScroll(e));
    // this.filter.attackEl.addEventListener('wheel', (e) => this.filterAttackScroll(e));
    // this.filter.decayEl.addEventListener('wheel', (e) => this.filterDecayScroll(e));
    // this.filter.sustainEl.addEventListener('wheel', (e) => this.filterSustainScroll(e));
    // this.filter.releaseEl.addEventListener('wheel', (e) => this.filterReleaseScroll(e));
  }

  keyDownEvent(e) {
    if (typeof(mapKey[e.keyCode]) != 'undefined') this.keys[mapKey[e.keyCode]].play(this);
  }

  keyUpEvent(e) {
    if (typeof(mapKey[e.keyCode]) != 'undefined') this.keys[mapKey[e.keyCode]].stop();
  }

  shiftClick(change) {
    this.shift.changeShift(change);
  }

  osc1waveTypeScroll(e) {
    if(e.deltaY > 0) this.osc1Control.changeWaveType('next')
    if(e.deltaY < 0) this.osc1Control.changeWaveType('prev')
  }

  osc1detuneScroll(e) {
    if(e.deltaY > 0) this.osc1Control.changeDetune('next')
    if(e.deltaY < 0) this.osc1Control.changeDetune('prev')
  }

  osc1activeClick(e) {
    this.osc1Control.toggleActive()
  }

  osc2waveTypeScroll(e) {
    if(e.deltaY > 0) this.osc2Control.changeWaveType('next')
    if(e.deltaY < 0) this.osc2Control.changeWaveType('prev')
  }

  osc2detuneScroll(e) {
    if(e.deltaY > 0) this.osc2Control.changeDetune('next')
    if(e.deltaY < 0) this.osc2Control.changeDetune('prev')
  }

  osc2activeClick(e) {
    this.osc2Control.toggleActive()
  }

  // lfoWaveTypeScroll(e) {
  //   if(e.deltaY > 0) this.lfo.changeWaveType('next')
  //   if(e.deltaY < 0) this.lfo.changeWaveType('prev')
  // }

  // lfoFreqScroll(e) {
  //   if(e.deltaY > 0) this.lfo.changeFreq('next')
  //   if(e.deltaY < 0) this.lfo.changeFreq('prev')
  // }

  // lfoAmountScroll(e) {
  //   if(e.deltaY > 0) this.lfo.changeAmount('next')
  //   if(e.deltaY < 0) this.lfo.changeAmount('prev')
  // }

  // lfoOsc1activeClick(e) {
  //   this.lfo.toggleOsc1Active();
  // }

  // lfoOsc2activeClick(e) {
  //   this.lfo.toggleOsc2Active();
  // }

  // filterFreqScroll(e) {
  //   if(e.deltaY > 0) this.filter.changeFrequency('next');
  //   if(e.deltaY < 0) this.filter.changeFrequency('prev');
  // }

  // filterTypeClick(e) {
  //   this.filter.toggleFilterType();
  // }

  // filterResonanceScroll(e) {
  //   if(e.deltaY > 0) this.filter.changeResonance('next');
  //   if(e.deltaY < 0) this.filter.changeResonance('prev');
  // }

  // filterAttackScroll(e) {
  //   if(e.deltaY > 0) this.filter.changeAttack('next');
  //   if(e.deltaY < 0) this.filter.changeAttack('prev');
  // }

  // filterDecayScroll(e) {
  //   if(e.deltaY > 0) this.filter.changeDecay('next');
  //   if(e.deltaY < 0) this.filter.changeDecay('prev');
  // }

  // filterSustainScroll(e) {
  //   if(e.deltaY > 0) this.filter.changeSustain('next');
  //   if(e.deltaY < 0) this.filter.changeSustain('prev');
  // }

  // filterReleaseScroll(e) {
  //   if(e.deltaY > 0) this.filter.changeRelease('next');
  //   if(e.deltaY < 0) this.filter.changeRelease('prev');
  // }
}

var synth = new Synth();
