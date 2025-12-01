import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "../data/Experiences";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Briefcase, Calendar, MapPin, Users, Clock, Award, Star, Building2 } from "lucide-react";

export const Route = createFileRoute("/experience/$id")({
  component: ExperienceDetail,
  onLoad: () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  },
});

function ExperienceDetail() {
  const { id } = Route.useParams();
  const experience = Experience.find((exp) => exp.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  if (!experience) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 pt-20 px-3 text-gray-800 max-w-6xl mx-auto pb-10">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold mt-5 xl:mt-20 xl:mb-8 xl:text-4xl">
            Experience not found
          </h1>
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-72 h-72 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-10 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="relative z-10 pt-20 px-3 max-w-6xl mx-auto pb-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="group hover:shadow-lg transition-all duration-300">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Experience
            </Button>
          </Link>
        </div>

        {/* Header Card */}
        <Card className="mb-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
          <CardHeader className="relative z-10 pb-6">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="space-y-4 flex-1">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl text-slate-800 mb-2">
                      {experience.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-300">
                      <Briefcase className="w-3 h-3 mr-2" />
                      Professional Experience
                    </Badge>
                  </div>
                </div>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  {experience.titledes}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-600" />
                  Role Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed">{experience.des1}</p>
                {experience.des2 && (
                  <p className="text-slate-700 leading-relaxed">{experience.des2}</p>
                )}
              </CardContent>
            </Card>

            {/* Key Responsibilities */}
            {experience.list && (
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    Key Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {experience.list.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                        <span className="text-slate-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Job Description */}
            {experience.jobDes && (
              <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    {experience.jobDes.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-700 leading-relaxed">{experience.jobDes.des}</p>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-3">Core Functions:</h4>
                    <ul className="space-y-3">
                      {experience.jobDes.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                          <span className="text-slate-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">
                    {experience.titledes.includes("December 2015") ? "December 2015 - November 2025" : "January 2012 - March 2015"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Remote / Global</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">
                    {experience.titledes.includes("December 2015") ? "10+ years" : "3+ years"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-4 w-4 text-slate-500" />
                  <span className="text-sm text-slate-700">Full-time</span>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg text-slate-800">Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {experience.titledes.includes("December 2015") ? (
                    <>
                      <Badge variant="outline" className="text-xs">Strategic Marketing</Badge>
                      <Badge variant="outline" className="text-xs">Brand Management</Badge>
                      <Badge variant="outline" className="text-xs">Digital Marketing</Badge>
                      <Badge variant="outline" className="text-xs">Team Leadership</Badge>
                      <Badge variant="outline" className="text-xs">Operations Management</Badge>
                      <Badge variant="outline" className="text-xs">Business Development</Badge>
                      <Badge variant="outline" className="text-xs">Market Research</Badge>
                      <Badge variant="outline" className="text-xs">Content Writing</Badge>
                    </>
                  ) : (
                    <>
                      <Badge variant="outline" className="text-xs">Facebook Ads</Badge>
                      <Badge variant="outline" className="text-xs">PPC/SEM</Badge>
                      <Badge variant="outline" className="text-xs">Data Analysis</Badge>
                      <Badge variant="outline" className="text-xs">Campaign Management</Badge>
                      <Badge variant="outline" className="text-xs">Social Media</Badge>
                      <Badge variant="outline" className="text-xs">Statistical Analysis</Badge>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-3">Interested in Collaboration?</h3>
                <p className="text-sm mb-4 opacity-90">Let's discuss how I can help drive your business growth</p>
                <div className="flex gap-2">
                  <Link to="/contact" className="flex-1">
                    <Button variant="secondary" size="sm" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      Get in Touch
                    </Button>
                  </Link>
                  <Link to="/" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                      View Other Experiences
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
