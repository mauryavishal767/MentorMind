import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const supabase = createRouteHandlerClient({ cookies })
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await supabase.auth.refreshSession()
    
    return NextResponse.json({ message: 'Session refreshed' })
  } catch (error) {
    console.error('Session refresh error:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}