import { calcMinsAndSecs, formatDate } from "@/app/_utils/helpers";
import { type BoardRecord } from "@/app/_utils/types";

type BoardItemProp = {
  record: BoardRecord;
};

function BoardItem({ record }: BoardItemProp) {
  const { rank, name, timeCount, date } = record;
  const { minutes, seconds } = calcMinsAndSecs(timeCount);

  return (
    <>
      <td>{rank}</td>
      <td>{name}</td>
      <td>
        {minutes}:{seconds}
      </td>
      <td>{formatDate(date)}</td>
    </>
  );
}

export default BoardItem;
