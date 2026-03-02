import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Search, Megaphone, Code, BarChart3, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    tagline: "Maximum ROI from Every Ad Dollar",
    desc: "We build and manage high-performance campaigns across Google Ads, Meta Ads, LinkedIn, and programmatic channels — optimized with AI-driven bidding and audience intelligence.",
    features: [
      "AI-optimized campaign structures",
      "Advanced audience segmentation",
      "Dynamic creative testing",
      "Real-time budget allocation",
      "Cross-channel attribution modeling",
    ],
  },
  {
    icon: Search,
    title: "SEO & Content Strategy",
    tagline: "Compound Organic Growth",
    desc: "Our SEO framework combines technical excellence, strategic content architecture, and AI-powered keyword intelligence to build sustainable organic traffic.",
    features: [
      "Technical SEO audits & fixes",
      "Content cluster strategy",
      "AI-assisted content production",
      "Link building & digital PR",
      "Monthly performance reporting",
    ],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    tagline: "Build Authority, Drive Engagement",
    desc: "Strategic social media management that goes beyond posting — we build brand narratives, grow communities, and drive measurable engagement.",
    features: [
      "Platform strategy & content calendars",
      "Content creation & copywriting",
      "Community engagement",
      "Influencer collaboration",
      "Social analytics & insights",
    ],
  },
  {
    icon: Code,
    title: "Web Design & Development",
    tagline: "Conversion-First Digital Experiences",
    desc: "We design and develop fast, modern websites and landing pages engineered for conversion — every element backed by data and best practices.",
    features: [
      "Custom responsive design",
      "Landing page optimization",
      "Speed & Core Web Vitals",
      "CMS integration",
      "A/B testing setup",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth Intelligence",
    tagline: "Data-Driven Decision Making",
    desc: "Custom analytics setups, dashboards, and reporting frameworks that give you complete visibility into what's working and where to double down.",
    features: [
      "Google Analytics 4 setup",
      "Custom dashboard creation",
      "Conversion tracking",
      "Attribution modeling",
      "Monthly strategy reviews",
    ],
  },
  {
    icon: Globe,
    title: "Brand Strategy & Positioning",
    tagline: "Own Your Market Position",
    desc: "We help brands define their unique value proposition, competitive positioning, and messaging architecture — the foundation for all growth.",
    features: [
      "Market & competitor analysis",
      "Brand messaging framework",
      "Value proposition development",
      "Visual identity guidance",
      "Go-to-market strategy",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Our Services
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-5">
            AI-Powered Growth Solutions
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every service we offer is engineered with strategic depth and enhanced with intelligent automation.
            Here's how we help brands scale.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20">
        <div className="container mx-auto px-6 space-y-10">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
              className="surface-glass rounded-2xl p-8 md:p-10"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-text-bright mb-1">{s.title}</h2>
                  <p className="text-primary text-sm font-medium mb-4">{s.tagline}</p>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-text-bright mb-4 uppercase tracking-wider">What's included</h4>
                  <ul className="space-y-3">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-brand p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-background/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Not Sure Where to Start?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Our free Growth Audit identifies your biggest opportunities and gives you a clear action plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/audit">
                <Button size="lg" className="bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 px-8">
                  Get Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary-foreground text-[#25D366] font-semibold hover:bg-primary-foreground/90 px-8">
                  Connect on WhatsApp
                </Button>
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
