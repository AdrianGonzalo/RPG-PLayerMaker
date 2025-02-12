import { useEffect, useState } from "react";
import "./RainEffects.css";

export default function RainEffect() {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const numDrops = 100;
    const rainArray = Array.from({ length: numDrops }, (_, i) => ({
      id: i,
      left: Math.random() * 100 + "vw",
      animationDuration: Math.random() * 2 + 2 + "s",
      animationDelay: "-" + Math.random() * 5 + "s",
    }));
    setDrops(rainArray);
  }, []);

  return (
    <div className="rain-container">
      {drops.map(({ id, left, animationDuration, animationDelay }) => (
        <div
          key={id}
          className="drop"
          style={{ left, animationDuration, animationDelay }}
        />
      ))}
    </div>
  );
}
