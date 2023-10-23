import React, { FC, ReactNode, useState } from "react";

interface PlayerContextProps {
  currentTrack: Track;
  setCurrentTrack: (v: Track) => void;
  tracks: Array<Track>;
  addToTracks: (v: Track) => void;
  removeFromTracks: (v: Track) => void;
  isPlaying: boolean;
  setIsPlaying: (v: boolean) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  isMuted: boolean;
  toggleMute: () => void;
  isPlayerShowed: boolean;
  setIsPlayerShowed: (v: boolean) => void;
}
export const PlayerContext = React.createContext<PlayerContextProps>(
  {} as PlayerContextProps
);

interface PlayerProviderProps {
  children: ReactNode;
}

interface Track {
  url: string;
  name: string;
  author: string;
  imgUrl: string;
}

export const PlayerProvider: FC<PlayerProviderProps> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerShowed, setIsPlayerShowed] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>({
    url: "/music/audio-sample.mp3",
    name: "Bohemian Tragedy",
    author: "Scott McMann",
    imgUrl: "/images/track-cover.png",
  });
  const [tracks, setTracks] = useState<Array<Track>>([
    {
      url: "/music/audio-sample.mp3",
      name: "Bohemian Tragedy",
      author: "Scott McMann",
      imgUrl: "/images/track-cover.png",
    },
    {
      url: "/music/audio-sample2.mp3",
      name: "Pink Love (Instrumental)",
      author: "Doja Cat",
      imgUrl: "/images/track-cover2.png",
    },
  ]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const addToTracks = (track: Track) => {
    const localTracks = [...tracks];
    localTracks.push(track);
    setTracks(localTracks);
  };

  const removeFromTracks = (track: Track) => {
    const localTracks = [...tracks];
    const filteredTracks = localTracks.filter((item) => item.url !== track.url);
    setTracks(filteredTracks);
  };
  const nextTrack = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.url === currentTrack.url
    );

    if (currentIndex === -1 || currentIndex === tracks.length - 1) {
      return;
    }
    setCurrentTrack(tracks[currentIndex + 1]);
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };

  const previousTrack = () => {
    const currentIndex = tracks.findIndex(
      (track) => track.url === currentTrack.url
    );
    if (currentIndex <= 0) {
      return;
    }
    setCurrentTrack(tracks[currentIndex - 1]);
    setIsPlaying(false);
    setTimeout(() => {
      setIsPlaying(true);
    }, 1000);
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlaying,
        currentTrack,
        setCurrentTrack,
        tracks,
        removeFromTracks,
        addToTracks,
        nextTrack,
        previousTrack,
        isMuted,
        toggleMute,
        setIsPlaying,
        isPlayerShowed,
        setIsPlayerShowed,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContext;
