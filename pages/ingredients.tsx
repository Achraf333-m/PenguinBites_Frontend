import NavBar from "@/components/navbar";
import Head from "next/head";

export default function Ingredients() {
  return (
    <>
      <Head>
        <title>PenguinBites - Ingredients</title>
      </Head>
      <div className="h-screen">
        <NavBar />
        <main className="flex flex-col justify-center space-y-8 px-4 py-8">
          <div className="flex flex-col space-y-2">
            <h3>Some text here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At,
              vero!
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <label htmlFor="searchBar">Add Ingredients</label>
            <input type="search" id="searchBar" className="focus:outline-none bg-black/[0.01] hover:bg-red-50/40 focus:border-b-2 border-black/5 py-2 px-4 w-[400px]"/>
            <div className="w-[400px] border-t-black\5 border-[1px] max-h-64 overflow-y-auto">
               
            </div>
            <button type="submit">Save</button>
          </div>
        </main>
      </div>
    </>
  );
}
