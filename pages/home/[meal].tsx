import NavBar from "@/components/navbar";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";


export default function Meal() {
    const router:NextRouter  = useRouter();
    const { meal }:ParsedUrlQuery = router.query;
    if (meal != "breakfast" && meal != "lunch" && meal != "dinner" && meal != "snacks") {
        
        return (
        
            <div className="w-screen h-screen flex flex-col space-y-4 items-center justify-center overflow-hidden font-semibold text-2xl">
                <h1>ERROR -- NOT A VALID MEAL</h1>
                <Link className="button-style w-[calc(100%/3)]" href={'/home'}>Go Back</Link>
            </div>

            
        )
    }
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
}