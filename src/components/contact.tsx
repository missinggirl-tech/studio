import { ContactForm } from "./contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto">
      <div className="bento-item">
        <CardHeader className="text-center p-0 mb-6">
          <CardTitle className="text-3xl md:text-4xl font-headline">Get in Touch</CardTitle>
          <CardDescription className="mt-2">Have a question or want to work together? Send me a message!</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <ContactForm />
        </CardContent>
      </div>
    </section>
  );
}
