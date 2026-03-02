import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Cpu, Target, TrendingUp, Search, Globe, Megaphone, Code, Sparkles, Shield, Zap, ChevronRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    title: "Performance Marketing",
    desc: "AI-optimized paid campaigns across Google, Meta & LinkedIn that maximize every rupee of ad spend.",
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    desc: "Data-driven SEO frameworks and content systems that build compounding organic traffic.",
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    desc: "Strategic brand presence with content calendars, community engagement, and growth analytics.",
  },
  {
    icon: Code,
    title: "Web Design & Development",
    desc: "Conversion-optimized websites and landing pages built for speed, clarity, and results.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Custom dashboards and deep-dive analytics that turn data into actionable growth insights.",
  },
  {
    icon: Globe,
    title: "Brand Strategy & Positioning",
    desc: "Market research, competitor analysis, and brand frameworks that carve out your unique space.",
  },
];

const pillars = [
  {
    icon: Cpu,
    title: "AI-Powered Systems",
    desc: "We integrate AI into every layer — from audience targeting to creative optimization and predictive analytics.",
  },
  {
    icon: Shield,
    title: "Proprietary Frameworks",
    desc: "Our Growth Audit Framework™ and Performance Matrices are built from years of real-world execution.",
  },
  {
    icon: TrendingUp,
    title: "Results-First Approach",
    desc: "Every strategy is measured against revenue impact. Vanity metrics don't pay the bills.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-glow/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">AI-Powered Growth Partner</span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight mb-6"
            >
              <span className="text-text-bright">Scale Smarter with</span>
              <br />
              <span className="text-gradient">Intelligent Growth Systems</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Boostly Technologies combines deep marketing expertise with AI-driven strategies to help ambitious brands
              achieve predictable, scalable growth — without the guesswork.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/audit">
                <Button size="lg" className="bg-gradient-brand text-primary-foreground font-semibold text-base px-8 hover:opacity-90 transition-opacity">
                  Get Your Free Growth Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-[#25D366] text-[#25D366] font-semibold text-base px-8 hover:bg-[#25D366]/10">
                  Connect on WhatsApp
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-border text-foreground font-semibold text-base px-8 hover:bg-secondary">
                  Explore Services
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={5}
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

      {/* Why Boostly */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Why Boostly</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
              Not Just Another Agency
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We build growth systems, not campaigns. Our proprietary frameworks combine human strategic thinking
              with AI acceleration to deliver compounding results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Services</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
              Full-Stack Growth Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end digital marketing services engineered with AI-driven precision and strategic depth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
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

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative rounded-3xl bg-gradient-brand p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-background/20" />
            <div className="relative z-10">
              <Zap className="h-10 w-10 text-primary-foreground mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Unlock Your Growth Potential?
              </h2>
              <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
                Get a comprehensive, no-obligation audit of your digital presence. We'll identify gaps,
                opportunities, and a clear roadmap to scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/audit">
                <Button size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 px-8">
                  Claim Your Free Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/20 px-8">
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
