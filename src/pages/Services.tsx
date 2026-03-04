import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Search, TrendingUp, Code, BarChart3, Megaphone, ArrowRight, CheckCircle2 } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";

const services = [
  {
    icon: Target,
    title: "AI-Powered Customer Acquisition",
    tagline: "Predictable Customer Growth with Optimized CAC",
    desc: "Accelerate customer growth with intelligent paid marketing across Meta and Google. We build high-performance acquisition engines using data, automation, and AI-driven campaign optimization.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads (Search, Display, YouTube)",
      "AI-powered ad creative testing",
      "Audience targeting & expansion",
      "Budget optimization",
      "Conversion funnel alignment",
    ],
    outcome: "Predictable customer acquisition with optimized CAC.",
  },
  {
    icon: Search,
    title: "SEO & Content Growth Engine",
    tagline: "Long-Term Organic Growth Through Search Dominance",
    desc: "Build long-term organic growth through search dominance and high-quality content. Our AI-assisted SEO strategy identifies high-value opportunities and scales content production efficiently.",
    features: [
      "Keyword opportunity mapping",
      "AI-assisted content creation",
      "Technical SEO optimization",
      "On-page & off-page SEO",
      "Content cluster strategy",
      "Monthly performance reporting",
    ],
    outcome: "Sustainable, compounding organic traffic and authority.",
  },
  {
    icon: TrendingUp,
    title: "Conversion & Funnel Optimization",
    tagline: "Higher Revenue from Existing Traffic",
    desc: "Getting traffic is only half the battle. We optimize your funnels to convert more visitors into customers. Using data, testing, and behavioral insights, we continuously improve your conversion performance.",
    features: [
      "Landing page optimization",
      "A/B testing frameworks",
      "Conversion rate optimization (CRO)",
      "User behavior analysis",
      "Funnel redesign",
    ],
    outcome: "Higher revenue from existing traffic.",
  },
  {
    icon: Code,
    title: "High-Performance Web Design & Development",
    tagline: "Your Website as Your Most Powerful Growth Asset",
    desc: "Your website should be your most powerful growth asset. We design and build high-performance websites optimized for speed, conversion, and scalability.",
    features: [
      "Growth-focused website design",
      "Landing page systems",
      "Performance optimization",
      "UX/UI improvements",
      "Scalable development architecture",
    ],
    outcome: "A website that actively drives revenue, not just looks good.",
  },
  {
    icon: Megaphone,
    title: "Brand Authority & Social Growth",
    tagline: "Build Category Authority & Community",
    desc: "Build a strong brand presence and establish category authority. We help brands create meaningful engagement through strategic content and social media growth.",
    features: [
      "Social media strategy",
      "Content calendar management",
      "Audience engagement",
      "Brand storytelling",
      "Thought leadership positioning",
    ],
    outcome: "Stronger brand awareness and community growth.",
  },
  {
    icon: BarChart3,
    title: "Growth Analytics & Intelligence",
    tagline: "Data-Driven Decision Making",
    desc: "Make smarter growth decisions with advanced data insights. We implement analytics infrastructure and dashboards that reveal what drives your revenue.",
    features: [
      "Marketing analytics setup",
      "Performance dashboards",
      "Attribution modeling",
      "Campaign insights",
      "Growth forecasting",
    ],
    outcome: "Data-driven decision making at every level.",
  },
];

const engagementModels = [
  { title: "Growth Partner", desc: "Full growth support across all marketing channels — your complete outsourced growth team." },
  { title: "Performance Marketing", desc: "Paid acquisition focused growth across Google, Meta, and programmatic channels." },
  { title: "SEO & Content Growth", desc: "Long-term organic growth strategy with AI-assisted content production." },
  { title: "Conversion Optimization", desc: "Improve conversion rates and revenue per visitor with data-driven CRO." },
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
            Our Growth Services
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-5">
            AI-Powered Growth Systems for Modern Brands
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Instead of selling fragmented services, Boostly builds scalable growth engines powered by data and AI.
            We combine acquisition, conversion, and analytics to help companies grow faster with predictable results.
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20">
        <div className="container mx-auto px-6 space-y-10">
          {services.map((s) => (
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
                  <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/5 border border-primary/20">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">{s.outcome}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-text-bright mb-4 uppercase tracking-wider">What we do</h4>
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

      {/* Engagement Models */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">Flexible Partnerships</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-4">
              Engagement Models
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We offer flexible partnership models depending on your growth stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {engagementModels.map((m, i) => (
              <motion.div key={m.title} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
                className="surface-glass rounded-2xl p-7 hover:glow-border transition-shadow duration-500"
              >
                <h3 className="font-display text-lg font-semibold text-text-bright mb-2">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-brand p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-background/20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Ready to Accelerate Your Growth?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
