import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://xxxxxxxxxxxx.supabase.co"
const supabaseAnonkey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"


export const supabase = createClient(supabaseUrl, supabaseAnonkey);

