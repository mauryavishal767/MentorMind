"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { forgotPassword } from "@/actions/auth";
import { toast } from "sonner";

const ForgotPassword = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        const result = await forgotPassword(formData);
        if(result.status === "success"){
            toast.success("Password reset link sent to your email");
        } else {
            setError(result?.status);
            toast.error(result?.status);
        }

        setLoading(false);
    };

    return (
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

                <div className="mt-4">
                    <AuthButton type="Forgot Password" loading={loading} />
                </div>
            </form>
            
    );
};

export default ForgotPassword;