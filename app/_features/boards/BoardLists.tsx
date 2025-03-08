import { boardDetails, filters } from "@/app/_utils/constants";
import Table from "@/app/_components/Table";
import TableRow from "@/app/_components/TableRow";
import BoardItem from "./BoardItem";

function BoardLists({ boardId, filter, data }) {
  if (filter === filters[0]) data.sort((a, b) => a.timeCount - b.timeCount);
  else if (filter === filters[1])
    data.sort((a, b) => b.timeCount - a.timeCount);
  else if (filter === filters[2])
    data.sort((a, b) => b.date.getTime() - a.date.getTime());
  else if (filter === filters[3])
    data.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <Table headers={boardDetails}>
      {data.map((player, i) => (
        <TableRow key={`${boardId}-${filter}-${i}`}>
          <BoardItem place={i + 1} player={player} />
        </TableRow>
      ))}
    </Table>
  );
}

export default BoardLists;
