export const CONTACT_EMAIL = "mediahiveai@gmail.com";

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "9bdd4691-582f-4c6b-9ddb-87a410e6400a";

export async function submitContactForm(form: HTMLFormElement): Promise<void> {
  const formData = new FormData(form);
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.set("subject", "New enquiry — MediaHive AI website");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    throw new Error(data.message || "Failed to send enquiry");
  }
}
