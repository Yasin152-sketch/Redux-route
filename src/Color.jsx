import "../src/App.css";
import { useState, useEffect } from "react";
function Color() {
  const [red, setred] = useState(0);
  const [green, setgreen] = useState(0);
  const [blue, setblue] = useState(0);
  const color = `RGB(${red},${green},${blue})`;
  useEffect(() => {
    const savedcolor = JSON.parse(localStorage.getItem("color"));
    if (savedcolor) {
      setred(savedcolor.red);
      setgreen(savedcolor.green);
      setblue(savedcolor.blue);
    }
  }, []);
  const saved = () => {
    const savedcolor = { red, blue, green };
    localStorage.setItem("color", JSON.stringify(savedcolor));
    alert("your color is saved!");
  };
  return (
    <div className="center">
      <h2>hello Color is exist on here!</h2>
      <div className="box" style={{ backgroundColor: color }}></div>
      <p>color : {color}</p>
      <label htmlFor="">Red</label>
      <input
        type="range"
        min={0}
        max={255}
        value={red}
        onChange={(e) => setred(e.target.value)}
      />
      <br></br>
      <br></br>
      <label htmlFor="">Green</label>
      <input
        type="range"
        min={0}
        value={green}
        max={255}
        onChange={(e) => setgreen(e.target.value)}
      />
      <br></br>
      <br></br>
      <label htmlFor="">Blue</label>
      <input
        type="range"
        min={0}
        max={255}
        value={blue}
        onChange={(e) => setblue(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={saved} className="btn">
        Saved color!
      </button>
    </div>
  );
}

export default Color;
