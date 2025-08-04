import { ContactForm } from "./contact-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";

export function Contact() {
  return (
    <section id="contact" className="max-w-2xl mx-auto">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl md:text-4xl font-headline">Get in Touch</CardTitle>
          <CardDescription className="mt-2">Have a question or want to work together? Send me a message!</CardDescription>
        </CardHeader>
        <CardContent>
          <ContactForm />
        </CardContent>
      </Card>
    </section>
  );
}
