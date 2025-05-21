import { auth } from "@/app/_lib/auth";
import LinkButton from "@/app/_components/LinkButton";

export const metadata = {
  title: "Not Found",
};

async function NotFound() {
  const session = await auth();

  return (
    <main className="h-full flex flex-col justify-center items-center gap-3 tracking-wide sm:tracking-wider">
      <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl lg:text-3xl">
        This page could not be found!
      </h1>
      <LinkButton href={session?.user ? "/games" : "/"}>
        Go back home
      </LinkButton>
    </main>
  );
}

export default NotFound;
