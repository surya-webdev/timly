import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(true);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  // const sec = "00";
  const totalSeconds = sec + min * 60 + 60;
  let seconds = Math.floor(totalSeconds % 60);
  let minutes = Math.floor(totalSeconds / 60);
  useEffect(
    function () {
      if (start) {
        setTimeout(() => {
          setSec((s) => s + 1);
        }, "1000");
      }
      if (minutes === 5) {
        // document.body()
        document.body.style.backgroundColor = "#646363";
        document.body.style.color = "#ffff";
        setSec(() => 0);
        setMin(() => 0);
      }
    },

    [start, sec, minutes]
  );

  function handler() {
    setStart((s) => !s);
  }
  return (
    <>
      <nav>
        <h1>Timly⭐</h1>
      </nav>
      <main className="main">
        <div className="wrap">
          <button className="btn" onClick={() => handler()}>
            {`${minutes < 9 ? "0" + minutes : minutes} : ${
              seconds < 9 ? "0" + seconds : seconds
            }`}
          </button>
          <div>
            <p>{start ? "Timer setted for 5Mins.....⏩ " : "paused 🚫"}</p>
            <button
              onClick={() => {
                minutes = 0;
                seconds = 0;
                setMin(() => 0);
                setSec(() => 0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
