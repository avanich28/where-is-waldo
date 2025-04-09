"use client";

import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import { updatePassword, updateUsername } from "@/app/_lib/actions";
import FormBox from "@/app/_components/FormBox";
import FormRow from "@/app/_components/FormRow";
import Input from "@/app/_components/Input";
import SubmitButton from "@/app/_components/SubmitButton";

function UpdateUsernameForm({ name }) {
  const [state, formAction, isPending] = useActionState(updateUsername, {
    error: "",
  });

  useEffect(
    function () {
      if (state?.error) toast.error(state?.error);
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
  const [state, formAction, isPending] = useActionState(updatePassword, {
    error: "",
  });

  useEffect(
    function () {
      if (state?.error) toast.error(state?.error);
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

function SettingsForm({ name }) {
  return (
    <>
      <UpdateUsernameForm name={name} />
      <UpdatePasswordForm />
    </>
  );
}

export default SettingsForm;
