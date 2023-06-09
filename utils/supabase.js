import { createClient } from "@supabase/supabase-js";
const supabaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC;
const supabase = createClient(supabaseURL, supabaseKey);
export default supabase;
