import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <section className="w-10/12 mx-auto flex items-center justify-center">
        <SignIn />
      </section>
    </>
  );
}
