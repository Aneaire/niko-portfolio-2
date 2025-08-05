import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Award,
  Clock,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/", description: "Back to homepage" },
    {
      name: "Experience",
      href: "#experience",
      description: "Professional journey",
    },
    { name: "Skills", href: "#skills", description: "Technical expertise" },
    {
      name: "Achievements",
      href: "#achievements",
      description: "Awards & certifications",
    },
    { name: "Contact", href: "/contact", description: "Get in touch" },
  ];

  const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Projects Completed", value: "200+", icon: Star },
    { label: "Happy Clients", value: "95%", icon: Heart },
    { label: "Response Time", value: "24h", icon: Clock },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              <Sparkles className="w-1 h-1 text-blue-400/20" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Main Footer Content */}
        <div
          className={`grid md:grid-cols-4 gap-8 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Brand Section - Enhanced */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <span className="text-white font-bold text-lg">NS</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Niko{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Santiago
                  </span>
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant="outline"
                    className="text-xs px-2 py-1 border-blue-400/30 text-blue-400 bg-blue-400/10"
                  >
                    Available for hire
                  </Badge>
                </div>
              </div>
            </div>

            <p className="text-slate-300 max-w-md leading-relaxed">
              Marketing Director & Digital Strategist passionate about driving
              business growth through innovative marketing solutions and
              data-driven strategies.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                      <IconComponent className="w-3 h-3 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-400">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />
              Quick Navigation
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-between p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300"
                >
                  <div>
                    <div className="font-medium">{link.name}</div>
                    <div className="text-xs text-slate-500 group-hover:text-slate-400">
                      {link.description}
                    </div>
                  </div>
                  <ArrowUp className="w-3 h-3 -rotate-45 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-6">
            <h3 className="font-semibold text-lg text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full" />
              Let's Connect
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Email</span>
                </div>
                <p className="text-sm text-slate-300">
                  Available for new opportunities
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Response Time</span>
                </div>
                <p className="text-sm text-slate-300">Within 24 hours</p>
              </div>

              <div className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-orange-500 to-red-600">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-white font-medium">Location</span>
                </div>
                <p className="text-sm text-slate-300">Remote & Global</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Separator */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-700"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-slate-800 px-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Enhanced */}
        <div
          className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-sm text-slate-400">
                © {currentYear} Niko Santiago. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-500">Made with</span>
                <Heart className="w-3 h-3 text-red-500 animate-pulse" />
                <span className="text-xs text-slate-500">for your success</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://portfolio-8ffa3.web.app/"
                className="group flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>UI Design & Development by Geldev</span>
                <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group bg-slate-800/50 hover:bg-slate-700 border border-slate-600 text-slate-300 hover:text-white transition-all duration-300"
              >
                <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                Back to top
                <div className="ml-2 text-xs text-slate-500">
                  {Math.round(scrollProgress)}%
                </div>
              </Button>
            </div>
          </div>

          {/* Additional Bottom Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-2">
                    <IconComponent className="w-3 h-3" />
                  </div>
                  <div className="text-lg font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </footer>
  );
}
