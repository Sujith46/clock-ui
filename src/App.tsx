import "./App.scss";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import DigitalClock from "./components/DigitalClock/DigitalClock";
import { useCurrentTime } from "./hooks/useCurrentTime";

function App() {
  const [time] = useCurrentTime();

  const {hours, minutes, seconds} : any = time;

  return (
    <div className="clock">
      <div className="analog-clock-container">
        <AnalogClock
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
      <div className="digital-clock-container">
        <DigitalClock
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </div>
    </div>
  );
}

export default App;
