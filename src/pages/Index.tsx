import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Cpu, Target, TrendingUp, Search, Globe, Megaphone, Code, Sparkles, Shield, Zap, ChevronRight, Users, Rocket, Building2, ShoppingCart, Layers } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrowthCalculator from "@/components/GrowthCalculator";

import { fadeUp } from "@/lib/animations";

const stats = [
  { value: "300%", label: "Avg. ROI Increase" },
  { value: "50+", label: "Brands Scaled" },
  { value: "10M+", label: "Revenue Generated" },
  { value: "98%", label: "Client Retention" },
];

const services = [
  {
    icon: Target,
    title: "AI-Powered Customer Acquisition",
    desc: "Intelligent paid campaigns across Meta & Google with AI-driven bidding, audience targeting, and creative optimization.",
  },
  {
    icon: Search,
    title: "SEO & Content Growth Engine",
    desc: "AI-assisted SEO strategy that identifies high-value opportunities and scales content production for long-term organic dominance.",
  },
  {
    icon: TrendingUp,
    title: "Conversion & Funnel Optimization",
    desc: "Data-driven CRO, A/B testing frameworks, and behavioral insights to convert more visitors into customers.",
  },
  {
    icon: Code,
    title: "High-Performance Web Design",
    desc: "Growth-focused websites and landing page systems optimized for speed, conversion, and scalability.",
  },
  {
    icon: Megaphone,
    title: "Brand Authority & Social Growth",
    desc: "Strategic content, brand storytelling, and thought leadership positioning to build category authority.",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics & Intelligence",
    desc: "Advanced analytics infrastructure, attribution modeling, and dashboards that reveal what drives your revenue.",
  },
];

const pillars = [
  {
    icon: Cpu,
    title: "AI-Powered Execution",
    desc: "AI integrated into every layer — campaign optimization, ad creative generation, content production, and predictive analytics.",
  },
  {
    icon: Shield,
    title: "Structured Growth Process",
    desc: "From Growth Audit → Strategy & Roadmap → Execution → Continuous Optimization. No guesswork, just systems.",
  },
  {
    icon: TrendingUp,
    title: "Outcome-Driven Results",
    desc: "Every strategy is measured against revenue impact. We optimize CAC, conversion rates, and lifetime value — not vanity metrics.",
  },
];

const idealClients = [
  { icon: Layers, label: "SaaS Companies" },
  { icon: ShoppingCart, label: "E-commerce Brands" },
  { icon: Building2, label: "Marketplaces" },
  { icon: Rocket, label: "High-Growth Startups" },
  { icon: Globe, label: "Digital-First Businesses" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden" animate="visible" variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">AI-Powered Growth Partner</span>
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-text-bright">AI-Powered Growth Systems</span>
              <br />
              <span className="text-gradient">for Modern Brands</span>
            </motion.h1>

            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Boostly helps companies acquire, convert, and scale customers using AI-driven marketing infrastructure
              across paid media, SEO, conversion optimization, and growth intelligence.
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/audit">
                <Button size="lg" className="bg-gradient-brand text-primary-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity">
                  Get a Growth Strategy
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 hover:bg-secondary">
                  Book a Free Consultation
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] font-semibold text-base px-8 hover:bg-[#25D366]/10">
                  WhatsApp Us
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="surface-glass rounded-xl p-6 text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
              We Build Scalable Growth Engines
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Instead of selling fragmented services, Boostly builds scalable growth engines powered by data and AI.
              We combine acquisition, conversion, and analytics to help companies grow faster with predictable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="surface-glass rounded-2xl p-8 hover:glow-border transition-shadow duration-500"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-bright mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Growth Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
              Our Growth Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end growth solutions engineered with AI-driven precision and strategic depth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="group surface-glass rounded-2xl p-7 hover:glow-border transition-all duration-500"
              >
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-text-bright mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="outline" className="border-border text-foreground hover:bg-secondary font-medium">
                View All Services <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Growth Calculator */}
      <GrowthCalculator />

      {/* Who We Work With */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Ideal Partners</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
              Who We Work With
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Boostly partners with companies that are serious about growth.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {idealClients.map((c, i) => (
              <motion.div key={c.label} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="surface-glass rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <c.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-text-bright">{c.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="relative rounded-3xl bg-gradient-brand p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-background/20" />
            <div className="relative z-10">
              <Zap className="h-10 w-10 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Book a free growth consultation with our team and discover how Boostly can help scale your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 px-8">
                    Book a Strategy Call <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary-foreground text-[#25D366] font-semibold hover:bg-primary-foreground/90 px-8">
                    Connect on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
