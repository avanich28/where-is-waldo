import { getUserBestRecords } from "@/app/_lib/data-services";
import { gameLists } from "@/app/_utils/gameLists";
import { calcMinsAndSecs } from "@/app/_utils/helpers";
import Container from "@/app/_components/Container";
import ImageDetail from "@/app/_components/ImageDetail";

export const metadata = {
  title: "Records",
};

const textDefaultStyle =
  "text-sm sm:text-base lg:text-lg [&>div:nth-child(1)]:font-semibold [&>div:nth-child(1)]:sm:font-bold tracking-wide sm:tracking-wider";

async function Page() {
  const data = await getUserBestRecords();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:gap-5 my-auto">
      {data.map((record) => {
        const { gameId, timeCount } = record;
        const { minutes, seconds } = calcMinsAndSecs(timeCount);
        const { name, artist, source } = gameLists[gameId];

        return (
          <Container
            key={gameId}
            type="secondary"
            addClassName={`${textDefaultStyle}`}
          >
            <ImageDetail name={name} artist={artist} source={source} />
            <div className="mt-2">
              Your Fastest Time: {minutes}:{seconds}
            </div>
          </Container>
        );
      })}
    </section>
  );
}

export default Page;
