"use client";

import Link from "next/link";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { logInAction } from "@/app/_lib/actions";
import FormBox from "@/app/_components/FormBox";
import FormRow from "@/app/_components/FormRow";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

function LogInForm() {
  const [state, formAction, isPending] = useActionState(logInAction, {
    error: "",
  });

  useEffect(
    function () {
      if (state.error) toast.error(state.error);
    },
    [state]
  );

  return (
    <FormBox name="login" action={formAction}>
      <FormRow label="name">
        <Input type="text" name="name" isPending={isPending} />
      </FormRow>
      <FormRow label="password">
        <Input type="password" name="password" isPending={isPending} />
      </FormRow>
      <SubmitButton>Submit</SubmitButton>
      <div>
        Don&apos;t have an account?{" "}
        <span>
          <Link href="/signup">Sign up</Link>
        </span>
      </div>
    </FormBox>
  );
}

export default LogInForm;
