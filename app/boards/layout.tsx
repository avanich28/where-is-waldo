import BoardOperation from "@/app/_features/boards/BoardOperation";

export const metadata = {
  title: "Leaderboard",
};

function Layout({ children }) {
  return (
    <main className="h-full flex flex-col gap-2 sm:gap-4 lg:gap-6 px-[3vw]">
      <header className="flex justify-between items-center text-light-textHead dark:text-dark-textHead">
        <BoardOperation />
      </header>
      {children}
    </main>
  );
}

export default Layout;
