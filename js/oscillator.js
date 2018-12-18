class Oscillator {
  constructor(index) {
    this.keyIndex = index;
  }

  play(control) {
    this.osc = ac.createOscillator();
    this.gain = ac.createGain();
    this.osc.connect(this.gain);
    this.gain.connect(ac.destination)
    this.osc.type = control.control.getWaveType();
    this.note = mapNote[this.keyIndex + transpose + (control.shift.getShift() * 12) - 9];
    this.osc.frequency.value = mapFrequency[this.note] - (control.control.getDetune() / 10);
    // this.gain.gain.value = control.lfo.gain.gain.value;
    this.osc.start();
  }

  stop() {
    this.osc.stop();
  }
}
