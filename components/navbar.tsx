import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

export default function NavBar() {
  const router: NextRouter = useRouter();
  let firstTime: boolean = true;

  return (
    <nav className="py-8 px-16 mt-4 flex items-center justify-between text-black font-light text-md border-b-[1px]">
      <figure>
        <img src="" />
        <h3 className="text-xl cursor-pointer">PenguinBites</h3>
      </figure>

      {firstTime && router.pathname === "/home/ingredients" ? (<Link href={'/home'}>
          <h3>Skip for now</h3>
        </Link>): (<div className="flex items-center text-xl">
          <h3 className="px-4 cursor-pointer">About</h3>
          <h3 className="px-4 cursor-pointer">Resources</h3>
          <h3 className="px-4 cursor-pointer">Try it</h3>
        </div>) }
      
    </nav>
  );
}
