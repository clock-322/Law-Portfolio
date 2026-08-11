import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Shield,
  Gavel,
  Users,
  Award,
  Clock,
  Briefcase,
  Building2,
  Heart,
  Home as HomeIcon,
  ArrowRight,
  Star,
  Phone,
} from "lucide-react";
import HeroBG from "../img/hero-bg.webp";
import WhoWeAreImg from "../img/lawyer-judge-counselor-having-team-meeting-with-client-law-legal-services.webp";
import PuneetImg from "../img/puneet.jpeg";
import PriyaImg from "../img/priya.jpeg";

const Home = () => {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Civil Litigation",
      description:
        "Comprehensive representation in civil disputes including property matters, contractual disagreements, and recovery suits.",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description:
        "Strong and strategic defense in criminal cases, bail applications, and trial advocacy across all courts.",
    },
    {
      icon: Building2,
      title: "Corporate & Commercial Law",
      description:
        "Business formation, compliance, contract drafting, partnership disputes, and corporate governance advisory.",
    },
    {
      icon: Heart,
      title: "Family & Matrimonial Law",
      description:
        "Sensitive handling of divorce, custody, maintenance, and domestic violence cases with compassion and discretion.",
    },
    {
      icon: HomeIcon,
      title: "Property & Real Estate",
      description:
        "Title verification, property disputes, tenant-landlord matters, and real estate transaction support.",
    },
    {
      icon: Briefcase,
      title: "Consumer Protection",
      description:
        "Filing and defending consumer complaints, product liability claims, and service deficiency matters.",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Cases Handled" },
    { icon: Award, number: "10+", label: "Years Combined Experience" },
    { icon: Gavel, number: "98%", label: "Client Satisfaction" },
    { icon: Clock, number: "24/7", label: "Legal Support" },
  ];

  const lawyers = [
    {
      name: "Adv. Puneet Kumar Pathak",
      role: "Founder & Managing Partner",
      image: PuneetImg,
      specialization: "Civil Litigation, Criminal Defense & Corporate Law",
      description:
        "A dedicated advocate with deep expertise in civil and criminal litigation. Puneet founded Samvidhi Legal Solutions LLP with a vision to make quality legal services accessible to all.",
    },
    {
      name: "Adv. Priya Sharma",
      role: "Senior Associate",
      image: PriyaImg,
      specialization: "Family Law, Consumer Protection & Property Disputes",
      description:
        "An accomplished advocate specializing in family and matrimonial law. Priya brings empathy and sharp legal acumen to every case she handles.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Gupta",
      text: "Samvidhi Legal Solutions handled my property dispute with exceptional professionalism. Highly recommend their team.",
      rating: 5,
    },
    {
      name: "Sunita Verma",
      text: "Puneet sir and his team guided me through a difficult divorce with compassion and strong legal support. Forever grateful.",
      rating: 5,
    },
    {
      name: "Amit Srivastava",
      text: "Their corporate advisory helped my business navigate complex compliance requirements seamlessly.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 1) 19%, rgba(27, 7, 56, 1) 65%, rgba(254, 188, 56, 1) 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${HeroBG})` }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <p className="text-law-gold text-lg md:text-xl font-medium mb-4 tracking-wider uppercase animate-fade-in">
            Samvidhi Legal Solutions LLP
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Empowering <span className="text-law-gold">Justice.</span>
            <br />
            Enabling Progress.
          </h1>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We provide dedicated legal representation with unwavering commitment
            to protecting your rights. From civil disputes to corporate
            advisory, our experienced team delivers results you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              asChild
              size="lg"
              className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-xl"
            >
              <Link to="/contact">Schedule Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-[#1B0738] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              <Link to="/about">Know More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: "#D4AE36" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-law-gold" />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-royal-blue mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-700 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold text-royal-blue">
                Who We Are
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Samvidhi Legal Solutions LLP is a full-service law firm founded
                by Advocate Puneet Kumar Pathak. We are driven by a singular
                mission — to empower individuals and businesses with accessible,
                ethical, and result-oriented legal services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of dedicated advocates brings together diverse
                expertise spanning civil litigation, criminal defense, corporate
                law, family law, and property disputes. We believe every client
                deserves a voice, and we work tirelessly to ensure that justice
                is served with integrity and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4"
                >
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white font-semibold px-8 py-4"
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={WhoWeAreImg}
                alt="Team at Samvidhi Legal Solutions"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-royal-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              Our Practice Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive legal services across multiple practice
              areas, delivering expert counsel tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-royal-blue rounded-full flex items-center justify-center group-hover:bg-law-gold transition-colors duration-300">
                      <area.icon className="w-10 h-10 text-law-gold group-hover:text-royal-blue transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-royal-blue mb-4">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-8 py-4"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Meet Our Lawyers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              Meet Our Legal Experts
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of experienced advocates is dedicated to providing
              personalized legal solutions with the highest standards of
              professionalism and ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {lawyers.map((lawyer, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <div className="w-full h-80 overflow-hidden bg-gray-100">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-royal-blue/90 to-transparent p-6">
                    <h3 className="text-xl font-serif font-bold text-white">
                      {lawyer.name}
                    </h3>
                    <p className="text-law-gold font-medium text-sm">
                      {lawyer.role}
                    </p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-law-gold font-semibold mb-3">
                    {lawyer.specialization}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {lawyer.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-8 py-4"
            >
              <Link to="/attorneys">
                View Full Team <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by hundreds of clients across Uttar Pradesh for delivering
              reliable legal solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-law-gold fill-law-gold"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-royal-blue">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500">Verified Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-royal-blue text-royal-blue hover:bg-royal-blue hover:text-white font-semibold px-8 py-4"
            >
              <Link to="/testimonials">
                Read More Reviews <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative"
        style={{
          background:
            "linear-gradient(135deg, #1b0738 0%, #2d1059 50%, #1b0738 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you're facing a legal dispute or need expert advisory, our
            team is ready to help. Get a free initial consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4 text-lg rounded-lg"
            >
              <Link to="/contact">
                Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-royal-blue font-semibold px-8 py-4 text-lg rounded-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              +91 98765 43210
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
