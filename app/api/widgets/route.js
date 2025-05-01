import { supabase } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(request) {
  const supa = supabase();
//   const { data: { user } } = await supa.auth.getUser();

//   if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { name, greeting, theme, position } = body;

  const { data, error } = await supa.from("widgets").insert({
    name,
    greeting,
    theme,
    position,
    user_id: 'user123',
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ success: true, widget: data[0] });
}
