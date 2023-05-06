import { useState, useEffect } from "react";

export const useCurrentTime = () => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleTime = () => {
    const date = new Date();
    date.setHours(date.getHours());

    let hours = Number(formatTime(date.getHours()));
    let minutes = Number(formatTime(date.getMinutes()));
    let seconds = Number(formatTime(date.getSeconds()));

    setTime({
      hours,
      minutes,
      seconds,
    });
  };

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  useEffect(() => {
    const timerId = setInterval(handleTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return [time, setTime];
};
