import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  Calendar,
  Crown,
  Medal,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Achievement() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const achievements = [
    {
      year: "2012-2014",
      title: "Best Web Design 2014 Certificate",
      icon: Award,
      category: "Design Excellence",
      description:
        "Recognized for outstanding web design and user experience innovation",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
    },
    {
      year: "2013-2014",
      title: "Real Estate Broker for Solana Land Inc",
      icon: TrendingUp,
      category: "Real Estate",
      description:
        "Licensed real estate broker specializing in commercial and residential properties",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
    },
    {
      year: "2014",
      title: "E-commerce FBA Expert Certificate And Logistics",
      icon: Star,
      category: "E-commerce",
      description:
        "Amazon FBA expertise and logistics management certification",
      color: "from-orange-500 to-amber-600",
      bgColor: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
    },
    {
      year: "2015",
      title: "Top Notch Digital Marketing Manager 2015",
      icon: Trophy,
      category: "Digital Marketing",
      description:
        "Awarded for exceptional performance in digital marketing strategy and execution",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      iconColor: "text-purple-600",
    },
    {
      year: "2016",
      title: "Operations Manager - 2016 Certificates",
      icon: TrendingUp,
      category: "Operations",
      description:
        "Certified in operations management and process optimization",
      color: "from-teal-500 to-cyan-600",
      bgColor: "from-teal-50 to-cyan-50",
      iconColor: "text-teal-600",
    },
    {
      year: "2017",
      title: "Tier 1 Pol ads August 2017",
      icon: Award,
      category: "Advertising",
      description:
        "Advanced political advertising certification and campaign management",
      color: "from-red-500 to-pink-600",
      bgColor: "from-red-50 to-pink-50",
      iconColor: "text-red-600",
    },
    {
      year: "2017",
      title: "Tier 1 Commerce September 2017",
      icon: Star,
      category: "E-commerce",
      description:
        "Top-tier e-commerce platform management and optimization certification",
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
      iconColor: "text-indigo-600",
    },
    {
      year: "2014-2015",
      title: "Excellent sales return Closing a Deal Net worth of 4 Million",
      icon: Crown,
      category: "Sales Achievement",
      description:
        "Outstanding sales performance with multi-million dollar deal closure",
      highlight: true,
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-50 to-orange-50",
      iconColor: "text-yellow-600",
    },
  ];

  const categoryStats = {
    "Design Excellence": {
      count: 1,
      icon: Award,
      color: "bg-blue-100 text-blue-800",
    },
    "Real Estate": {
      count: 1,
      icon: TrendingUp,
      color: "bg-green-100 text-green-800",
    },
    "E-commerce": {
      count: 2,
      icon: Star,
      color: "bg-orange-100 text-orange-800",
    },
    "Digital Marketing": {
      count: 1,
      icon: Trophy,
      color: "bg-purple-100 text-purple-800",
    },
    Operations: { count: 1, icon: Target, color: "bg-teal-100 text-teal-800" },
    Advertising: { count: 1, icon: Zap, color: "bg-red-100 text-red-800" },
    "Sales Achievement": {
      count: 1,
      icon: Crown,
      color: "bg-yellow-100 text-yellow-800",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-type="achievement-card"]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-yellow-50/30 to-orange-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Achievement Stars */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <Sparkles className="w-2 h-2 text-yellow-400/30" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-900 border-yellow-200"
          >
            <Medal className="w-3 h-3 mr-2 text-yellow-600" />
            Recognition
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A testament to excellence and continuous professional development
            across various domains of expertise.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                data-index={index}
                data-type="achievement-card"
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card
                  className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden h-full ${
                    achievement.highlight ? "ring-2 ring-yellow-200" : ""
                  }`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.bgColor} opacity-50`}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Highlight Indicator */}
                  {achievement.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500" />
                  )}

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3 flex-1">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0`}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle
                            className={`text-lg leading-tight group-hover:text-slate-900 transition-colors ${
                              achievement.highlight
                                ? "text-yellow-800"
                                : "text-slate-800"
                            }`}
                          >
                            {achievement.title}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-1 mt-2">
                            <Calendar className="h-3 w-3 flex-shrink-0" />
                            <span className="text-sm">{achievement.year}</span>
                          </CardDescription>
                        </div>
                      </div>
                      {achievement.highlight && (
                        <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs ml-2 flex-shrink-0">
                          <Crown className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className={`text-xs px-3 py-1 border-2 font-medium ${achievement.highlight ? "border-yellow-300 bg-yellow-50 text-yellow-800" : "border-slate-300 text-slate-700"}`}
                      >
                        {achievement.category}
                      </Badge>

                      {achievement.highlight && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                          <Star className="w-3 h-3 text-yellow-500 fill-current" />
                        </div>
                      )}
                    </div>
                  </CardContent>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${achievement.color} opacity-60`}
                  />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Enhanced Separator */}
        <div className="relative flex items-center justify-center my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-4 rounded-full shadow-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        {/* Key Achievement Highlight - Enhanced */}
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5" />
          <div className="absolute top-4 right-4 opacity-10">
            <Trophy className="h-24 w-24 text-yellow-600" />
          </div>

          <CardContent className="p-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="p-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 shadow-xl">
                    <Trophy className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs text-white font-bold">4M</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-700 to-orange-700 bg-clip-text text-transparent">
                  Outstanding Sales Achievement
                </h3>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                  Successfully closed deals with a net worth of{" "}
                  <span className="font-bold text-green-700">
                    4 Million USD
                  </span>
                  , demonstrating exceptional sales acumen and client
                  relationship management skills.
                </p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm px-4 py-2">
                  <Calendar className="w-3 h-3 mr-2" />
                  2014-2015
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm px-4 py-2 border-green-300 text-green-700 bg-green-50"
                >
                  <TrendingUp className="w-3 h-3 mr-2" />
                  $4M Value
                </Badge>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-yellow-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-700">$4M</div>
                  <div className="text-sm text-slate-600">Deal Value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-700">100%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">
                    1 Year
                  </div>
                  <div className="text-sm text-slate-600">Timeline</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
