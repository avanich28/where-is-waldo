import { JSX } from "react";
import { gameLists } from "@/app/_utils/gameLists";
import Box from "@/app/_features/games/Box";
import Container from "@/app/_components/Container";

export const metadata = {
  title: "Games",
};

export default function Home(): JSX.Element {
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
