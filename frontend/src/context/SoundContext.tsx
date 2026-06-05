import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useDesign } from './DesignContext';

interface SoundContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
}

const SoundContext = createContext<SoundContextType>({
  isMuted: true,
  toggleMute: () => {},
  playHover: () => {},
  playClick: () => {},
});

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const { design } = useDesign();
  const isEditorial = design === 'editorial';
  
  // Oscillator per il drone ambient
  const droneOscRef = useRef<OscillatorNode | null>(null);
  const droneGainRef = useRef<GainNode | null>(null);

  useEffect(() => {
    // Inizializza l'audio context solo al primo toggle o interazione
    const initAudio = () => {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        
        // Setup Ambient Drone (Frequenza molto bassa)
        const osc = audioCtxRef.current.createOscillator();
        const gain = audioCtxRef.current.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = 45; // Sub-bass drone
        
        gain.gain.value = 0; // Inizialmente muto
        
        osc.connect(gain);
        gain.connect(audioCtxRef.current.destination);
        
        osc.start();
        
        droneOscRef.current = osc;
        droneGainRef.current = gain;
      }
    };

    const handleInteraction = () => {
      initAudio();
      if (audioCtxRef.current?.state === 'suspended') {
        audioCtxRef.current.resume();
      }
    };

    window.addEventListener('click', handleInteraction, { once: true });
    return () => window.removeEventListener('click', handleInteraction);
  }, []);

  useEffect(() => {
    if (droneGainRef.current && droneOscRef.current) {
      if (!isEditorial) {
        // I vecchi suoni editorial spostati su Nebula
        droneOscRef.current.frequency.setTargetAtTime(150, audioCtxRef.current?.currentTime || 0, 2);
        droneGainRef.current.gain.setTargetAtTime(
          isMuted ? 0 : 0.01, 
          audioCtxRef.current?.currentTime || 0, 
          2.0
        );
      } else {
        // Nuovi suoni più eterei ed eleganti per Editorial
        droneOscRef.current.frequency.setTargetAtTime(250, audioCtxRef.current?.currentTime || 0, 2);
        droneGainRef.current.gain.setTargetAtTime(
          isMuted ? 0 : 0.005, 
          audioCtxRef.current?.currentTime || 0, 
          2.0
        );
      }
    }
  }, [isMuted, isEditorial]);

  const toggleMute = () => {
    if (audioCtxRef.current?.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    setIsMuted(prev => !prev);
  };

  const playHover = () => {
    if (isMuted || !audioCtxRef.current) return;
    
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    
    if (!isEditorial) {
      // Suono organico / ovattato (Spostato da Editorial a Nebula come richiesto)
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtxRef.current.currentTime + 0.04);
      gain.gain.setValueAtTime(0.015, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.04);
    } else {
      // Nuovo suono di hover super minimale per Editorial (Cristallino / Vetro)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, audioCtxRef.current.currentTime + 0.03);
      gain.gain.setValueAtTime(0.01, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.03);
    }
    
    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);
    
    osc.start();
    osc.stop(audioCtxRef.current.currentTime + 0.05);
  };

  const playClick = () => {
    if (isMuted || !audioCtxRef.current) return;
    
    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    
    if (!isEditorial) {
      // Suono click morbido tipo macchina da scrivere (Spostato a Nebula)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(50, audioCtxRef.current.currentTime + 0.08);
      gain.gain.setValueAtTime(0.03, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.08);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.08);
    } else {
      // Nuovo suono di click raffinato e percussivo per Editorial
      osc.type = 'square';
      osc.frequency.setValueAtTime(300, audioCtxRef.current.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtxRef.current.currentTime + 0.05);
      gain.gain.setValueAtTime(0.02, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.05);
      
      // Aggiungiamo un tocco di "snap" 
      const snapOsc = audioCtxRef.current.createOscillator();
      const snapGain = audioCtxRef.current.createGain();
      snapOsc.type = 'sine';
      snapOsc.frequency.setValueAtTime(2000, audioCtxRef.current.currentTime);
      snapOsc.frequency.exponentialRampToValueAtTime(500, audioCtxRef.current.currentTime + 0.02);
      snapGain.gain.setValueAtTime(0.015, audioCtxRef.current.currentTime);
      snapGain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.02);
      
      snapOsc.connect(snapGain);
      snapGain.connect(audioCtxRef.current.destination);
      snapOsc.start();
      snapOsc.stop(audioCtxRef.current.currentTime + 0.02);

      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.05);
    }
    
    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  );
};
