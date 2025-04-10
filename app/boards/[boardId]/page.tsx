import { filters } from "@/app/_utils/constants";
import { getAllRecordsPerGame } from "@/app/_lib/data-services";
import BoardOperation from "@/app/_features/boards/BoardOperation";
import BoardLists from "@/app/_features/boards/BoardLists";

export const metadata = {
  title: "Leaderboard",
};

async function Page({ params, searchParams }) {
  const { boardId } = await params;
  const query = await searchParams;
  const data = await getAllRecordsPerGame(boardId);
  const filter = query?.filter ?? filters[0];

  return (
    <main className="h-full flex flex-col gap-2 sm:gap-4 lg:gap-6 px-[3vw]">
      <header className="flex justify-between items-center text-light-textHead dark:text-dark-textHead">
        <BoardOperation initialGameName={boardId} initialFilter={filter} />
      </header>

      <BoardLists boardId={boardId} filter={filter} data={data} />
    </main>
  );
}

export default Page;
