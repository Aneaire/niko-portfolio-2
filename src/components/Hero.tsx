import ProfilePicture from "@/assets/images/profile-image.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Download,
  Globe,
  Mail,
  MapPin,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Marketing Director",
    "Digital Strategist",
    "Growth Hacker",
    "Brand Architect",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 text-center lg:text-left transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="space-y-6">
              {/* Animated Badge */}
              <div className="flex justify-center lg:justify-start">
                <Badge
                  variant="secondary"
                  className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Star className="w-3 h-3 mr-2 text-yellow-500" />
                  {roles[currentRole]}
                </Badge>
              </div>

              {/* Main Heading with Gradient Text */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                    Niko Santiago
                  </span>
                </h1>

                <div className="relative">
                  <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Transforming businesses through{" "}
                    <span className="font-semibold text-blue-700">
                      strategic marketing
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-purple-700">
                      digital innovation
                    </span>
                    . Passionate about driving growth and creating meaningful
                    connections.
                  </p>
                </div>
              </div>

              {/* Stats Row */}
              <div className="flex items-center justify-center lg:justify-start gap-8 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-xs text-slate-500">Years Experience</div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">200+</div>
                  <div className="text-xs text-slate-500">
                    Projects Completed
                  </div>
                </div>
                <div className="w-px h-12 bg-slate-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-xs text-slate-500">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-white"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Button
                  variant="outline"
                  size="lg"
                  className="group border-2 hover:bg-slate-50 hover:border-blue-300 transition-all duration-300 hover:scale-105"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform opacity-0 group-hover:opacity-100" />
                </Button>
              </div>

              {/* Status Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm">
                <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-full border border-green-200">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-green-700 font-medium">
                    Available for new opportunities
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-200">
                  <Globe className="h-3 w-3 text-blue-600" />
                  <span className="text-blue-700 font-medium">
                    Remote & Global
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced ID Card */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <Card className="relative w-96 h-64 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm border-0">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10" />

              {/* Animated Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse" />

              {/* Floating Particles */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-8 right-12 w-1 h-1 bg-blue-400 rounded-full animate-ping" />
                <div className="absolute top-16 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000" />
                <div className="absolute bottom-12 left-8 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-2000" />
              </div>

              {/* Status Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-700">
                  Available
                </span>
              </div>

              <CardContent className="p-6 h-full relative z-10">
                <div className="flex items-start gap-4 h-full">
                  {/* Photo Section */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Avatar className="h-20 w-20 border-4 border-white shadow-xl ring-2 ring-blue-100">
                        <AvatarImage src={ProfilePicture} alt="Niko Santiago" />
                        <AvatarFallback className="text-lg font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                          NS
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">
                        Niko Santiago
                      </h3>
                      <p className="text-sm text-slate-600 font-medium">
                        {roles[currentRole]}
                      </p>
                    </div>

                    {/* ID Number with Animation */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">ID:</span>
                      <span className="text-xs font-mono bg-gradient-to-r from-blue-100 to-purple-100 px-2 py-1 rounded border border-blue-200">
                        NS-2024-001
                      </span>
                    </div>

                    {/* Enhanced Status Badges */}
                    <div className="flex gap-2 flex-wrap">
                      <Badge
                        variant="outline"
                        className="text-xs bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 transition-colors"
                      >
                        <Zap className="w-3 h-3 mr-1" />
                        Remote Ready
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-green-50 text-green-700 border-green-200 hover:bg-green-100 transition-colors"
                      >
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <MapPin className="h-3 w-3 text-blue-500" />
                        <span>Available Worldwide</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 ">
                        <Clock className="h-3 w-3 text-green-500" />
                        <span>24h Response Time</span>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced QR Code */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center border border-slate-300 hover:shadow-md transition-shadow">
                      <div className="grid grid-cols-3 gap-px">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 ${i % 2 === 0 ? "bg-slate-800" : "bg-slate-400"} rounded-sm`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/20 via-purple-500/40 to-blue-500/20" />
              </CardContent>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs text-slate-500 font-medium">
            Scroll to explore
          </div>
          <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
