import { boardDetails, filters } from "@/app/_utils/constants";
import Table from "@/app/_components/Table";
import TableRow from "@/app/_components/TableRow";
import BoardItem from "./BoardItem";

function BoardLists({ boardId, filter, data }) {
  const fastestFilterData = data.slice(0);

  if (filter === filters[1]) data.sort((a, b) => b.timeCount - a.timeCount);
  else if (filter === filters[2])
    data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  else if (filter === filters[3])
    data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  else data = fastestFilterData;

  return (
    <Table headers={boardDetails}>
      {data.map((record, i) => (
        <TableRow key={`${boardId}-${filter}-${i}`}>
          <BoardItem record={record} />
        </TableRow>
      ))}
    </Table>
  );
}

export default BoardLists;
