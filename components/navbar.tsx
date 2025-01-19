export default function NavBar () {

    return (
        <nav className="py-8 px-16 flex items-center justify-between text-black font-light text-md border-b-[1px]">
            <figure>
            <img src=""/>
            <h3 className="text-xl cursor-pointer">PenguinBites</h3>
            </figure>

            <div className="flex items-center">
                <h3 className="px-4 cursor-pointer">About</h3>
                <h3 className="px-4 cursor-pointer">Resources</h3>
                <h3 className="px-4 cursor-pointer">Try it</h3>
            </div>
        </nav>
    );
}