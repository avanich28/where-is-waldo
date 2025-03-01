import { Suspense } from "react";
import { boardDetails } from "@/app/_utils/constants";
import Spinner from "@/app/_components/Spinner";
import Table from "@/app/_components/Table";
import TableRow from "@/app/_components/TableRow";
import BoardItem from "@/app/_features/boards/BoardItem";

async function Page({ params, searchParams }) {
  const path = await params;
  const query = await searchParams;
  const boardId = path.boardId;
  const filter = query.filter;

  // FIXME Connect with database
  // revise the data according to the filter (if clause) + count(time) + date-fns
  const today = new Date();
  const dummyDate = today.toLocaleDateString("en-US");

  const data = [
    { name: "akari", time: "02:03:04", date: dummyDate },
    { name: "alicia", time: "02:03:05", date: dummyDate },
    { name: "aika", time: "02:03:06", date: dummyDate },
    { name: "akira", time: "02:03:07", date: dummyDate },
    { name: "alice", time: "02:03:08", date: dummyDate },
    { name: "athena", time: "02:03:09", date: dummyDate },
    { name: "aria", time: "02:03:10", date: dummyDate },
    { name: "hime", time: "02:03:11", date: dummyDate },
    { name: "ma", time: "02:03:12", date: dummyDate },
    { name: "akasuki", time: "02:03:13", date: dummyDate },
    { name: "ai", time: "02:03:14", date: dummyDate },
    { name: "woody", time: "02:03:15", date: dummyDate },
    { name: "grandma", time: "02:03:16", date: dummyDate },
    { name: "postman", time: "02:03:17", date: dummyDate },
  ];

  return (
    <Table headers={boardDetails}>
      <Suspense fallback={<Spinner />} key={filter}>
        {data.map((player, i) => (
          <TableRow key={`${boardId}-${filter}-${i}`}>
            <BoardItem place={i + 1} player={player} />
          </TableRow>
        ))}
      </Suspense>
    </Table>
  );
}

export default Page;
