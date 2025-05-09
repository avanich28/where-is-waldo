import { boardDetails, filters } from "@/app/_utils/constants";
import { type AllRecords } from "@/app/_utils/types";
import Table from "@/app/_components/Table";
import TableRow from "@/app/_components/TableRow";
import BoardItem from "./BoardItem";

type BoardListsProps = {
  boardId: string;
  filter: string;
  data: AllRecords;
};

function BoardLists({ boardId, filter, data }: BoardListsProps) {
  if (filter === filters[1]) data.sort((a, b) => b.timeCount - a.timeCount);
  else if (filter === filters[2])
    data.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  else if (filter === filters[3])
    data.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

  return (
    <Table headers={boardDetails}>
      {data.map((record) => (
        <TableRow key={`${boardId}-${record.id}`}>
          <BoardItem record={record} />
        </TableRow>
      ))}
    </Table>
  );
}

export default BoardLists;
