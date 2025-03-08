import { calcMinsAndSecs, formatDate } from "@/app/_utils/helpers";

function BoardItem({ place, player }) {
  const { name, timeCount, date } = player;
  const { minutes, seconds } = calcMinsAndSecs(timeCount);

  return (
    <>
      <td>{place}</td>
      <td className="capitalize">{name}</td>
      <td>
        {minutes}:{seconds}
      </td>
      <td>{formatDate(date)}</td>
    </>
  );
}

export default BoardItem;
