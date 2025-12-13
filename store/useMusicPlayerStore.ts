import { create } from "zustand";

type MusicPlayerStore = {
  activeId: string | null;
  audio: HTMLAudioElement | null;
  isPlaying: boolean;

  play: (id: string, audio: HTMLAudioElement) => void;
  pause: () => void;
};

export const useMusicPlayerStore = create<MusicPlayerStore>((set, get) => ({
  activeId: null,
  audio: null,
  isPlaying: false,

  play: async (id, audio) => {
    const { audio: currentAudio } = get();

    // Stop any currently playing audio
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    await audio.play();

    set({
      activeId: id,
      audio,
      isPlaying: true,
    });
  },

  pause: () => {
    const { audio } = get();
    if (audio) audio.pause();

    set({ isPlaying: false });
  },
}));
