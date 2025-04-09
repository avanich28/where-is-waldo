import { calcMinsAndSecs, formatDate } from "@/app/_utils/helpers";

function BoardItem({ record }) {
  const { rank, name, timeCount, date } = record;
  const { minutes, seconds } = calcMinsAndSecs(timeCount);

  return (
    <>
      <td>{rank}</td>
      <td className="capitalize">{name}</td>
      <td>
        {minutes}:{seconds}
      </td>
      <td>{formatDate(date)}</td>
    </>
  );
}

export default BoardItem;
