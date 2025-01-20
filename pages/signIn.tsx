import UserIn from "@/components/userIn";
import Head from "next/head";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>PenguinBites - Sign In</title>
      </Head>
      <UserIn
        imageDesc="Something here2"
        imageSrc=""
        title="Welcome Back"
        type="Sign in"
      />
      <Link href={'/ingredients'}>Go to ingredients</Link>
    </>
  );
}
