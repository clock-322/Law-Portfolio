import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Scale,
  Shield,
  Building2,
  Heart,
  Home as HomeIcon,
  Briefcase,
  FileText,
  Landmark,
  Handshake,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Civil Litigation",
      description:
        "We represent clients in all forms of civil disputes before District Courts, High Courts, and various tribunals.",
      features: [
        "Property disputes & title suits",
        "Contractual disputes & recovery suits",
        "Injunctions & declaratory relief",
        "Specific performance suits",
        "Appeals & revisions",
      ],
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description:
        "Strong defense strategy for individuals facing criminal charges, from investigation to trial.",
      features: [
        "Bail applications (regular & anticipatory)",
        "Trial defense & cross-examination",
        "Quashing petitions",
        "Criminal appeals",
        "White-collar crime defense",
      ],
    },
    {
      icon: Building2,
      title: "Corporate & Commercial Law",
      description:
        "Comprehensive legal support for businesses, startups, and entrepreneurs at every stage.",
      features: [
        "Company incorporation & compliance",
        "Contract drafting & negotiation",
        "Partnership & shareholder disputes",
        "Intellectual property advisory",
        "Regulatory compliance",
      ],
    },
    {
      icon: Heart,
      title: "Family & Matrimonial Law",
      description:
        "Compassionate handling of sensitive family matters with discretion and strong advocacy.",
      features: [
        "Divorce & mutual consent proceedings",
        "Child custody & guardianship",
        "Maintenance & alimony",
        "Domestic violence protection",
        "Adoption & succession",
      ],
    },
    {
      icon: HomeIcon,
      title: "Property & Real Estate",
      description:
        "Expert guidance on all property-related legal matters, from transactions to disputes.",
      features: [
        "Title verification & due diligence",
        "Sale deed & lease agreement drafting",
        "Tenant-landlord disputes",
        "Land acquisition matters",
        "RERA compliance advisory",
      ],
    },
    {
      icon: Briefcase,
      title: "Consumer Protection",
      description:
        "Protecting consumer rights through effective representation before consumer forums.",
      features: [
        "Consumer complaint filing",
        "Product liability claims",
        "Service deficiency matters",
        "Insurance claim disputes",
        "E-commerce disputes",
      ],
    },
    {
      icon: FileText,
      title: "Documentation & Drafting",
      description:
        "Professional drafting of all legal documents, agreements, and instruments.",
      features: [
        "Agreements & contracts",
        "Wills & power of attorney",
        "Legal notices & replies",
        "Affidavits & declarations",
        "MOUs & NDAs",
      ],
    },
    {
      icon: Landmark,
      title: "Constitutional & Writ Matters",
      description:
        "Representation in matters involving fundamental rights and constitutional remedies.",
      features: [
        "Writ petitions before High Court",
        "Public interest litigation",
        "Fundamental rights enforcement",
        "Government order challenges",
        "Administrative law matters",
      ],
    },
    {
      icon: Handshake,
      title: "Alternative Dispute Resolution",
      description:
        "Efficient resolution of disputes through mediation, arbitration, and negotiation.",
      features: [
        "Commercial arbitration",
        "Mediation & conciliation",
        "Negotiated settlements",
        "Lok Adalat representation",
        "Pre-litigation settlements",
      ],
    },
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal solutions across all major practice areas, tailored to protect your rights and interests.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">Services</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Samvidhi Legal Solutions LLP, we offer a wide range of legal services to individuals, families, and businesses. Each case receives personalized attention and strategic planning.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-3 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="bg-royal-blue p-8 lg:p-10 flex flex-col justify-center text-white">
                      <div className="flex items-center mb-4">
                        <div className="w-14 h-14 bg-law-gold/20 rounded-full flex items-center justify-center mr-4">
                          <service.icon className="w-7 h-7 text-law-gold" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-300 leading-relaxed">{service.description}</p>
                    </div>
                    <div className="lg:col-span-2 p-8 lg:p-10">
                      <h4 className="text-lg font-semibold text-royal-blue mb-4">Key Services Include:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-law-gold mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              Why Choose Samvidhi Legal Solutions?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Experienced Team", desc: "Advocates with diverse specializations and courtroom experience." },
              { icon: CheckCircle, title: "Proven Results", desc: "Track record of favorable outcomes across 500+ cases." },
              { icon: Handshake, title: "Personalized Service", desc: "Tailored legal strategies for every client's unique situation." },
              { icon: Scale, title: "Ethical Practice", desc: "Committed to the highest standards of legal ethics and transparency." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-law-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-semibold text-royal-blue mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 relative"
        style={{
          background: "linear-gradient(135deg, #1b0738 0%, #2d1059 50%, #1b0738 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Need Legal Help?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation. Our team will assess your case and provide the best legal strategy.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4 text-lg"
          >
            <Link to="/contact">
              Get Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
