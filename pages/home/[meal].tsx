import NavBar from "@/components/navbar";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";


export default function Meal() {
    const router:NextRouter  = useRouter();
    const { meal }:ParsedUrlQuery = router.query;
    return (
        <>
        <NavBar />
        <div>
            <main className="flex flex-col space-y-8 px-8 py-4">
                <h3>{meal} recipes</h3>
                <h4>Here are some great {meal} meals:</h4>
                <div className="w-full flex flex-wrap p-2 items-center justify-center">
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                    <div className="h-60 w-60 bg-black/50 p-4 m-2"></div>
                </div>
            </main>
        </div>
        </>
    );
}   