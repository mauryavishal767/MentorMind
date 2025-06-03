"use client";

import { create } from "domain";
import { useEffect, useState } from "react";
import { createClient } from "../../../utils/supabase/client";
import { toast } from "sonner";

export default function ClientComponent() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        async function getUser() {
        const supabase = createClient();
        const { data, error } = await supabase.auth.getUser();
        if(error || !data?.user){
            console.log("user dont exisits");
            toast.error("User doesn't exist");
        } else {
            setUser(data?.user);
        }
        }
        getUser();
    }, []);

    return <h2>{user?.email}</h2>;
}