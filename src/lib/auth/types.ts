export type AuthProvider = 'google' | 'github'

export interface AuthSession {
  user: {
    id: string
    email?: string
    user_metadata: {
      avatar_url?: string
      full_name?: string
      user_name?: string
    }
  } | null
  error: Error | null
}