import React from "react";

const AuthButton = ({
    type,
    loading,
}: {
    type: "login" | "Sign up" | "Reset Password" | "Forgot Password";
    loading: boolean;
}) => {
    return (
        <button
        disabled={loading}
        type="submit"
        className="w-full h-12 bg-black text-white rounded-md font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {loading ? "Loading..." : type}
        </button>
    );
};

export default AuthButton;