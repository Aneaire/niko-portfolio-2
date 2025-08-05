import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, Eye, Play, Star, Video, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function VideoPlay() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTag, setCurrentTag] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tags = [
    "Digital Marketing",
    "Growth Strategy",
    "Brand Development",
    "Content Creation",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % tags.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-2000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

        {/* Floating Particles */}
        <div className="absolute top-16 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping" />
        <div className="absolute top-32 right-1/4 w-1.5 h-1.5 bg-purple-400/60 rounded-full animate-ping delay-1000" />
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-pink-400/60 rounded-full animate-ping delay-2000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div
          className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Animated Badge */}
          <div className="flex justify-center">
            <Badge
              variant="secondary"
              className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Star className="w-3 h-3 mr-2 text-yellow-500" />
              Portfolio Showcase
            </Badge>
          </div>

          {/* Main Title with Gradient */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Work
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Watch this showcase of my{" "}
            <span className="font-semibold text-blue-700">
              digital marketing expertise
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-700">
              strategic approach
            </span>{" "}
            to driving business growth.
          </p>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-8 py-4">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600">500K+</div>
              <div className="text-xs text-slate-500">Views Generated</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-bold text-purple-600">85%</div>
              <div className="text-xs text-slate-500">Engagement Rate</div>
            </div>
            <div className="w-px h-8 bg-slate-200" />
            <div className="text-center">
              <div className="text-xl font-bold text-green-600">3.2x</div>
              <div className="text-xs text-slate-500">ROI Increase</div>
            </div>
          </div>
        </div>

        {/* Enhanced Video Card */}
        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Card className="relative w-full max-w-4xl shadow-2xl overflow-hidden group hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] bg-white/90 backdrop-blur-sm border-0">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />

            {/* Animated Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-pulse" />

            {/* Status Indicator */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium text-green-700">
                Live Project
              </span>
            </div>

            <CardHeader className="text-center pb-6 relative z-10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="relative">
                  <Video className="h-6 w-6 text-blue-600" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-ping" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  WordPress Marketing Strategy
                </CardTitle>
              </div>

              <CardDescription className="text-base text-slate-600 max-w-2xl mx-auto">
                A comprehensive overview of digital marketing strategies and
                implementation that{" "}
                <span className="font-semibold text-purple-700">
                  transformed business growth
                </span>
              </CardDescription>

              {/* Dynamic Tag */}
              <div className="flex justify-center mt-4">
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-800 border-blue-200 transition-all duration-500"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  {tags[currentTag]}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-0 relative">
              <div className="relative group/video">
                {/* Video Container */}
                <div className="relative overflow-hidden rounded-b-lg">
                  <video
                    className="w-full aspect-video transition-all duration-500 group-hover/video:scale-105"
                    autoPlay
                    controlsList="nodownload"
                    muted
                    loop
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src="/wordpress.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Enhanced Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-sm">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full p-6 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                      {/* Ripple Effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping" />
                      <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse delay-75" />
                    </div>
                  </div>

                  {/* Video Stats Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                      <Eye className="w-3 h-3 text-white" />
                      <span className="text-xs text-white font-medium">
                        2.1K views
                      </span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <span className="text-xs text-white font-medium">
                        HD Quality
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/30 via-purple-500/50 to-blue-500/30" />
            </CardContent>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </Card>
        </div>

        {/* Enhanced Bottom Section */}
        <div
          className={`text-center mt-12 space-y-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-slate-600 max-w-2xl mx-auto">
            This video demonstrates my approach to{" "}
            <span className="font-semibold text-blue-700">
              digital marketing
            </span>{" "}
            and{" "}
            <span className="font-semibold text-purple-700">
              strategic thinking
            </span>
          </p>

          {/* Enhanced Tags */}
          <div className="flex justify-center gap-3 flex-wrap">
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 border-blue-200 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <CheckCircle2 className="w-3 h-3 mr-1" />
              Digital Marketing
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800 border-purple-200 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Zap className="w-3 h-3 mr-1" />
              Strategy
            </Badge>
            <Badge
              variant="secondary"
              className="bg-gradient-to-r from-green-100 to-green-50 text-green-800 border-green-200 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <Star className="w-3 h-3 mr-1" />
              WordPress
            </Badge>
          </div>

          {/* Success Metrics */}
          <div className="flex items-center justify-center gap-6 py-4">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">
                Client Success Story
              </span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <Eye className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">
                Featured Case Study
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
