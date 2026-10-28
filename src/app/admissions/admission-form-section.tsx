import { createSupabaseServerClient } from "@/lib/supabase/server";
import AdmissionForm from "./admission-form";

export default async function AdmissionFormSection() {
  const supabase = createSupabaseServerClient();

  if (!supabase) {
    return (
      <p className="text-sm text-[#657770]">
        Admissions are temporarily unavailable. Please try again later.
      </p>
    );
  }

  const { data: programs, error } = await supabase
    .from("programs")
    .select("id, title, slug, short_description, age_group")
    .eq("is_active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Failed to load admission programs:", error);

    return (
      <p className="text-sm text-[#657770]">
        We could not load the programs right now. Please try again later.
      </p>
    );
  }

  return <AdmissionForm programs={programs ?? []} />;
}