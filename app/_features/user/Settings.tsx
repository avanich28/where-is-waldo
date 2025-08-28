import SettingsForm from "@/app/_features/user/SettingsForm";

function Settings({ name }: { name: string | undefined }) {
  return (
    <section className="w-full sm:w-auto my-auto grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-5">
      <SettingsForm name={name} />
    </section>
  );
}

export default Settings;
