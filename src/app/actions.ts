'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically handle the form submission,
  // e.g., send an email, save to a database, etc.
  // For this example, we'll just log the data to the console.
  console.log("Form submitted with values:", values);
  
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, you might have error conditions
  // if (error) {
  //   throw new Error("Failed to send message.");
  // }
  
  // You can return a success message
  return { success: true, message: "Message sent successfully!" };
}
