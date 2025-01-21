import NavBar from "@/components/navbar";
import Head from "next/head";

export default function Filters() {
  return (
    <>
      <Head>
        <title>PenguinBites - Filters</title>
      </Head>

      <div>
        <NavBar />
        <main className="space-y-4 mt-8 px-4">
          <h3>Select all that applies</h3>
          <div className="">
            <label>Gluten-free</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label>Nut-free</label>
            <input type="checkbox" name="" id="" />
          </div>
          <div>
            <label>Dairy-free</label>
            <input type="checkbox" name="" id="" />
          </div>
          <button className="button-style checked:bg-red-100" type="submit">Done</button>
        </main>
      </div>
    </>
  );
}
