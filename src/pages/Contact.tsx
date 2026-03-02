import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0} className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Contact</span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-5">Let's Talk Growth</h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Ready to scale? Have a question? Drop us a line and we'll get back to you within 24 hours.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-10">
              {/* Form */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
                className="md:col-span-3">
                <form onSubmit={handleSubmit} className="surface-glass rounded-2xl p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                      <Input placeholder="Your name" value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-secondary border-border" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input type="email" placeholder="you@company.com" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-secondary border-border" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                    <Input placeholder="Company name" value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="bg-secondary border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                    <Textarea placeholder="Tell us about your goals..." value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-secondary border-border min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-brand text-primary-foreground font-semibold hover:opacity-90">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>

              {/* Info */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={2}
                className="md:col-span-2 space-y-6">
                <div className="surface-glass rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-text-bright mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <a href="mailto:hello@boostlytechnologies.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                      hello@boostlytechnologies.com
                    </a>
                    <a href="tel:+918826273645" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                      +91 88262 73645
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#25D366] transition-colors">
                      <svg className="h-4 w-4 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Connect on WhatsApp
                    </a>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      India (Remote-first)
                    </div>
                    <a href="https://www.linkedin.com/in/arpit-social-media-specialist-152a16209/" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4 text-primary" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="surface-glass rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-text-bright mb-2">Prefer a Free Audit?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get a comprehensive analysis of your digital marketing — completely free.
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10" asChild>
                    <a href="/audit">Request Audit</a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
