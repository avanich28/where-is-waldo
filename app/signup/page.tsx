import SignUpForm from "@/app/_features/authentication/SignUpForm";

export const metadata = {
  title: "Sign Up",
};

async function Page() {
  return (
    <main className="px-[3vw] w-auto my-auto grid justify-center">
      <SignUpForm />
    </main>
  );
}

export default Page;
