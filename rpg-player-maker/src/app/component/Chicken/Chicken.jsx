import { useState } from "react";
import "./Chicken.css";
import Image from "next/image";

const Chicken = () => {
  const [clones, setClones] = useState([]);
  const [isDuplicating, setIsDuplicating] = useState(false);

  const handleClick = () => {
    if (isDuplicating) return;

    setIsDuplicating(true);
    setClones([]);

    let newClones = [];
    let maxClones = 50;

    const addClone = (index) => {
      if (index >= maxClones) return;

      newClones.push({
        id: index,
        left: Math.random() * window.innerWidth, // X
        top: Math.random() * window.innerHeight, // Y
      });

      setClones([...newClones]);

      setTimeout(() => addClone(index + 1), 50);
    };

    addClone(0);

    setTimeout(() => {
      setClones([]);
      setIsDuplicating(false);
    }, 3000);
  };

  return (
    <div className="chicken-container">
      {/* Pollo original */}
      <Image
        src="/Images/chicken2.png"
        alt="sorcery chicken"
        width={100}
        height={100}
        className="chicken"
        onClick={handleClick}
      />

      {/* Clones que aparecen gradualmente */}
      {clones.map((clone) => (
        <Image
          key={clone.id}
          src="/Images/chicken2.png"
          alt="cloned chicken"
          width={80}
          height={80}
          className="chicken clone"
          style={{
            left: `${clone.left}px`,
            top: `${clone.top}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Chicken;
