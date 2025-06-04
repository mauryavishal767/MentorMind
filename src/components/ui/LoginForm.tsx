"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";
import { signIn } from "@/actions/auth";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { toast } from "sonner";

const LoginForm = () => {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await signIn(formData)

        if(result.status === "success"){
            router.push("/dashboard");
        } else {
            setError(result?.status);
            toast.error(result?.status);
        }

        setLoading(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                    type="email"
                    placeholder="Email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                </div>
                <div className="mt-4"> 
                    <AuthButton type="login" loading={loading} />
                </div>
                {/*TODO: insted of showing error message, show a toaster */}
                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );    
};

export default LoginForm;