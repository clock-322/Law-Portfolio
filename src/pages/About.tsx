import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Shield, Users, Award, Scale, ArrowRight } from "lucide-react";
import Logo from "../img/logo2.jpeg";
import PuneetImg from "../img/puneet.jpeg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in every case, ensuring transparency and honesty in all our dealings.",
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Every client is unique. We tailor our legal strategies to meet your specific needs and circumstances.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in legal research, advocacy, and client communication at every stage.",
    },
    {
      icon: Scale,
      title: "Justice for All",
      description: "We believe quality legal representation should be accessible to everyone, regardless of their background.",
    },
  ];

  const milestones = [
    { year: "2018", event: "Advocate Puneet Kumar Pathak begins legal practice" },
    { year: "2020", event: "Expanded practice areas to include corporate and commercial law" },
    { year: "2022", event: "Samvidhi Legal Solutions LLP formally established" },
    { year: "2023", event: "Crossed 300+ successfully handled cases" },
    { year: "2024", event: "Team expanded with specialized advocates joining the firm" },
    { year: "2025", event: "Crossed 500+ cases and expanded digital legal services" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative py-32 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #1b0738 0%, #2d1059 50%, #1b0738 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Learn about our mission, values, and the dedicated team behind Samvidhi Legal Solutions LLP.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">About Us</span>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-royal-blue">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Samvidhi Legal Solutions LLP was founded by Advocate Puneet Kumar Pathak with a clear vision — to create a law firm that truly puts clients first. The name "Samvidhi" is derived from the Sanskrit concept of lawful arrangement and constitutional order, reflecting our commitment to justice through proper legal channels.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                What started as an individual legal practice has grown into a trusted multi-disciplinary law firm serving clients across Uttar Pradesh. Our team handles cases ranging from civil and criminal litigation to corporate advisory, family disputes, and property matters.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We take pride in our track record of delivering favorable outcomes while maintaining the highest standards of legal ethics and professionalism.
              </p>
            </div>
            <div className="relative flex items-center justify-center bg-gray-50 rounded-lg shadow-2xl p-8">
              <img
                src={Logo}
                alt="Samvidhi Legal Solutions LLP"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={PuneetImg}
                  alt="Advocate Puneet Kumar Pathak"
                  className="rounded-lg shadow-2xl w-80 h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-law-gold text-royal-blue px-6 py-3 rounded-lg font-semibold shadow-lg">
                  Founder & Managing Partner
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-royal-blue">
                Advocate Puneet Kumar Pathak
              </h2>
              <p className="text-law-gold font-semibold text-lg">Founder & Managing Partner</p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Advocate Puneet Kumar Pathak is the driving force behind Samvidhi Legal Solutions LLP. With years of experience in civil litigation, criminal defense, and corporate advisory, he has built a reputation for thorough legal research, strategic advocacy, and unwavering dedication to his clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Puneet's approach to law is rooted in the belief that every individual deserves access to quality legal representation. He is known for his meticulous preparation, courtroom confidence, and ability to simplify complex legal matters for his clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Under his leadership, Samvidhi Legal Solutions has successfully handled over 500 cases across various courts in Uttar Pradesh, earning the trust and respect of clients and peers alike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-law-gold" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To provide accessible, ethical, and result-oriented legal services to individuals, families, and businesses. We strive to empower our clients with legal knowledge and strong representation that protects their rights and interests.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-law-gold rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-royal-blue" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-royal-blue mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To be recognized as a leading law firm known for integrity, innovation, and excellence in legal services. We envision a society where justice is not a privilege but a right available to every citizen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision and action at Samvidhi Legal Solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-law-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-royal-blue mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right mr-6">
                  <span className="text-law-gold font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-law-gold rounded-full mt-1.5"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-5 left-1.5 w-1 h-12 bg-gray-200"></div>
                  )}
                </div>
                <div className="ml-6">
                  <p className="text-gray-700 text-lg">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#D4AE36" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-blue mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today. We are here to help you navigate your legal challenges.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-8 py-4 text-lg"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
