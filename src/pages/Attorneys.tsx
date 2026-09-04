import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, ArrowRight, Scale, Briefcase } from "lucide-react";
import PuneetImg from "../img/puneet.jpeg";
import PriyaImg from "../img/priya.jpeg";

const Attorneys = () => {
  const teamMembers = [
    {
      name: "Adv. Puneet Kumar Pathak",
      role: "Founder & Managing Partner",
      image: PuneetImg,
      specializations: ["Civil Litigation", "Criminal Defense", "Corporate Law", "Constitutional Law"],
      education: "B.A. LL.B.",
      experience: "7+ Years",
      courts: "District Courts, High Court of Allahabad",
      bio: "Advocate Puneet Kumar Pathak is the founder and managing partner of Samvidhi Legal Solutions LLP. With extensive experience in civil and criminal litigation, he has established a reputation for strategic legal thinking and client-centered advocacy. Puneet is known for his meticulous case preparation, confident courtroom presence, and ability to navigate complex legal challenges. He has successfully represented clients in hundreds of cases across District Courts and the High Court of Allahabad. His practice encompasses a broad range of legal areas including civil disputes, criminal defense, corporate advisory, and constitutional matters.",
      email: "samvidhilegalsolutionsllp@gmail.com",
      phone: "+91 98765 43210",
    },
    {
      name: "Adv. Pragya Phatak",
      role: "Associate",
      image: PriyaImg,
      specializations: ["Family Law", "Consumer Protection", "Property Disputes", "Documentation"],
      education: "B.A. LL.B.",
      experience: "5+ Years",
      courts: "District Courts, Family Courts, Consumer Forums",
      bio: "Advocate Pragya Phatak is an associate at Samvidhi Legal Solutions LLP, specializing in family and matrimonial law, consumer protection, and property disputes. Known for her empathetic approach and sharp legal acumen, she handles sensitive family matters with discretion and dedication. Pragya has represented numerous clients in divorce proceedings, custody battles, domestic violence cases, and consumer complaints. Her strength lies in her ability to balance compassion with aggressive legal advocacy. She is also adept at legal drafting and documentation, ensuring all legal instruments are precise and comprehensive.",
      email: "samvidhilegalsolutionsllp@gmail.com",
      phone: "+91 98765 43211",
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Our Legal Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Meet the experienced advocates behind Samvidhi Legal Solutions LLP who are committed to protecting your rights.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">Our Team</span>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Photo Card */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-xl overflow-hidden">
                  <div className="w-full h-96 overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <CardContent className="p-6 bg-royal-blue text-white text-center">
                    <h3 className="text-xl font-serif font-bold mb-1">{member.name}</h3>
                    <p className="text-law-gold font-medium mb-4">{member.role}</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="w-10 h-10 bg-law-gold/20 rounded-full flex items-center justify-center hover:bg-law-gold/40 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-law-gold" />
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="w-10 h-10 bg-law-gold/20 rounded-full flex items-center justify-center hover:bg-law-gold/40 transition-colors"
                      >
                        <Phone className="w-5 h-5 text-law-gold" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Details */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-royal-blue mb-2">{member.name}</h2>
                  <p className="text-law-gold font-semibold text-lg">{member.role}</p>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Education</p>
                    <p className="font-semibold text-royal-blue">{member.education}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Experience</p>
                    <p className="font-semibold text-royal-blue">{member.experience}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Courts</p>
                    <p className="font-semibold text-royal-blue text-sm">{member.courts}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-royal-blue mb-3">Areas of Practice</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specializations.map((spec, sIndex) => (
                      <span
                        key={sIndex}
                        className="bg-royal-blue/10 text-royal-blue px-4 py-2 rounded-full text-sm font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-royal-blue mb-6">
              Why Our Team Stands Out
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Deep Legal Expertise",
                desc: "Our advocates possess comprehensive knowledge across multiple areas of law, ensuring well-rounded representation.",
              },
              {
                icon: Briefcase,
                title: "Courtroom Confidence",
                desc: "Years of litigation experience have equipped our team with the skills to handle even the most challenging courtroom situations.",
              },
              {
                icon: Mail,
                title: "Responsive Communication",
                desc: "We keep our clients informed at every stage, providing timely updates and transparent communication throughout the process.",
              },
            ].map((item, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-law-gold" />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-royal-blue mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "#D4AE36" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-blue mb-6">
            Want to Work With Us?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Reach out to one of our advocates today. We'll review your case and provide expert guidance.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-8 py-4 text-lg"
          >
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Attorneys;
