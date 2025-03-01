import CharacterBox from "@/app/_components/CharacterBox";
import Container from "@/app/_components/Container";
import ImageDetail from "@/app/_components/ImageDetail";
import Timer from "@/app/_components/Timer";
import GameEndModal from "@/app/_features/games/GameEndModal";
import { gameLists } from "@/app/_utils/gameLists";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const { gameId } = await params;
  return {
    title: gameId
      .split("-")
      .slice(1)
      .map((str) => str[0].toUpperCase() + str.slice(1))
      .join(" "),
  };
}

async function Page({ params }) {
  const { gameId } = await params;
  const { name, image, artist, source, characters } =
    gameLists[gameId.split("-")[0]];

  return (
    <>
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
        {/* FIXME Separate the file for game condition? */}
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
        {/* FIXME add game condition */}
        <section className="w-full h-full">
          <Image src={image[1]} alt={name} placeholder="blur" />
        </section>
      </main>
    </>
  );
}

export default Page;
