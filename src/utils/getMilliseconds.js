export const getMilliseconds = prayer => {
  const time = new Date();
  const splittedTime = prayer.split(':');
  time.setHours(splittedTime[0]);
  time.setMinutes(splittedTime[1]);
  time.setSeconds(0);
  return time.getTime();
}
