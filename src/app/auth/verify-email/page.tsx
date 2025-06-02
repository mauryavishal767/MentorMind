import { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address",
}

export default function VerifyEmailPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-full max-w-[400px]">
        <CardHeader className="text-center">
          <CardTitle>Check your email</CardTitle>
          <CardDescription>
            We&apos;ve sent you a verification link. Please check your email and click the link to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-sm text-muted-foreground">
          Once verified, you can continue to sign in.
        </CardContent>
        <CardFooter className="justify-center">
          <Link
            href="/auth/login"
            className="text-sm text-primary underline-offset-4 transition-colors hover:underline"
          >
            Back to login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}