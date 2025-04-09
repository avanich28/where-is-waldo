import { getUserData } from "@/app/_lib/data-services";
import SettingsForm from "@/app/_features/authentication/SettingsForm";

export const metadata = {
  title: "Settings",
};

async function Page() {
  const { name } = await getUserData();

  return (
    <section className="w-full sm:w-auto my-auto grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-5">
      <SettingsForm name={name} />
    </section>
  );
}

export default Page;
