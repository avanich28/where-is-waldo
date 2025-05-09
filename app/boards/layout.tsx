import BoardOperation from "../_features/boards/BoardOperation";

function Layout({ children }: { children: React.ReactNode }) {
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
