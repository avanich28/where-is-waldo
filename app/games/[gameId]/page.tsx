import { getGameData } from "@/app/_lib/data-services";
import { gameLists } from "@/app/_utils/gameLists";
import { convertStringIntoLink } from "@/app/_utils/helpers";
import Container from "@/app/_components/Container";
import ImageDetail from "@/app/_components/ImageDetail";
import Timer from "@/app/_components/Timer";
import CharacterBox from "@/app/_features/games/CharacterBox";
import GameEndModal from "@/app/_features/games/GameEndModal";
import GameImage from "@/app/_features/games/GameImage";
import RedirectToGamesPage from "@/app/_features/games/RedirectToGamesPage";

type PageProps = {
  params: {
    gameId: string;
  };
};

export async function generateMetadata({ params }: PageProps) {
  const { gameId } = await params;

  return {
    title: gameId
      .split("-")
      .slice(1)
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" "),
  };
}

export async function generateStaticParams() {
  const ids = gameLists.map((game, i) => ({
    gameId: `${i}-${convertStringIntoLink(game.name)}`,
  }));

  return ids;
}

async function Page({ params }: PageProps) {
  const { gameId } = await params;
  const { id, name, image, artist, source, characters } = await getGameData(
    gameId
  );

  return (
    <RedirectToGamesPage>
      <GameEndModal />
      <main className="flex flex-col gap-2 sm:gap-4 lg:gap-5">
        <header className="relative px-[3vw]">
          <div className="relative flex flex-wrap justify-between md:justify-center items-center gap-3 sm:font-medium sm:tracking-wider sm:text-lg lg:text-xl text-light-textHead dark:text-dark-textHead">
            <ImageDetail name={name} artist={artist} source={source} />
            <div className="sm:absolute right-0">
              <Timer />
            </div>
          </div>
        </header>
        <section className="sticky top-0 flex justify-center">
          <Container addClassName="sm:p-2 gap-3 md:gap-5">
            {characters.map((data) => (
              <CharacterBox
                key={data.name}
                src={data.img}
                alt={data.name}
                name={data.name}
              />
            ))}
          </Container>
        </section>
        <section className="w-full h-full cursor-pointer">
          <GameImage name={name} image={image} gameId={Number(id)} />
        </section>
      </main>
    </RedirectToGamesPage>
  );
}

export default Page;
