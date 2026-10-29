/**
 * In-App Zero-Asset Ambient Soundscapes Generator
 * Uses Native Web Audio API to synthesize binaural beats, brown noise, and singing bowls.
 * Zero external audio files required (0 KB download!).
 */

let audioCtx = null;
let currentTrack = null; // 'gamma' | 'brown' | 'tibet' | null
let masterGain = null;
let activeNodes = [];
let currentVolume = 0.45;

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

export const SOUNDSCAPE_TRACKS = [
  {
    id: 'gamma',
    title: '40 Hz Gama Dalgaları',
    badge: 'ZİHİN & ODAK',
    icon: '🧠',
    description: 'MIT Tsai Lab kanıtlı derin odak ve okuma frekansı (200Hz taşıyıcı, 40Hz nabız).',
    color: 'from-purple-500/20 to-indigo-500/20 text-purple-300 border-purple-500/40'
  },
  {
    id: 'brown',
    title: 'Kahverengi Gürültü (Brown Noise)',
    badge: 'DERİN ÇALIŞMA',
    icon: '🌊',
    description: 'Dış sesleri tamamen bastıran, zihni sakinleştiren alçak frekanslı sıcak uğultu.',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/40'
  },
  {
    id: 'tibet',
    title: 'Tibet Çanı & Zen Şamanı',
    badge: 'MEDİTASYON',
    icon: '🔔',
    description: '432 Hz armonik rezonans ile nefes ve kalp ritmini dengeleyen meditatif rezonans.',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-500/40'
  }
];

export function playSoundscape(trackId) {
  initAudioContext();
  if (!audioCtx) return;

  stopSoundscape();

  masterGain = audioCtx.createGain();
  masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
  masterGain.connect(audioCtx.destination);

  if (trackId === 'gamma') {
    startGammaWaves();
  } else if (trackId === 'brown') {
    startBrownNoise();
  } else if (trackId === 'tibet') {
    startTibetChant();
  }

  currentTrack = trackId;
  notifySubscribers();
}

export function stopSoundscape() {
  activeNodes.forEach(node => {
    try {
      if (node.stop) node.stop();
      if (node.disconnect) node.disconnect();
    } catch (e) {}
  });
  activeNodes = [];
  currentTrack = null;
  notifySubscribers();
}

export function toggleSoundscape(trackId) {
  if (currentTrack === trackId) {
    stopSoundscape();
  } else {
    playSoundscape(trackId);
  }
}

export function setSoundscapeVolume(vol) {
  currentVolume = Math.max(0, Math.min(1, vol));
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
  }
  notifySubscribers();
}

export function getSoundscapeState() {
  return {
    isPlaying: currentTrack !== null,
    currentTrack,
    volume: currentVolume
  };
}

// Track 1: 40 Hz Gamma Wave Generator
function startGammaWaves() {
  // Carrier wave (200 Hz pure sine)
  const carrier = audioCtx.createOscillator();
  carrier.type = 'sine';
  carrier.frequency.setValueAtTime(200, audioCtx.currentTime);

  // Modulation gain for 40 Hz tremolo effect
  const modGain = audioCtx.createGain();
  modGain.gain.setValueAtTime(0.5, audioCtx.currentTime);

  // 40 Hz LFO
  const lfo = audioCtx.createOscillator();
  lfo.type = 'sine';
  lfo.frequency.setValueAtTime(40, audioCtx.currentTime);

  const lfoDepth = audioCtx.createGain();
  lfoDepth.gain.setValueAtTime(0.45, audioCtx.currentTime);

  lfo.connect(lfoDepth);
  lfoDepth.connect(modGain.gain);

  carrier.connect(modGain);
  modGain.connect(masterGain);

  carrier.start();
  lfo.start();

  activeNodes.push(carrier, lfo, modGain, lfoDepth);
}

// Track 2: Brown Noise (Deep Pink/Brown noise buffer)
function startBrownNoise() {
  const bufferSize = audioCtx.sampleRate * 2;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);

  let lastOut = 0.0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    // Integration filter to produce 1/f^2 Brown Noise
    data[i] = (lastOut + 0.02 * white) / 1.02;
    lastOut = data[i];
    data[i] *= 3.5; // Gain boost
  }

  const noise = audioCtx.createBufferSource();
  noise.buffer = buffer;
  noise.loop = true;

  // Lowpass filter to make it warmer and less harsh
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(450, audioCtx.currentTime);

  noise.connect(filter);
  filter.connect(masterGain);

  noise.start();
  activeNodes.push(noise, filter);
}

// Track 3: 432 Hz Tibet Singing Bowl Drone
function startTibetChant() {
  // Fundamental 432 Hz
  const osc1 = audioCtx.createOscillator();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(432, audioCtx.currentTime);

  // Harmonic 864 Hz
  const osc2 = audioCtx.createOscillator();
  osc2.type = 'sine';
  osc2.frequency.setValueAtTime(864, audioCtx.currentTime);

  // Sub-harmonic 216 Hz
  const osc3 = audioCtx.createOscillator();
  osc3.type = 'triangle';
  osc3.frequency.setValueAtTime(216, audioCtx.currentTime);

  // Slow vibrato LFO (0.2 Hz)
  const vibrato = audioCtx.createOscillator();
  vibrato.frequency.setValueAtTime(0.2, audioCtx.currentTime);
  const vibGain = audioCtx.createGain();
  vibGain.gain.setValueAtTime(1.5, audioCtx.currentTime);
  vibrato.connect(vibGain);
  vibGain.connect(osc1.frequency);

  const gain1 = audioCtx.createGain();
  gain1.gain.setValueAtTime(0.5, audioCtx.currentTime);
  const gain2 = audioCtx.createGain();
  gain2.gain.setValueAtTime(0.2, audioCtx.currentTime);
  const gain3 = audioCtx.createGain();
  gain3.gain.setValueAtTime(0.3, audioCtx.currentTime);

  osc1.connect(gain1);
  osc2.connect(gain2);
  osc3.connect(gain3);

  gain1.connect(masterGain);
  gain2.connect(masterGain);
  gain3.connect(masterGain);

  osc1.start();
  osc2.start();
  osc3.start();
  vibrato.start();

  activeNodes.push(osc1, osc2, osc3, vibrato, vibGain, gain1, gain2, gain3);
}

// Subscribers for UI updates
const listeners = new Set();
export function subscribeSoundscape(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
function notifySubscribers() {
  const s = getSoundscapeState();
  listeners.forEach(fn => fn(s));
}
