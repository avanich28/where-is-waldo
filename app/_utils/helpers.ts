export function isActive(curPathname, defaultLink) {
  return curPathname === defaultLink ? "active" : "";
}

export function convertStringIntoLink(string) {
  return string.toLowerCase().split(" ").join("-");
}

function timeString(nums) {
  return String(nums).length < 2 ? `0${nums}` : `${nums}`;
}
export function calcMinsAndSecs(timeCount) {
  const minutes = Math.trunc(timeCount / 60);
  const seconds = timeCount % 60;

  return { minutes: timeString(minutes), seconds: timeString(seconds) };
}

export function formatDate(date) {
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };
  const format = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );

  return format;
}
