"use client";

import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { updatePassword, updateUsername } from "@/app/_lib/actions";
import { type FormError } from "@/app/_utils/types";
import FormBox from "@/app/_components/FormBox";
import FormRow from "@/app/_components/FormRow";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

type UsernameProp = {
  name: string | undefined;
};

const initialStateUpdateUsername: FormError = {
  error: false,
};

const initialStateUpdatePassword: FormError = {
  error: false,
};

function UpdateUsernameForm({ name }: UsernameProp) {
  const [state, formAction, isPending] = useActionState(
    updateUsername,
    initialStateUpdateUsername
  );

  useEffect(
    function () {
      if (state.error && state.message) toast.error(state.message);
    },
    [state]
  );

  return (
    <FormBox name="change your name" action={formAction}>
      <FormRow label="name">
        <Input
          name="name"
          defaultValue={name ? name : ""}
          isPending={isPending}
          maxLength={8}
        />
      </FormRow>
      <SubmitButton>Submit</SubmitButton>
    </FormBox>
  );
}

function UpdatePasswordForm() {
  const [state, formAction, isPending] = useActionState(
    updatePassword,
    initialStateUpdatePassword
  );

  useEffect(
    function () {
      if (state.error && state.message) toast.error(state.message);
    },
    [state]
  );

  return (
    <FormBox name="change your password" action={formAction}>
      <FormRow label="password">
        <Input
          type="password"
          name="password"
          isPending={isPending}
          minLength={4}
          maxLength={10}
        />
      </FormRow>
      <FormRow label="password confirm">
        <Input type="password" name="passwordConfirm" isPending={isPending} />
      </FormRow>
      <SubmitButton>Submit</SubmitButton>
    </FormBox>
  );
}

function SettingsForm({ name }: UsernameProp) {
  return (
    <>
      <UpdateUsernameForm name={name} />
      <UpdatePasswordForm />
    </>
  );
}

export default SettingsForm;
