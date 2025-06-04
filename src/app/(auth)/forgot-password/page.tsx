import ForgotPassword from "@/components/ui/ForgotPassword";

export default function ForgotPasswordPage() {
    return (
        <>
        <div className="min-h-screen border bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
            <section className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl w-full text-center font-bold mb-6">
                    Forgot Password
                </h1>
                <ForgotPassword />
            </section>
        </div>
        </div>
        </>
    );
}