import { z } from "zod";

export const admissionSchema = z.object({
  parentName: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(20),
  programId: z.string().uuid().optional().or(z.literal("")),
  message: z.string().trim().min(10).max(2000),
});

export type AdmissionFormValues =
  z.infer<typeof admissionSchema>;