"use client";

import { useState } from "react";

import Window from "./component/common/Flashwindow";
import Header from "./component/common/Header";
import Footer from "./component/common/Footer";
import Allcreate from "./component/character/Allcreate";
import Helpbutton from "./component/common/Helpbutton";
import Sound from "./component/common/Sound";

export default function Home() {
  const [windowAccepted, setWindowAcecepted] = useState(false);

  const handleAccept = () => {
    setWindowAcecepted(true);
  };

  return (
    <>
      <Header />
      {!windowAccepted && <Window onAccept={handleAccept} />}
      {windowAccepted && (
        <>
          <Sound
            sources={[
              "/Sounds/Zelda.mp3",
              "/Sounds/MarioGalaxy.mp3",
              "/Sounds/Gerudo.mp3",
            ]}
          />

          <Helpbutton />
          <Allcreate />
          <Footer />
        </>
      )}
    </>
  );
}
