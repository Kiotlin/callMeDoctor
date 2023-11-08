import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';

type AudioProps = {
  isPlaying: boolean;
  play: () => void;
  toggle: () => void;
  stop: () => void;
};

const audioAtom = atom<HTMLAudioElement | null>(null);

export const useAudio = (url: string): AudioProps => {
  const [audio, setAudio] = useAtom(audioAtom);
  const [playing, setPlaying] = useState<boolean>(false);

  const play = () => setPlaying(true);
  const toggle = () => setPlaying((pre) => !pre);
  const stop = () => setPlaying(false);

  useEffect(() => setAudio(new Audio(url)), []);

  useEffect(() => {
    audio && (playing ? audio.play() : audio.pause());
  }, [playing]);

  useEffect(() => {
    audio && audio.addEventListener('ended', stop);
    return () => {
      audio && audio.removeEventListener('ended', stop);
    };
  }, [audio]);

  return {
    isPlaying: playing,
    play: play,
    toggle: toggle,
    stop: stop
  };
};
