import { gameLists } from "@/app/_utils/gameLists";
import Container from "@/app/_components/Container";
import ImageDetail from "@/app/_components/ImageDetail";

export const metadata = {
  title: "Records",
};

const textDefaultStyle =
  "text-sm sm:text-base lg:text-lg [&>div:nth-child(1)]:font-semibold [&>div:nth-child(1)]:sm:font-bold tracking-wide sm:tracking-wider";

function Page() {
  // FIXME
  const place = 1;
  const time = "1.02.34";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 lg:gap-5 my-auto">
      {gameLists.map((game) => (
        <Container
          key={game.name}
          type="secondary"
          addClassName={`${textDefaultStyle}`}
        >
          <ImageDetail
            name={game.name}
            artist={game.artist}
            source={game.source}
          />
          <div className="mt-2">Your Best Place: {place}</div>
          <div>Your Fastest Time: {time}</div>
        </Container>
      ))}
    </section>
  );
}

export default Page;
