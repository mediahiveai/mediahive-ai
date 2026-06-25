export const CONTACT_EMAIL = "mediahiveai@gmail.com";

export const COMPANY_NAME = "Media Hive Ltd";
export const COMPANY_NUMBER = "10587007";
export const COMPANY_ADDRESS = {
  line1: "The Whitechapel Centre",
  line2: "85 Myrdle Street",
  city: "London",
  postcode: "E1 1HL",
  country: "United Kingdom",
} as const;

export const COMPANY_ADDRESS_LINE = `${COMPANY_ADDRESS.line1}, ${COMPANY_ADDRESS.line2}, ${COMPANY_ADDRESS.city}, ${COMPANY_ADDRESS.postcode}, ${COMPANY_ADDRESS.country}`;

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
