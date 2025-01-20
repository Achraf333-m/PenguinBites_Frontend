import Head from "next/head";
import NavBar from "@/components/navbar";
import Link from "next/link";



export default function Home() {

  return (
    <>
      <Head>
        <title>PenguinBites</title>
      </Head>

      <div className="h-screen">
        <NavBar />
        <main className="px-6 py-8 my-4 md:flex-row flex flex-col items-center justify-around">
          <div className="flex flex-col justify-center items-center space-y-6">
            <h4>Hey buddy</h4>
            <p className="w-[350px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              necessitatibus voluptas maxime quasi hic harum veritatis rem! Sed
              dolorum odit sequi minima. Harum nemo minus saepe quas tenetur
              deleniti accusamus vel qui blanditiis sed illum excepturi,
              officiis, dolorum quam placeat consequatur nihil mollitia itaque
              aliquam at necessitatibus ipsam culpa soluta?
            </p>
          </div>

          <div className="flex flex-col space-y-10 justify-center items-center">
            <figure className="h-64">
              <img src="" alt="" />
              <h5>some penguin pic</h5>
            </figure>
            <div className="flex flex-col space-y-4">
              <Link className="button-style" href={'/signUp'}>
              <button className="">Get Started</button>
              </Link>
              <Link className="button-style" href={'/signIn'}>
              <button>Already a buddy? Log in</button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
