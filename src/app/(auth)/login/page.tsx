import LoginForm from "@/components/ui/LoginForm";
import LoginGithub from "@/components/ui/LoginGithub";
import LoginGoogle from "@/components/ui/LoginGoogle";
import Link from "next/link";

export default function LoginPage() {
    return (
        <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
            <section className="bg-white rounded-lg shadow-md p-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        Welcome back
                    </h1>
                    <p className="text-gray-600 text-sm">
                        Choose your preferred login method
                    </p>
                </div>

                {/* OAuth Buttons */}
                <div className="space-y-3 mb-6">
                    <LoginGoogle  />
                    <LoginGithub  />
                </div>

                {/* Divider */}
                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">OR CONTINUE WITH</span>
                    </div>
                </div>

                {/* Login Form */}
                <LoginForm />

                {/* Footer Links */}
                <div className="mt-6 flex justify-between text-sm">
                    <div>
                        <span className="text-gray-600">Don't have an account? </span>
                        <Link className="text-black hover:text-gray-700 font-medium cursor-pointer" href="/register">
                            Sign up
                        </Link>
                    </div>

                    <Link className="text-black hover:text-gray-700 font-medium cursor-pointer" href="/forgot-password">
                        Reset password
                    </Link>
                </div>
            </section>
        </div>
        </div>
        </>
    );
}