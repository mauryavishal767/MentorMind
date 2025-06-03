import { NextResponse } from 'next/server'
// The client you created from the Server-Side Auth instructions
import { createClient } from '../../../../utils/supabase/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    // if "next" is in param, use it as the redirect URL
    let next = searchParams.get('next') ?? '/'
    if (!next.startsWith('/')) {
        // if "next" is not a relative URL, use the default
        next = '/'
    }

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            // adding user to user_profiles table
            console.log("getting user");
            const {data, error: userError} = await supabase.auth.getUser();
            if(userError){
                console.error("error feting user", userError);
                return NextResponse.redirect(`${origin}/error`);
            }

            console.log("getting user profile from supabase db");
            const { data: exsistingUser } = await supabase
                .from("user_profiles")
                .select("*")
                .eq("email", data?.user?.email)
                .limit(1)
                .single();


            if(!exsistingUser){
                console.log("inserting user to user_profiles table with");
                console.log("email", data?.user?.email);
                console.log("usrname", data?.user?.user_metadata?.username);
                console.log("data", data);
                const { data: user, error: insertError } = await supabase.from("user_profiles").insert({
                    email: data?.user?.email,
                    username: data?.user?.user_metadata?.user_name,
                });

                if(insertError){
                    console.error("error inserting user", insertError);
                    return NextResponse.redirect(`${origin}/error`);
                }

                console.log("user inserted");
            }

            const forwardedHost = request.headers.get('x-forwarded-host') // original origin before load balancer
            const isLocalEnv = process.env.NODE_ENV === 'development'
            if (isLocalEnv) {
                // we can be sure that there is no load balancer in between, so no need to watch for X-Forwarded-Host
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}