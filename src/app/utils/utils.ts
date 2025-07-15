import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from 'axios';

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// utils/sendContactForm.ts

export async function sendContactForm(formData: ContactFormData) {
  try {
    const response = await axios.post('/prod/contact', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'Failed to send message');
    }
    throw new Error(error.message || 'Failed to send message');
  }
}


