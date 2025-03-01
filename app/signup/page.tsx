import Link from "next/link";
import { signUpAction } from "@/app/_lib/actions";
import FormBox from "@/app/_components/FormBox";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

export const metadata = {
  title: "Sign Up",
};

function Page() {
  return (
    <main className="px-[3vw] w-auto my-auto grid justify-center">
      <FormBox name="sign up" action={signUpAction}>
        <Input label="name" />
        <Input inputType="password" label="password" />
        <SubmitButton>Submit</SubmitButton>
        <div>
          Already have an account?{" "}
          <span>
            <Link href="/login">Login</Link>
          </span>
        </div>
      </FormBox>
    </main>
  );
}

export default Page;
