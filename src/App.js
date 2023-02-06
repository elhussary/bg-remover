import React, { useState } from "react";
import Content from "./components/Content";
import Navbar from "./components/layout/Navbar";
import Wavify from "./components/Wavify";

function App() {
  const [downloadpopup, setDownloadPopup] = useState(false);
  const [imageurl, setImageUrl] = useState("");
  return (
    <React.Fragment>
      <Navbar
        setDownloadPopup={setDownloadPopup}
        downloadpopup={downloadpopup}
        imageurl={imageurl}
      />
      <main>
        <Content
          setDownloadPopup={setDownloadPopup}
          downloadpopup={downloadpopup}
          imageurl={imageurl}
          setImageUrl={setImageUrl}
        />
        <Wavify />
      </main>
    </React.Fragment>
  );
}

export default App;
