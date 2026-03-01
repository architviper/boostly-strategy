import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileSearch, BarChart3, Target, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";

const auditIncludes = [
  "Website & landing page performance review",
  "SEO health check & keyword opportunity analysis",
  "Paid advertising account audit (if applicable)",
  "Social media presence & engagement assessment",
  "Competitor benchmarking snapshot",
  "Actionable recommendations & growth roadmap",
];

const steps = [
  { icon: FileSearch, title: "We Analyze", desc: "Deep dive into your digital presence, channels, and current performance." },
  { icon: BarChart3, title: "We Identify", desc: "Pinpoint gaps, missed opportunities, and quick wins across your marketing." },
  { icon: Target, title: "We Strategize", desc: "Build a prioritized roadmap with clear next steps to accelerate growth." },
  { icon: Lightbulb, title: "We Present", desc: "Walk you through findings with a detailed report — zero obligations." },
];

const Audit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
              className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
              Free Growth Audit
            </motion.span>
            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-5 leading-tight">
              Discover What's Holding<br />
              <span className="text-gradient">Your Growth Back</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-lg text-muted-foreground mb-8">
              Get a comprehensive, no-strings-attached audit of your digital marketing — powered by our proprietary
              Growth Audit Framework™. Identify gaps, uncover opportunities, and get a clear path forward.
            </motion.p>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-brand text-primary-foreground font-semibold px-8 hover:opacity-90">
                  Request Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Four simple steps to unlocking your brand's growth potential.</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="text-center">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-xs text-primary font-semibold mb-1">Step {i + 1}</div>
                <h3 className="font-display font-semibold text-text-bright mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h2 className="text-3xl font-display font-bold text-text-bright mb-8 text-center">What's Included</h2>
              <div className="surface-glass rounded-2xl p-8 space-y-4">
                {auditIncludes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground mt-6">
                100% free. No obligations. Just actionable insights to grow your business.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Audit;
