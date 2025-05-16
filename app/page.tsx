import gojoBlack from "@/public/gojo-black.png";
import gojoWhite from "@/public/gojo-white.png";
import ImageBox from "@/app/_components/ImageBox";
import LinkButton from "@/app/_components/LinkButton";

const imageContainerDefaultStyle =
  "relative h-[150px] w-[160px] sm:h-[180px] sm:w-[190px] lg:h-[200px] lg:w-[210px] rounded-full overflow-hidden";

function Page() {
  return (
    <main className="h-full px-[3vw] flex flex-col items-center justify-center tracking-wide sm:tracking-wider">
      <div className={`hidden dark:block ${imageContainerDefaultStyle}`}>
        <ImageBox src={gojoWhite} alt="gojo" />
      </div>
      <div className={`dark:hidden ${imageContainerDefaultStyle}`}>
        <ImageBox src={gojoBlack} alt="gojo" />
      </div>

      <div className="mb-2 sm:mb-3 lg:mb-4 font-medium sm:font-semibold text-xl sm:text2xl lg:text-3xl">
        Welcome to our finding hidden characters game!
      </div>
      <div className="mb-1 sm:mb-2 text-sm sm:text-base lg:text-lg text-center">
        Please sign up if you don&apos;t have an account or log in to start the
        game
      </div>
      <div className="flex gap-2 sm:gap-3 lg:gap-4">
        <LinkButton href="/signup">sign up</LinkButton>
        <LinkButton href="/login" color="green">
          Login
        </LinkButton>
      </div>
    </main>
  );
}

export default Page;
