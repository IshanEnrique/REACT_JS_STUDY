import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import navJson from "./resources/nav.json";
import themeColor from "./resources/theme-color.json";

function App() {
  const navElements = navJson;
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState(navElements["mode"]);
  const [navText, setNavText] = useState(
    mode === "dark" ? "warning" : "primary"
  );
  const [navBgColor, setNavBgColor] = useState("#e3f2fd");
  const [modeColor, setModeColor] = useState(themeColor);
  const [textAreaBgColor, setTextAreaBgColor] = useState("white");
  const [textAreaColor, setTextAreaColor] = useState("black");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = (id) => {
    setMode(modeColor[id].name);
    setNavText("primary");
    setNavBgColor(modeColor[id].navBgColor);
    setTextAreaBgColor(modeColor[id].textAreaBgColor);
    setTextAreaColor(modeColor[id].textAreaColor);
    document.body.style.color = modeColor[id].color;
    document.body.style.backgroundColor = modeColor[id].bgColor;
  };

  return (
    <>
      <Navbar
        showAlert={showAlert}
        nav={navElements}
        toggleMode={toggleMode}
        mode={mode}
        navText={navText}
        modeColor={modeColor}
        navBgColor={navBgColor}
      />
      <Alert alert={alert} />
      <TextForm
        heading="Enter text to analyze below"
        textAreaBgColor={textAreaBgColor}
        textAreaColor={textAreaColor}
        showAlert={showAlert}
      />

      {/* <About/> */}
    </>
  );
}

export default App;
