"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { signUpAction } from "@/app/_lib/actions";
import { type FormError } from "@/app/_utils/types";
import FormBox from "@/app/_components/FormBox";
import FormRow from "@/app/_components/FormRow";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

const initialState: FormError = {
  error: false,
};

function SignUpForm() {
  const [state, formAction, isPending] = useActionState(
    signUpAction,
    initialState
  );

  useEffect(
    function () {
      if (state.error && state.message) toast.error(state.message);
    },
    [state]
  );

  return (
    <FormBox name="sign up" action={formAction}>
      <FormRow label="name">
        <Input name="name" isPending={isPending} maxLength={8} />
      </FormRow>
      <FormRow label="password">
        <Input
          type="password"
          name="password"
          isPending={isPending}
          minLength={4}
          maxLength={10}
        />
      </FormRow>
      <SubmitButton>Submit</SubmitButton>
      <div>
        Already have an account?{" "}
        <span>
          <Link href="/login">Login</Link>
        </span>
      </div>
    </FormBox>
  );
}

export default SignUpForm;
