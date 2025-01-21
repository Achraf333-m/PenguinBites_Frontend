import NavBar from "@/components/navbar";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <NavBar />
        <main className="flex flex-col md:flex-row space-x-10 px-8 mt-8 py-4 justify-around">
          <div>
            <h3>something here</h3>
          </div>
          <div className="flex flex-col items-center space-y-8">
            <Link href={'/home/breakfast'} className="button-style">Breakfast</Link>
            <Link href={'/home/lunch'} className="button-style">Lunch</Link>
            <Link href={'/home/dinner'} className="button-style">Dinner</Link>
            <Link href={'/home/snacks'} className="button-style">Snacks</Link>
            
          </div>
        </main>
      </div>
    </>
  );
}
