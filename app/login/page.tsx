import LogInForm from "../_features/authentication/LoginForm";

export const metadata = {
  title: "Login",
};

function Page() {
  return (
    <main className="px-[3vw] w-auto my-auto grid justify-center">
      <LogInForm />
    </main>
  );
}

export default Page;
