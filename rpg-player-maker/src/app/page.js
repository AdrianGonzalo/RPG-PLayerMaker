import Window from "./component/Flashwindow";

import Header from "./component/Header";
import Footer from "./component/Footer";

import Allcreate from "./component/Allcreate";

import Helpbutton from "./component/Helpbutton";

export default function Home() {
  return (
    <>
      <Header />
      <Helpbutton />
      <Window />
      <Allcreate />
      <Footer />
    </>
  );
}
