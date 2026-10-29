/**
 * Procedural Web Audio API Sound Engine
 * Zero external audio files, 100% offline synthesis.
 */

import { getState } from './storage.js';

let audioCtx = null;
let activeBinauralType = null;
let binauralOscL = null;
let binauralOscR = null;
let binauralGain = null;
let binauralMerger = null;

let activeNoiseType = null;
let noiseSource = null;
let noiseGain = null;
let noiseFilter = null;
let noiseVolume = 0.35;

export function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playClickSound() {
  const state = getState();
  if (!state.soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  } catch (e) { /* ignore */ }
}

export function playQuestCompleteSound() {
  const state = getState();
  if (!state.soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.07);
      gain.gain.setValueAtTime(0.15, now + idx * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.07);
      osc.stop(now + idx * 0.07 + 0.25);
    });
  } catch (e) { /* ignore */ }
}

export function playLevelUpSound() {
  const state = getState();
  if (!state.soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const chord = [440, 554.37, 659.25, 880, 1108.73]; // A Major triumph
    chord.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.2, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + 1.2);
    });
  } catch (e) { /* ignore */ }
}

export function playBossHitSound() {
  const state = getState();
  if (!state.soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.28);
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.28);
  } catch (e) { /* ignore */ }
}

export function playWhistleSound() {
  const state = getState();
  if (!state.soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1800, now);
    osc.frequency.linearRampToValueAtTime(2400, now + 0.15);
    osc.frequency.linearRampToValueAtTime(1900, now + 0.35);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  } catch (e) { /* ignore */ }
}

/**
 * Multi-harmonic sacred Tibetan bowl synthesizer
 * (432Hz fundamental + 864Hz octave + 1296Hz shimmer)
 */
export function playTibetanBowl() {
  const state = getState();
  if (!state.soundEnabled) return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    const now = audioCtx.currentTime;
    const freqs = [432, 432 * 2, 432 * 3, 433.8];
    const gains = [0.28, 0.10, 0.05, 0.15];
    const decays = [4.8, 3.5, 2.2, 4.5];

    freqs.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.linearRampToValueAtTime(freq + (idx === 3 ? -1.5 : 0.8), now + decays[idx]);
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(gains[idx], now + 0.06);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + decays[idx] + 0.1);
    });
  } catch (e) { /* ignore */ }
}

export function stopBinauralBeats() {
  try {
    if (binauralOscL) { binauralOscL.stop(); binauralOscL.disconnect(); binauralOscL = null; }
    if (binauralOscR) { binauralOscR.stop(); binauralOscR.disconnect(); binauralOscR = null; }
    if (binauralGain) { binauralGain.disconnect(); binauralGain = null; }
    if (binauralMerger) { binauralMerger.disconnect(); binauralMerger = null; }
    activeBinauralType = null;
  } catch (e) { /* ignore */ }
}

export function startBinauralBeats(type) {
  stopBinauralBeats();
  if (type === 'off') return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    activeBinauralType = type;

    let baseFreq = 200;
    let diff = 10; // Alfa: 10Hz
    if (type === 'theta') {
      baseFreq = 150;
      diff = 6;   // Teta: 6Hz
    } else if (type === 'delta') {
      baseFreq = 110;
      diff = 2;   // Delta: 2Hz
    } else if (type === 'gamma') {
      baseFreq = 200;
      diff = 40;  // 40 Hz Gamma (MIT Tsai 2016)
    }

    const now = audioCtx.currentTime;
    binauralMerger = audioCtx.createChannelMerger(2);
    binauralGain = audioCtx.createGain();
    binauralGain.gain.setValueAtTime(0.12, now);

    binauralOscL = audioCtx.createOscillator();
    binauralOscL.type = 'sine';
    binauralOscL.frequency.setValueAtTime(baseFreq, now);

    binauralOscR = audioCtx.createOscillator();
    binauralOscR.type = 'sine';
    binauralOscR.frequency.setValueAtTime(baseFreq + diff, now);

    const gainL = audioCtx.createGain();
    const gainR = audioCtx.createGain();
    gainL.gain.value = 1;
    gainR.gain.value = 1;

    binauralOscL.connect(gainL);
    gainL.connect(binauralMerger, 0, 0); // Left ear

    binauralOscR.connect(gainR);
    gainR.connect(binauralMerger, 0, 1); // Right ear

    binauralMerger.connect(binauralGain);
    binauralGain.connect(audioCtx.destination);

    binauralOscL.start();
    binauralOscR.start();
  } catch (e) {
    console.error('Binaural beats error:', e);
  }
}

export function getActiveBinauralType() {
  return activeBinauralType;
}

function generateNoiseBuffer(type, durationSeconds = 5) {
  if (!audioCtx) return null;
  const sampleRate = audioCtx.sampleRate;
  const frameCount = sampleRate * durationSeconds;
  const buffer = audioCtx.createBuffer(1, frameCount, sampleRate);
  const data = buffer.getChannelData(0);

  if (type === 'pink') {
    // Paul Kellet's filter method
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < frameCount; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }
  } else if (type === 'brown') {
    // Brown / Brownian noise
    let lastOut = 0.0;
    for (let i = 0; i < frameCount; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + (0.02 * white)) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }
  }
  return buffer;
}

export function stopAmbientNoise() {
  try {
    if (noiseSource) { noiseSource.stop(); noiseSource.disconnect(); noiseSource = null; }
    if (noiseFilter) { noiseFilter.disconnect(); noiseFilter = null; }
    if (noiseGain) { noiseGain.disconnect(); noiseGain = null; }
    activeNoiseType = null;
  } catch (e) { /* ignore */ }
}

export function startAmbientNoise(type) {
  stopAmbientNoise();
  if (type === 'off') return;
  try {
    initAudioContext();
    if (!audioCtx) return;
    activeNoiseType = type;

    const buffer = generateNoiseBuffer(type, 5);
    if (!buffer) return;

    noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(noiseVolume, audioCtx.currentTime);

    noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(type === 'pink' ? 2200 : 850, audioCtx.currentTime);

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    noiseSource.start();
  } catch (e) {
    console.error('Noise audio error:', e);
  }
}

export function getActiveNoiseType() {
  return activeNoiseType;
}

export function setNoiseVolume(val) {
  noiseVolume = Math.max(0, Math.min(1, val));
  if (noiseGain && audioCtx) {
    noiseGain.gain.setValueAtTime(noiseVolume, audioCtx.currentTime);
  }
}
