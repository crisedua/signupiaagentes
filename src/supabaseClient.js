import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://zsrsapmejaztlqfineob.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzcnNhcG1lamF6dGxxZmluZW9iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NjI1NDgsImV4cCI6MjA2NjQzODU0OH0.D8ClukFElRyzh5paVAq-GMjpnFnutoZyTOqYp8YP5d0'

console.log('Supabase config:', {
  hasUrl: !!supabaseUrl,
  hasKey: !!supabaseKey,
  urlPreview: supabaseUrl?.substring(0, 30) + '...',
  usingFallback: !process.env.REACT_APP_SUPABASE_URL
})

export const supabase = createClient(supabaseUrl, supabaseKey) 