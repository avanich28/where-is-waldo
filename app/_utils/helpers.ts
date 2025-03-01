export function isActive(curPathname, defaultLink) {
  return curPathname === defaultLink ? "active" : "";
}

function timeString(nums) {
  return String(nums).length < 2 ? `0${nums}` : `${nums}`;
}
export function calcMinsAndSecs(timeCount) {
  const minutes = Math.trunc(timeCount / 60);
  const seconds = timeCount % 60;

  return { minutes: timeString(minutes), seconds: timeString(seconds) };
}
