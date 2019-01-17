export const preZero = time => {
  const numberToStr = time.toString();
  if(numberToStr.length === 1) {
    return `0${time}`;
  }
  return time;
}
