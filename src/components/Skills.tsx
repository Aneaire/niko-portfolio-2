import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Award,
  BarChart3,
  CheckCircle2,
  Mail,
  Search,
  Settings,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [visibleBadges, setVisibleBadges] = useState(new Set());
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Email Marketing & Automation",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      count: 7,
      skills: [
        { name: "HubSpot", level: 95 },
        { name: "Klaviyo", level: 90 },
        { name: "Sendinblue", level: 85 },
        { name: "Benchmark Email", level: 88 },
        { name: "Mailchimp", level: 92 },
        { name: "Mailerlite", level: 87 },
        { name: "Zendesk", level: 83 },
      ],
    },
    {
      title: "Analytics & Metrics",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
      count: 5,
      skills: [
        { name: "Spring Metrics", level: 80 },
        { name: "Kissmetrics", level: 88 },
        { name: "Google Analytics", level: 95 },
        { name: "Google Tag Manager (GTM)", level: 90 },
        { name: "Email integrations", level: 85 },
      ],
    },
    {
      title: "SEO & SEM Tools",
      icon: Search,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      iconColor: "text-green-600",
      count: 5,
      skills: [
        { name: "SEMRush: Marketing SEO", level: 92 },
        { name: "KWFinder: SEO Keyword", level: 88 },
        { name: "Moz Pro: SEO Software", level: 85 },
        { name: "Google Ads", level: 90 },
        { name: "SpyFu: Free SEO Tool", level: 82 },
      ],
    },
    {
      title: "Design & Development",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      iconColor: "text-orange-600",
      count: 3,
      skills: [
        { name: "UX / UI Design", level: 88 },
        { name: "Web Developer tools", level: 85 },
        { name: "Google My Business (GMB)", level: 90 },
      ],
    },
  ];

  const coreCompetencies = [
    {
      name: "Digital Marketing Strategy",
      icon: TrendingUp,
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      name: "Campaign Management",
      icon: Settings,
      color: "bg-purple-100 text-purple-800 border-purple-300",
    },
    {
      name: "Data Analysis",
      icon: BarChart3,
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      name: "Customer Acquisition",
      icon: Users,
      color: "bg-orange-100 text-orange-800 border-orange-300",
    },
    {
      name: "Brand Development",
      icon: Award,
      color: "bg-pink-100 text-pink-800 border-pink-300",
    },
    {
      name: "Performance Marketing",
      icon: Zap,
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      name: "Conversion Optimization",
      icon: TrendingUp,
      color: "bg-indigo-100 text-indigo-800 border-indigo-300",
    },
    {
      name: "Team Leadership",
      icon: Users,
      color: "bg-teal-100 text-teal-800 border-teal-300",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              (entry.target as HTMLElement).dataset.index || "0"
            );
            const type = (entry.target as HTMLElement).dataset.type || "";

            if (type === "card") {
              setTimeout(() => {
                setVisibleCards((prev) => new Set([...prev, index]));
              }, index * 150);
            } else if (type === "badge") {
              setTimeout(() => {
                setVisibleBadges((prev) => new Set([...prev, index]));
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-type="card"]');
    const badges = document.querySelectorAll('[data-type="badge"]');

    cards.forEach((card) => observer.observe(card));
    badges.forEach((badge) => observer.observe(badge));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 border-blue-200"
          >
            <Star className="w-3 h-3 mr-2 text-yellow-500" />
            Expertise
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise across digital marketing, analytics, and web
            technologies to drive business growth and user engagement.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={index}
                data-index={index}
                data-type="card"
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden h-full">
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.bgColor} opacity-50`}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                        >
                          <IconComponent className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-lg text-slate-800 group-hover:text-slate-900 transition-colors">
                            {category.title}
                          </CardTitle>
                          <div className="flex items-center gap-1 mt-1">
                            <Badge
                              variant="secondary"
                              className="text-xs px-2 py-1"
                            >
                              {category.count} tools
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 relative z-10">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-slate-700 font-medium group-hover/skill:text-slate-900 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-xs text-slate-500 font-mono">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Skill Progress Bar */}
                        <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 150 + skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}
                  />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Separator with Animation */}
        <div className="relative flex items-center justify-center my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-sm uppercase">
            <span className="bg-slate-50 px-6 py-2 text-slate-500 font-medium rounded-full border border-slate-200">
              Core Competencies
            </span>
          </div>
        </div>

        {/* Core Competencies */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">
            Strategic & Leadership Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {coreCompetencies.map((competency, index) => {
              const IconComponent = competency.icon;
              const isVisible = visibleBadges.has(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  data-type="badge"
                  className={`transform transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-4 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Badge
                    variant="outline"
                    className={`text-sm px-4 py-2 border-2 hover:shadow-lg transition-all duration-300 hover:scale-105 ${competency.color} font-medium`}
                  >
                    <IconComponent className="w-3 h-3 mr-2" />
                    {competency.name}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Tools Mastered", value: "20+", icon: Settings },
            { label: "Years Experience", value: "10+", icon: Award },
            { label: "Certifications", value: "15+", icon: Star },
            { label: "Success Rate", value: "95%", icon: TrendingUp },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-slate-800 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
