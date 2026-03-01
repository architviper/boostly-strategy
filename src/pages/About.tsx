import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Lightbulb, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";

const values = [
  { icon: Lightbulb, title: "Strategic Thinking", desc: "Every decision is backed by data, research, and deep market understanding." },
  { icon: Zap, title: "AI Integration", desc: "We embed intelligent automation into every process for speed and precision." },
  { icon: Users, title: "Partnership Mindset", desc: "We work as an extension of your team, fully aligned with your goals." },
  { icon: Award, title: "Excellence in Execution", desc: "No cutting corners. We hold ourselves to the highest standards of delivery." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
              className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              About Boostly
            </motion.span>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-6 leading-tight">
              Built on Expertise.<br />
              <span className="text-gradient">Accelerated by Intelligence.</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-lg text-muted-foreground leading-relaxed">
              Boostly Technologies was founded with a clear mission: to help ambitious brands achieve predictable,
              scalable growth through the strategic combination of deep marketing expertise and AI-powered systems.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">The Founder</span>
              <h2 className="text-3xl font-display font-bold text-text-bright mb-6">Arpit Tripathi</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With years of hands-on experience in digital marketing, performance advertising, and growth strategy,
                  Arpit built Boostly Technologies to bridge the gap between traditional agency models and the new era
                  of AI-driven marketing.
                </p>
                <p>
                  Having worked across diverse industries — from e-commerce to SaaS, local businesses to enterprise brands —
                  Arpit brings a rare combination of strategic vision and tactical execution. His approach centers on
                  building systems that deliver compounding results, not one-off campaigns.
                </p>
                <p>
                  Today, he leads Boostly's mission to make enterprise-grade growth strategies accessible to ambitious
                  brands at every stage — powered by proprietary frameworks, advanced analytics, and intelligent automation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="surface-glass rounded-2xl p-7">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-bright mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-display font-bold text-text-bright mb-4">Let's Build Something Great Together</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Whether you're looking to scale your marketing or optimize what's already working, we're here to help.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-brand text-primary-foreground font-semibold px-8 hover:opacity-90">
                Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
