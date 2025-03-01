import Link from "next/link";
import { logInAction } from "@/app/_lib/actions";
import FormBox from "@/app/_components/FormBox";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

export const metadata = {
  title: "Login",
};

function Page() {
  return (
    <main className="px-[3vw] w-auto my-auto grid justify-center">
      <FormBox name="login" action={logInAction}>
        <Input label="name" />
        <Input inputType="password" label="password" />
        <SubmitButton>Submit</SubmitButton>
        <div>
          Don&apos;t have an account?{" "}
          <span>
            <Link href="/signup">Sign up</Link>
          </span>
        </div>
      </FormBox>
    </main>
  );
}

export default Page;
