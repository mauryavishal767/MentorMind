import { createClient as createSupabaseClient } from '@supabase/supabase-js'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { type Database } from '@/types/supabase'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}

if (!supabaseAnonKey) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Client-side Supabase client (with auth context)
// export const createClient = () => {
//   return createClientComponentClient<Database>({
//     supabaseUrl,
//     supabaseKey: supabaseAnonKey,
//   })
// }

// Regular Supabase client for non-auth operations
export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey)