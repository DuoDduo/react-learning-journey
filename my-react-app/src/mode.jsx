import  { useState } from "react";

const Mode = () => {
  const [toggle, setToggle] = useState(false);

  const DarkMode = () => {
    setToggle(true);
    document.body.style.backgroundColor = "darkslategray"; // Set background color for dark mode
  };

  const LightMode = () => {
    setToggle(false);
    document.body.style.backgroundColor = "white"; // Set background color for light mode
  };

  return (
    <div>
      {toggle ? (
        <div>
          <h4>Light Mode</h4>
          <button className="btn" onClick={LightMode}>
            dark
          </button>
        </div>
      ) : (
        <div>
          <h4>Dark mode</h4>
          <button className="btn" onClick={DarkMode}>
            Light
          </button>
        </div>
      )}
    </div>
  );
};

export default Mode;
