const newYear = "1 jan 2021";
function CountDown(): Array<number | string> {
  const newYearDate: any = new Date(newYear);
  const currentDate: any = new Date();
  const totalSecond = (newYearDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minutes = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  let daysFormat = days < 10 ? `0${days}` : days;
  let hourFormat = hours < 10 ? `0${hours}` : hours;
  let minutesFormat = minutes < 10 ? `0${minutes}` : minutes;
  let secondFormat = seconds < 10 ? `0${seconds}` : seconds;
  console.log(daysFormat, hourFormat, minutesFormat, secondFormat);
  return [daysFormat, hourFormat, minutesFormat, secondFormat];
}
export default CountDown;
