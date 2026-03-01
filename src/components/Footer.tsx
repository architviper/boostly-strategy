import { Link } from "react-router-dom";
import { Zap, Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <span className="font-display text-lg font-bold text-text-bright">Boostly</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered growth systems for brands ready to scale with precision and intelligence.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-bright mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Performance Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">SEO & Content Strategy</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Social Media Management</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-bright mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/audit" className="hover:text-primary transition-colors">Free Audit</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-bright mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="mailto:hello@boostlytechnologies.com" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/company/boostly" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <Link to="/audit" className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Get your free audit <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Boostly Technologies. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Engineered for growth. Powered by intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
