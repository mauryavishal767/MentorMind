"use client";

import React, { useTransition } from "react";
import { Github } from "lucide-react";
import { signInWithOAuth } from "@/actions/auth";

const LoginGithub = () => {
    const [isPending, startTransition] = useTransition();

    const handleGithubLogin = () => {
        startTransition(async () => {
        await signInWithOAuth('github');
        });
    };

    return (
        <div
        onClick={handleGithubLogin}
        className="w-full gap-4 hover:cursor-pointer mt-6 h-12 bg-gray-800 rounded-md p-4 flex justify-center items-center"
        >
        <Github className="text-white" />
        <p className="text-white">
            {isPending ? "Redirecting..." : "Login with Github"}
        </p>
        </div>
    );
};

export default LoginGithub;