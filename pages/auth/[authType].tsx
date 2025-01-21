import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

export default function AuthType() {
    const router:NextRouter = useRouter();
    const { authType }:ParsedUrlQuery = router.query;

    const isLogIn = authType === "signin";
    const head = isLogIn ? "Log in" : "Sign up";
    const button = isLogIn ? "Log in" : "Sign up";

    return (
        <>
        
        </>
        
    );
}