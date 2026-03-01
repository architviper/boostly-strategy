import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { fadeUp } from "@/lib/animations";

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Case Studies
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-5">
            Real Results. Real Brands.
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore how we've helped brands achieve measurable growth through strategic, AI-enhanced marketing systems.
          </motion.p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="surface-glass rounded-2xl p-12 md:p-16 text-center max-w-2xl mx-auto">
            <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-6" />
            <h3 className="font-display text-xl font-semibold text-text-bright mb-3">
              Case Studies Coming Soon
            </h3>
            <p className="text-muted-foreground mb-8">
              We're currently documenting detailed case studies with real client results, metrics, and growth breakdowns.
              Check back soon or get in touch to learn more about our work.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-brand text-primary-foreground font-semibold hover:opacity-90">
                Ask About Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
