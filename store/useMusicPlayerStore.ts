import { create } from "zustand";

interface MusicPlayerState {
  activeId: string | null;
  isPlaying: boolean;
  audioRef: HTMLAudioElement | null;
  play: (id: string, ref: HTMLAudioElement) => void;
  pause: () => void;
}

export const useMusicPlayerStore = create<MusicPlayerState>((set, get) => ({
  activeId: null,
  isPlaying: false,
  audioRef: null,
  play: (id, ref) => {
    // Pause old audio if exists
    if (get().audioRef && get().audioRef !== ref) {
      get().audioRef.pause();
    }

    ref.play().catch(() => {});

    set({ activeId: id, isPlaying: true, audioRef: ref });
  },
  pause: () => {
    if (get().audioRef) get().audioRef.pause();
    set({ isPlaying: false });
  },
}));
