import { supabase } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const supa = supabase();
  const { data: { user } } = await supa.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await request.json();
  const { name, greeting, theme, position } = body;

  const { data, error } = await supa
    .from("widgets")
    .update({ name, greeting, theme, position })
    .eq("id", params.id)
    .eq("user_id", user.id)
    .select();

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });

  return NextResponse.json({ success: true, widget: data[0] });
}

export async function DELETE(request, { params }) {
    const supa = supabase();
    const { data: { user } } = await supa.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  
    const { error } = await supa
      .from("widgets")
      .delete()
      .eq("id", params.id)
      .eq("user_id", user.id);
  
    if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  
    return NextResponse.json({ success: true });
}
  