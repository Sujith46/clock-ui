import "./AnalogClock.css";

const AnalogClock = ({ hours, minutes, seconds }) => {
  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`,
  };
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`,
  };
  return (
    <div className={"analog-clock"}>
      <div className={"dial seconds"} style={secondsStyle} />
      <div className={"dial minutes"} style={minutesStyle} />
      <div className={"dial hours"} style={hoursStyle} />
    </div>
  );
};

export default AnalogClock;
