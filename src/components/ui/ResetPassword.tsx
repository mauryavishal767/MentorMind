"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "@/actions/auth";
import { toast } from "sonner";

const ResetPassword = () => {
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(event.currentTarget);
        if(formData.get("password") !== formData.get("confirmPassword")){
            setError("Password and confirm password do not match");
            toast.error("Password and confirm password do not match");
            setLoading(false);
            return;
        }

        const code = searchParams.get("code");
        const result = await resetPassword(formData, code as string);

        if(result.status === "success"){
            toast.success("Successfully reset password");
            router.push("/");
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
                New Password
            </label>
            <input
                type="password"
                placeholder="Password"
                id="Password"
                name="password"
                className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
            </label>
            <input
                type="password"
                placeholder="Confirm your password"
                name="confirmPassword"
                id="confirmPassword"
                className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>

            <div className="mt-4">
            <AuthButton type="Reset Password" loading={loading} />
            </div>
        </form>
        </div>
    );
};

export default ResetPassword;