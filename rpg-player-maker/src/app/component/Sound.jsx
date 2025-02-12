import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Sound = ({ src }) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.02;
    }
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: "120px",
        right: "15px",
        zIndex: 1000,
      }}
    >
      <audio ref={audioRef} src={src} autoPlay loop />
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
