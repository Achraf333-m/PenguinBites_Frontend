import Head from "next/head";
import NavBar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>PenguinBites</title>
      </Head>

      <div className="h-screen overflow-hidden">
        <NavBar />
        <main className="w-full overflow-hidden h-[75%] px-6 py-8 my-4 md:flex-row flex flex-col items-center justify-around space-y-8">
          <div className="flex flex-col items-start space-y-6">
            <h4 className="text-left text-3xl font-light">Welcome to PenguinBites!</h4>
            <p className="font-extralight text-black text-2xl">
              <span className="animate-pulse">Designed with you in mind</span> <br /> discover great Spoonacular recipes, a
              soft and accessible design, inclusive filters, and more!
            </p>
          </div>

          <div className="flex h-full flex-col space-y-10 justify-center items-center">
            {/* <figure className="h-64">
              <img src="" alt="" />
              <h5>some penguin pic</h5>
            </figure> */}
            <div className="flex h-full mb-16 flex-col md:justify-end space-y-4 px-4 py-2">
              <Link className="button-style" href={"/signUp"}>
                <button className="">Get Started</button>
              </Link>
              <Link className="button-style" href={"/signIn"}>
                <button>Already a buddy? Log in</button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
