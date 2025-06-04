import { getUser } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    
    const resposne  = await getUser();
    if(resposne?.user){
        redirect("/dashboard");
    }

    return (
        <>
            {children}
        </>
    );
}