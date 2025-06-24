import { type Time } from "./types";

export function isActive(currentSelect: string, value: string): string | "" {
  return currentSelect === value ? "active" : "";
}

export function convertStringIntoLink(string: string): string {
  return string.toLowerCase().split(" ").join("-");
}

function timeString(time: number): string {
  return String(time).length < 2 ? `0${time}` : `${time}`;
}

export function calcMinsAndSecs(timeCount: number): Time {
  const minutes = Math.trunc(timeCount / 60);
  const seconds = timeCount % 60;

  return { minutes: timeString(minutes), seconds: timeString(seconds) };
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const format = new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  );

  return format;
}
