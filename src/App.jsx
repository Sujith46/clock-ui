import { useEffect, useState } from "react";
import "./App.css";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";

function App() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const handleTime = () => {
    const date = new Date();
    date.setHours(date.getHours());

    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());

    setTime({
      hours,
      minutes,
      seconds,
    });
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const timerId = setInterval(handleTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <AnalogClock
        hours={time?.hours}
        minutes={time?.minutes}
        seconds={time?.seconds}
      />
      <DigitalClock
        hours={time?.hours}
        minutes={time?.minutes}
        seconds={time?.seconds}
      />
    </div>
  );
}

export default App;
