import { supabase } from "@/lib/supabase/client";

export async function getPrograms() {
  const { data, error } = await supabase
    .from("programs")
    .select(
      "id, title, slug, description, age_group, display_order"
    )
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    throw new Error("Unable to load programs.");
  }

  return data;
}