import { Link } from "react-router-dom";
import { Zap, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

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
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/audit" className="hover:text-primary transition-colors">Free Audit</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-text-bright mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a href="mailto:hello@boostlytechnologies.com" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366]/30 transition-colors" aria-label="WhatsApp">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/arpit-social-media-specialist-152a16209/" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Connect on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <Link to="/audit" className="text-sm text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
              Get your free audit <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
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
