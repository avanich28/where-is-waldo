import { getUserBestRecords, getUserData } from "@/app/_lib/data-services";
import UserOperation from "@/app/_features/user/UserOperation";
import Logout from "@/app/_features/authentication/Logout";
import UserSections from "@/app/_features/user/UserSections";

export const metadata = {
  title: "User",
};

async function Page() {
  const records = await getUserBestRecords();
  const { name } = await getUserData();

  return (
    <main className="h-full px-[3vw] flex flex-col items-center gap-3 sm:gap-4 lg:gap-5">
      <header className="relative flex flex-col gap-2 sm:flex-row sm:gap-0 items-center ">
        <UserOperation />
        <div className="sm:absolute sm:left-full sm:ml-3 lg:ml-4">
          <Logout />
        </div>
      </header>
      <UserSections records={records} name={name} />
    </main>
  );
}

export default Page;
