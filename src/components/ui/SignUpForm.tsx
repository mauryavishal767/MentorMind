"use client";
import React, { useState } from "react";
import AuthButton from "./AuthButton";
import { useRouter } from "next/navigation";
import { signUp } from "@/actions/auth";
import { toast } from "sonner";

const SignUpForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        const formData = new FormData(event.currentTarget);

        if(formData.get("password") !== formData.get("confirmPassword")){
            setError("Password and confirm password do not match");
            toast.error("Password and confirm password do not match");
            return;
        }

        const result = await signUp(formData)

        if(result.status === "success"){
            // TODO: toast that email have been sent to verify
            toast.success("Successfully registered");
            router.push("/login");
        } else {
            setError(result?.status as string);
            toast.error(result?.status as string);
        }


        setLoading(false);
    };


    return (
        <div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
            </label>
            <input
                type="text"
                placeholder="Enter username"
                name="username"
                id="username"
                className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
            </label>
            <input
                type="email"
                placeholder="Enter email"
                name="email"
                id="email"
                className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
            </label>
            <input
                type="password"
                placeholder="Enter password"
                name="password"
                id="password"
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
                <AuthButton type="Sign up" loading={loading} />
            </div>
        </form>
        </div>
    );
};

























export default SignUpForm;


const fn = () => (
    <div>
      <div className="w-full flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            // value={formData.name}
            // onChange={handleInputChange}
            className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            // value={formData.email}
            // onChange={handleInputChange}
            className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-blue-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            // value={formData.password}
            // onChange={handleInputChange}
            // onFocus={() => handlePasswordFocus('password')}
            className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-blue-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
            // value={formData.confirmPassword}
            // onChange={handleInputChange}
            className="mt-1 w-full px-3 py-2 h-12 rounded-md border border-gray-300 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mt-4">
          <button
            // onClick={handleSubmit}
            // disabled={loading}
            className="w-full h-12 bg-black text-white rounded-md font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {/* {loading ? "Creating account..." : "Create account"} */}
          </button>
        </div>
        {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
      </div>
    </div>
  );