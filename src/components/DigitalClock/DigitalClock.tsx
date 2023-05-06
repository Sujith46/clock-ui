import "./DigitalClock.scss";

type digitalClockPropType = {
  hours: number;
  minutes: number;
  seconds: number;
};

const DigitalClock = ({ hours, minutes, seconds }: digitalClockPropType) => {
  return (
    <div className="digital-clock">
      <div className="d-hours">{hours}</div>
      <div className="d-color">:</div>
      <div className="d-minutes">{minutes}</div>
      <div className="d-color">:</div>
      <div className="d-seconds">{seconds}</div>
    </div>
  );
};

export default DigitalClock;
