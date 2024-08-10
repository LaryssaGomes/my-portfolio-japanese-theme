"use server";

import EmailTemplate from "@/components/EmailTemplate";
import apiError from "@/functions/api-error";
import { Resend } from "resend";

export default async function postSendEmail(state: {}, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const resend = new Resend("re_M15fhGxa_7UzAMEdWwrjvaUtRedAFW8TX");
    await resend.emails.send({
      from: "laryssag533@resend.dev",
      to: email,
      subject: subject,
      react: EmailTemplate({ name, email, message }),
    });

    return { data: null, ok: true, error: "" };
  } catch (error: unknown) {
    return apiError(error);
  }
}
