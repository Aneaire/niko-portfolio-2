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
  Building2,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Shield,
  User,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Ref() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const references = [
    {
      name: "Danny B. Cubacub",
      position: "Senior Operation Manager",
      company: "Expert Solution",
      companyType: "BPO Operations",
      relationship: "Direct Supervisor",
      workPeriod: "2015-2023",
      email: "support@expertsolutionoutsourcingbpo.com",
      email2: "ExpertsolutionHRclark@gmail.com",
      phone: "0454573747",
      location: "Philippines",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      description:
        "Senior operations leader with expertise in BPO management and team development",
    },
    {
      name: "Stephanie Laine Zabala",
      position: "Marketing Manager",
      company: "Arvato Bertelsmann",
      companyType: "Global Services",
      relationship: "Team Colleague",
      workPeriod: "2012-2015",
      email: "Lainezabala07@gmail.com",
      phone: "09973711961",
      location: "Philippines",
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      description:
        "Marketing professional with experience in Facebook operations and digital campaigns",
    },
    {
      name: "Steven Chow",
      position: "Marketing Manager",
      company: "Expert Solution Outsourcing",
      companyType: "Outsourcing BPO",
      relationship: "Business Partner",
      workPeriod: "2013-2014",
      phone: "09973710953",
      email: "sales@expertsolutionoutsourcingbpo.com",
      location: "Philippines",
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      description:
        "Entrepreneur specializing in furniture and fixture retail operations",
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

    const cards = document.querySelectorAll('[data-type="reference-card"]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />

        {/* Professional Network Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.15)_1px,transparent_0)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge
            variant="outline"
            className="text-sm font-medium px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-900 border-blue-200"
          >
            <Users className="w-3 h-3 mr-2 text-blue-600" />
            References
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Professional References
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect with my professional network and colleagues who can vouch
            for my expertise and work ethic.
          </p>
        </div>

        {/* References Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {references.map((ref, index) => {
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                data-index={index}
                data-type="reference-card"
                className={`transform transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 relative overflow-hidden h-full">
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ref.bgColor} opacity-50`}
                  />

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${ref.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Top Accent */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${ref.color}`}
                  />

                  {/* Verification Badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span className="text-xs text-green-700 font-medium">
                      Verified
                    </span>
                  </div>

                  <CardHeader className="pb-4 relative z-10">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${ref.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-lg text-slate-800 group-hover:text-slate-900 transition-colors">
                          {ref.name}
                        </CardTitle>
                        <CardDescription className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Building2 className="h-3 w-3" />
                            <span className="font-medium">{ref.position}</span>
                          </div>
                          <div className="text-sm text-slate-600">
                            {ref.company}
                          </div>
                          <Badge variant="outline" className="text-xs mt-1">
                            {ref.companyType}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {ref.description}
                    </p>

                    {/* Relationship & Period */}
                    <div className="flex items-center justify-between text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                      <span className="font-medium">{ref.relationship}</span>
                      <span>{ref.workPeriod}</span>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-2 pt-2 border-t border-slate-200">
                      {ref.email && (
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-blue-100">
                            <Mail className="h-3 w-3 text-blue-600" />
                          </div>
                          <a
                            href={`mailto:${ref.email}`}
                            className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            {ref.email}
                          </a>
                        </div>
                      )}
                      {ref.email2 && (
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-blue-100">
                            <Mail className="h-3 w-3 text-blue-600" />
                          </div>
                          <a
                            href={`mailto:${ref.email2}`}
                            className="text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                          >
                            {ref.email2}
                          </a>
                        </div>
                      )}
                      {ref.phone && (
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-green-100">
                            <Phone className="h-3 w-3 text-green-600" />
                          </div>
                          <a
                            href={`tel:${ref.phone}`}
                            className="text-xs text-green-600 hover:text-green-800 hover:underline transition-colors"
                          >
                            {ref.phone}
                          </a>
                        </div>
                      )}
                      {ref.location && (
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-orange-100">
                            <MapPin className="h-3 w-3 text-orange-600" />
                          </div>
                          <span className="text-xs text-slate-600">
                            {ref.location}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardContent>

                  {/* Bottom Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${ref.color} opacity-50`}
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
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-full shadow-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>

        {/* Enhanced Certification Statement */}
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-2xl relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-400/5" />
          <div className="absolute top-4 right-4 opacity-10">
            <Award className="h-20 w-20 text-blue-600" />
          </div>

          <CardContent className="p-8 relative z-10">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="p-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl">
                    <CheckCircle2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Professional Certification
                </h3>
                <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                  I do hereby certify that all the information above is{" "}
                  <span className="font-semibold text-blue-700">
                    true and correct
                  </span>
                  . These references represent genuine professional
                  relationships built over years of collaborative work.
                </p>
              </div>

              <div className="flex justify-center items-center gap-4">
                <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm px-4 py-2">
                  <Shield className="w-3 h-3 mr-2" />
                  Verified Information
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm px-4 py-2 border-green-300 text-green-700 bg-green-50"
                >
                  <CheckCircle2 className="w-3 h-3 mr-2" />
                  100% Accurate
                </Badge>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-6 border-t border-blue-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-700">10+</div>
                  <div className="text-sm text-slate-600">Years Network</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-700">3</div>
                  <div className="text-sm text-slate-600">Industries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700">100%</div>
                  <div className="text-sm text-slate-600">Response Rate</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
