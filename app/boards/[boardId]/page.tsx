import { getAllRecordsPerGame } from "@/app/_lib/data-services";
import { filters } from "@/app/_utils/constants";
import BoardLists from "@/app/_features/boards/BoardLists";

export const metadata = {
  title: "Leaderboard",
};

type PageProps = {
  params: Promise<{ boardId: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function Page({ params, searchParams }: PageProps) {
  const { boardId } = await params;
  const query = await searchParams;
  const data = await getAllRecordsPerGame(boardId);
  const filter = (query?.filter as string) ?? filters[0];

  return <BoardLists boardId={boardId} filter={filter} data={data} />;
}

export default Page;
