import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Sound = ({ sources = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sources.length);
    setIsPlaying(true);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sources.length) % sources.length
    );
    setIsPlaying(true);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.02;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentIndex]);

  const handleEnded = () => {
    handleNext();
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "120px",
        right: "15px",
        zIndex: 1000,
      }}
    >
      <audio
        key={sources[currentIndex]}
        ref={audioRef}
        src={sources[currentIndex]}
        autoPlay
        onEnded={handleEnded}
      />
      <button
        onClick={toggleMute}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "100px",
        }}
      >
        {isMuted ? <VolumeX size={80} /> : <Volume2 size={80} />}
      </button>
    </div>
  );
};

export default Sound;
