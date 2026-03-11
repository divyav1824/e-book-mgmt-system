// supabase.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://lzjkqfvwqoldecejdicg.supabase.co'
const SUPABASE_KEY = 'sb_publishable_fj1c5C5Qrkn4NuHaKU7FiA_YVNJKi9V'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)