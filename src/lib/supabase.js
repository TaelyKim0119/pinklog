import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://utgpxmfqtlvrfoarotid.supabase.co'
const supabaseAnonKey = 'sb_publishable__DvdQj7an28sOmUI-9clxA_egYz7Xfl'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
