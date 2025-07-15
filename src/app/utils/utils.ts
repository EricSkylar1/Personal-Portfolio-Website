import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// utils/sendContactForm.ts

export async function sendContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const response = await fetch(
    process.env.API_URL + "/prod/contact",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || `Failed to send message: ${response.statusText}`
    );
  }

  return await response.json();
}


