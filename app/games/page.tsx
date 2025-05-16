import { gameLists } from "@/app/_utils/gameLists";
import Container from "@/app/_components/Container";
import Box from "@/app/_features/games/Box";

export const metadata = {
  title: "Games",
};

function Home() {
  return (
    <main className="flex justify-center items-center h-full py-2 sm:py-3 lg:py-4">
      <Container type="square">
        {gameLists.map((data, i) => (
          <Box key={i} id={i} data={data} />
        ))}
      </Container>
    </main>
  );
}

export default Home;
