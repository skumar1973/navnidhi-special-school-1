import { supabase } from "@/lib/supabase/client";
import {
  admissionSchema,
  type AdmissionFormValues,
} from "@/lib/validations/admission";

export async function submitAdmissionEnquiry(
  values: AdmissionFormValues
) {
  const parsed = admissionSchema.safeParse(values);

  if (!parsed.success) {
    throw new Error("Please check the form fields.");
  }

  const data = parsed.data;

  const { error } = await supabase
    .from("admission_enquiries")
    .insert({
      parent_name: data.parentName,
      email: data.email,
      phone: data.phone,
      program_id: data.programId || null,
      message: data.message,
    });

  if (error) {
    console.error("Admission enquiry submission failed", {
      code: error.code,
    });

    throw new Error(
      "We could not submit your enquiry. Please try again."
    );
  }

  return { success: true };
}
