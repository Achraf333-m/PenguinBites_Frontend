import UserIn from "@/components/userIn";
import Head from "next/head";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>PenguinBites - Sign Up</title>
      </Head>
      <UserIn
        imageDesc="Something here"
        imageSrc=""
        title="Getting Started"
        type="Sign up"
      />
    </>
  );
}
