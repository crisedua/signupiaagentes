import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY

console.log('Environment check:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseKey,
  url: supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'undefined'
})

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables:', {
    REACT_APP_SUPABASE_URL: supabaseUrl,
    REACT_APP_SUPABASE_ANON_KEY: supabaseKey ? 'EXISTS' : 'MISSING'
  })
  throw new Error(`Missing Supabase environment variables. URL: ${!!supabaseUrl}, Key: ${!!supabaseKey}`)
}

export const supabase = createClient(supabaseUrl, supabaseKey) 