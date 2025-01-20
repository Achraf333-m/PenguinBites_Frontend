import Link from "next/link";

interface propsType {
    imageSrc: string,
    imageDesc: string,
    title: string,
    type: string,
};

export default function UserIn({ imageSrc, imageDesc, title, type }:propsType) {
  return (
    <>
      <nav className="h-20 w-full flex items-center border-b-[1px] border-black/10">
        <Link className="px-8" href={"/"}>
          <button>Back</button>
        </Link>
    </nav>
      <main className="h-screen w-full flex justify-around mt-10">
        <figure className="w-[50%] p-2">
          <img src={imageSrc} alt="something" />
          <h3>{imageDesc}</h3>
        </figure>
        <div className="w-[50%] p-2 space-y-20 flex flex-col items-center">
          <h3 className="p-4">{title}</h3>
          <form className="w-full flex flex-col items-center space-y-10" action="">
            <div className="flex flex-col space-y-4">
              <label htmlFor="email">Email</label>
              <input className="bg-black/5 px-4 py-2 rounded-md hover:bg-red-50 focus:outline-red-50 focus:outline-[0.5px]" type="email" id="email" name="email" />
            </div>

            <div className="flex flex-col space-y-4">
              <label htmlFor="password">Password</label>
              <input className="bg-black/5 px-4 py-2 rounded-md hover:bg-red-50 focus:outline-red-50 focus:outline-[0.5px]" type="password" id="password" name="password" />
            </div>
            <button className="button-style" type="submit">{type}</button>
          </form>
        </div>
      </main>
    </>
  )
}
