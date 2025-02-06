"use client";

import { useState } from "react";

import Window from "./component/Flashwindow";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Allcreate from "./component/Allcreate";

import Helpbutton from "./component/Helpbutton";

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
          <Helpbutton />
          <Allcreate />
          <Footer />
        </>
      )}
    </>
  );
}
