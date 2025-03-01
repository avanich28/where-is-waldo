import { updatePassword, updateUsername } from "@/app/_lib/actions";
import FormBox from "@/app/_components/FormBox";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

export const metadata = {
  title: "Settings",
};

function Page() {
  return (
    <section className="w-full sm:w-auto my-auto grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-5">
      <FormBox name="change your name" action={updateUsername}>
        <Input label="name" />
        <SubmitButton>Submit</SubmitButton>
      </FormBox>
      <FormBox name="change your password" action={updatePassword}>
        <Input inputType="password" label="password" />
        <Input inputType="password" label="password confirm" />
        <SubmitButton>Submit</SubmitButton>
      </FormBox>
    </section>
  );
}

export default Page;
