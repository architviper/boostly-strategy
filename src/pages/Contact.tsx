import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
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
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-primary" />
                      India (Remote-first)
                    </div>
                    <a href="https://linkedin.com/company/boostly" target="_blank" rel="noopener noreferrer"
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
