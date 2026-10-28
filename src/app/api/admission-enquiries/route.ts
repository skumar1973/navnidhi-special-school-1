
import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const childName = String(body.child_name ?? "").trim();
    const parentName = String(body.parent_name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const phone = String(body.phone ?? "").trim();
    const programId = String(body.program_id ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Basic server-side validation
    if (
      childName.length < 1 ||
      childName.length > 100 ||
      parentName.length < 1 ||
      parentName.length > 100
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter valid names." },
        { status: 400 }
      );
    }

    if (
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (phone.length < 7 || phone.length > 30) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (
      !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
        programId
      )
    ) {
      return NextResponse.json(
        { success: false, error: "Please select a valid program." },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        { success: false, error: "Your message is too long." },
        { status: 400 }
      );
    }

    const supabase = createSupabaseServerClient();

    if (!supabase) {
      console.error("Supabase environment variables are missing.");

      return NextResponse.json(
        { success: false, error: "The service is temporarily unavailable." },
        { status: 503 }
      );
    }

    // Confirm that the chosen program exists and is active.
    const { data: program, error: programError } = await supabase
      .from("programs")
      .select("id")
      .eq("id", programId)
      .eq("is_active", true)
      .maybeSingle();

    if (programError) {
      console.error("Program lookup failed:", programError.message);

      return NextResponse.json(
        { success: false, error: "Unable to verify the selected program." },
        { status: 500 }
      );
    }

    if (!program) {
      return NextResponse.json(
        { success: false, error: "Please select an available program." },
        { status: 400 }
      );
    }

    const { error: insertError } = await supabase
      .from("admission_enquries")
      .insert({
        child_name: childName,
        parent_name: parentName,
        email,
        phone,
        program_id: programId,
        message: message || null,
      });

    if (insertError) {
      console.error("Admission enquiry insert failed:", insertError);

      return NextResponse.json(
        { success: false, error: "Could not submit your enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Your admission enquiry has been submitted." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Admission enquiry API error:", error);

    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
