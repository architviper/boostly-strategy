import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blogData";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { fadeUp } from "@/lib/animations";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  // Simple markdown-like rendering: split by ## headings and ### subheadings
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("### ")) {
        return <h3 key={i} className="font-display text-lg font-semibold text-text-bright mt-8 mb-3">{block.replace("### ", "")}</h3>;
      }
      if (block.startsWith("## ")) {
        return <h2 key={i} className="font-display text-xl font-semibold text-text-bright mt-10 mb-4">{block.replace("## ", "")}</h2>;
      }
      return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1}
            className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readTime}
            </span>
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={2}
            className="text-3xl md:text-4xl font-display font-bold text-text-bright mb-6 leading-tight">
            {post.title}
          </motion.h1>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={3}
            className="flex items-center gap-6 mb-10 pb-8 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="h-4 w-4" /> {post.author}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4}
            className="prose-custom">
            {renderContent(post.content)}
          </motion.div>

          {/* CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
            className="mt-16 surface-glass rounded-2xl p-8 text-center">
            <h3 className="font-display text-lg font-semibold text-text-bright mb-2">
              Ready to build your growth engine?
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Get a free growth audit and discover untapped opportunities.
            </p>
            <Link to="/audit">
              <Button className="bg-gradient-brand text-primary-foreground font-semibold hover:opacity-90">
                Get Your Free Audit
              </Button>
            </Link>
          </motion.div>

          {/* Related Posts */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="font-display text-xl font-semibold text-text-bright mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/blog/${r.slug}`}
                    className="group surface-glass rounded-xl p-5 block hover:glow-border transition-shadow duration-500">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {r.category}
                    </span>
                    <h4 className="font-display text-base font-semibold text-text-bright mt-3 mb-2 group-hover:text-primary transition-colors">
                      {r.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{r.author} · {r.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
