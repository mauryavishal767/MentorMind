import ResetPassword from "@/components/ui/ResetPassword";

export default function ResetPasswordPage() {
    return (
        <>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <section className="bg-white rounded-lg shadow-md p-8">
                    <h1 className="text-3xl w-full text-center font-bold mb-6">
                        Reset Password
                    </h1>
                    <ResetPassword />
                </section>
            </div>
        </div>
        </>
    );
}