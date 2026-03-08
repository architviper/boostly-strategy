import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, User } from "lucide-react";
import { blogPosts, categories } from "@/lib/blogData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-6">
          <motion.span initial="hidden" animate="visible" variants={fadeUp} custom={0}
            className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block">
            Blog
          </motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="text-4xl md:text-5xl font-display font-bold text-text-bright mb-4">
            Boostly Insights
          </motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-muted-foreground max-w-2xl text-lg mb-10">
            Growth strategies, marketing intelligence, and actionable insights for modern brands.
          </motion.p>

          {/* Category Tabs */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && filtered.length > 0 && (
        <section className="pb-12">
          <div className="container mx-auto px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Link to={`/blog/${filtered[0].slug}`}
                className="group surface-glass rounded-2xl p-8 md:p-12 block hover:glow-border transition-shadow duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {filtered[0].category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {filtered[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-text-bright mb-3 group-hover:text-primary transition-colors">
                      {filtered[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {filtered[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        {filtered[0].author}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(filtered[0].date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                      </span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center">
                    <ArrowRight className="h-8 w-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? filtered.slice(1) : filtered).map((post, i) => (
              <motion.div key={post.slug} initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}>
                <Link to={`/blog/${post.slug}`}
                  className="group surface-glass rounded-2xl p-6 block h-full hover:glow-border transition-shadow duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text-bright mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {post.author} · {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="surface-glass rounded-2xl p-10 max-w-2xl mx-auto">
            <h3 className="font-display text-xl font-semibold text-text-bright mb-3">
              Want Growth Insights Delivered?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're building a newsletter with actionable growth strategies. Stay tuned.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-brand text-primary-foreground font-semibold hover:opacity-90">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
