import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  Calendar,
  Clock,
  MapPin,
  Star,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Experiences() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Real experience data with enhanced formatting
  const Experience = [
    {
      id: "hk23g4jqasd",
      title: "Director of Marketing and Sales/Senior Operations Manager",
      company: "Expert Solutions Outsourcing",
      titledes:
        "Digital Marketing line of Business - handled Marketing Experts, Web Developer, SEO, Customer Service OM, Amazon FBA Expert",
      period: "December 2015 - September 2023",
      duration: "7+ years",
      location: "Remote / Global",
      type: "Full-time",
      des1: "Lead the marketing team in planning and executing marketing activities such as but not limited to Market Research and Analytics, Market Scanning, Forecasting and Budgeting, Marketing program execution, Sales support activities and Business Development etc.",
      des2: "As Director of Marketing in Digital Marketing Agency, I oversee the daily performance Marketing team and Sales team. This includes the analysis and review of the day-to-day operations, Marketing Ads, budget management, team development, Business development and client satisfaction.",
      achievements: [
        "Managed global brand awareness campaigns across all social media platforms",
        "Led cross-functional teams including Marketing Experts, Web Developers, SEO specialists",
        "Oversaw daily performance of Marketing and Sales teams",
        "Developed strategic marketing plans and business development initiatives",
      ],
      skills: [
        "Strategic Marketing",
        "Brand Management",
        "Digital Marketing",
        "Team Leadership",
        "Operations Management",
        "Business Development",
      ],
      responsibilities: [
        "Brand Awareness globally by running SEM, PPC, and ads across all Social media Platforms",
        "Strategic Marketing and Brand/Product Management",
        "Digital Marketing and Events Management",
        "Market Research and Content Writing",
        "Marketing Communications and team development",
      ],
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
    },
    {
      id: "aksdjhoasd",
      title: "Project Manager/Marketing Manager",
      company: "Arvato Bertelsmann (Facebook Inc. - Horizon)",
      titledes:
        "Project Manager/Marketing Manager for the Line of Business, Horizon also known as Facebook Inc.",
      period: "January 2012 - March 2015",
      duration: "3+ years",
      location: "Global Operations",
      type: "Full-time",
      des1: "I oversee planning, implementing, and monitoring our digital marketing campaigns across all digital networks. Experience in marketing, art direction, and social media management. In addition to being an outstanding communicator, I also demonstrate excellent interpersonal and analytical skills.",
      des2: "Approved Facebook Ads Run Ads PPC/SEM and managed data analysis using statistical techniques for Facebook advertising optimization.",
      achievements: [
        "Managed Facebook advertising campaigns and PPC/SEM operations",
        "Developed data collection systems optimizing statistical efficiency",
        "Protected sensitive information for Facebook users",
        "Coordinated with advertising and media experts to improve marketing results",
      ],
      skills: [
        "Facebook Ads",
        "PPC/SEM",
        "Data Analysis",
        "Campaign Management",
        "Social Media Management",
        "Statistical Analysis",
      ],
      responsibilities: [
        "Interpreting data and analyzing results using statistical techniques for Facebook",
        "Developing and implementing data analyses and data collection systems",
        "Designing and overseeing digital marketing department operations",
        "Managing campaign budgets and social media platforms",
        "Preparing accurate reports on marketing campaign performance",
      ],
      color: "from-indigo-500 to-blue-600",
      bgColor: "from-indigo-50 to-blue-50",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 200);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-type="experience-card"]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900 border-indigo-200"
          >
            <Briefcase className="w-3 h-3 mr-2 text-indigo-600" />
            Experience
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A track record of delivering exceptional results and driving
            business growth through strategic marketing initiatives.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500 hidden md:block" />

          <div className="space-y-8">
            {Experience.map((exp, index) => {
              const isCurrent = exp.id === "aksdjhoasd";
              const isVisible = visibleCards.has(index);
              const isHovered = hoveredCard === index;

              return (
                <div
                  key={exp.id}
                  data-index={index}
                  data-type="experience-card"
                  className={`relative transform transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 hidden md:block">
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}
                    />
                  </div>

                  <Card
                    className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-[1.02] md:ml-16 relative overflow-hidden ${
                      isCurrent ? "ring-2 ring-indigo-200" : ""
                    }`}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.bgColor} opacity-30`}
                    />

                    {/* Hover Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Current Role Indicator */}
                    {isCurrent && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-600" />
                    )}

                    <CardHeader className="relative z-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className="space-y-3 flex-1">
                          <div className="flex items-center gap-3 flex-wrap">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} shadow-lg`}
                            >
                              <Building2 className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-xl text-slate-800 group-hover:text-slate-900 transition-colors">
                                {exp.title}
                              </CardTitle>
                              <div className="text-sm text-slate-600 font-medium mt-1">
                                {exp.company}
                              </div>
                            </div>
                          </div>

                          <CardDescription className="text-base text-slate-700 font-medium">
                            {exp.titledes}
                          </CardDescription>
                        </div>

                        <div className="flex flex-col gap-2 lg:text-right">
                          <div className="flex items-center gap-2 lg:justify-end">
                            <Calendar className="h-4 w-4 text-slate-500" />
                            <Badge
                              variant="secondary"
                              className={`${isCurrent ? "bg-green-100 text-green-800 border-green-300" : "bg-slate-100 text-slate-700"}`}
                            >
                              {isCurrent ? "Current" : "Previous"}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-slate-600 lg:justify-end">
                            <Clock className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-slate-600 lg:justify-end">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6 relative z-10">
                      <div className="space-y-4">
                        <p className="text-slate-700 leading-relaxed">
                          {exp.des1}
                        </p>
                        {exp.des2 && (
                          <p className="text-slate-700 leading-relaxed">
                            {exp.des2}
                          </p>
                        )}
                      </div>

                      {/* Responsibilities Section */}
                      {exp.responsibilities && (
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                            <Trophy className="h-4 w-4 text-yellow-600" />
                            Key Responsibilities
                          </h4>
                          <div className="space-y-2">
                            {exp.responsibilities
                              .slice(0, 3)
                              .map((responsibility, respIndex) => (
                                <div
                                  key={respIndex}
                                  className="flex items-start gap-2 text-sm"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                  <span className="text-slate-700">
                                    {responsibility}
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      )}

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                          <Award className="h-4 w-4 text-green-600" />
                          Key Achievements
                        </h4>
                        <div className="grid sm:grid-cols-1 gap-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                              <span className="text-slate-700">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-slate-800 flex items-center gap-2">
                          <Star className="h-4 w-4 text-blue-600" />
                          Core Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs px-3 py-1 border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Section */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                        <div className="flex items-center gap-4 text-sm text-slate-600">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{exp.type}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{exp.duration}</span>
                          </div>
                        </div>
                        <Link
                          className="link white-btn"
                          to={`/experience/${exp.id}`}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className={`group transition-all duration-300 hover:shadow-lg ${
                              isHovered ? "bg-slate-50 border-slate-400" : ""
                            }`}
                          >
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>

                    {/* Bottom Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-50`}
                    />
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Separator */}
        <div className="relative flex items-center justify-center my-16">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-3 rounded-full shadow-lg">
              <Award className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how I can help drive your business growth through
              strategic marketing and digital innovation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="group text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <TrendingUp className="mr-2 h-4 w-4 " />
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <a
              href="https://calendly.com/expertsolutionoutsourcingbpo-support/30min?month=2025-08"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="group border-2 hover:bg-slate-50 transition-all duration-300"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </a>
          </div>

          {/* Contact Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for new projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>24h response time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
