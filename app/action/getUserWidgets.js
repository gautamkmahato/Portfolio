'use server'

import { supabase } from "@/lib/supabase-server";




export async function getUserWidgets() {
  const supa = supabase();
  const { data: { user } } = await supa.auth.getUser();
  if (!user) return [];

  const { data } = await supa
    .from("widgets")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return data;
}

