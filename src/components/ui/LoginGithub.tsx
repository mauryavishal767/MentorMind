"use client";

import React, { useTransition } from "react";
import { GithubIcon } from "lucide-react";
import { signInWithOAuth } from "@/actions/auth";

const LoginGithub = () => {
    const [isPending, startTransition] = useTransition();

    const handleGithubLogin = () => {
        startTransition(async () => {
        await signInWithOAuth('github');
        });
    };

    return (
        <button
            onClick={handleGithubLogin}
            className="w-full h-12 border shadow border-gray-300 rounded-md p-3 flex justify-center items-center gap-3 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white"
        >
            <GithubIcon />
            <span className="text-gray-700 font-medium">
                {isPending ? "Redirecting..." : "Continue with Github"}
            </span>
        </button>
    );
};

export default LoginGithub;