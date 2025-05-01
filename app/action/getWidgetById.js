'use server';

import { supabase } from "@/lib/supabase-server";

export async function getWidgetById(id) {
  const supa = supabase(); // ✅ properly call the function to get client

  const {
    data: { user },
    error: userError,
  } = await supa.auth.getUser();

  if (userError || !user) return null;

  const { data, error } = await supa
    .from("widgets")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.error("Error fetching widget:", error.message);
    return null;
  }

  return data;
}
