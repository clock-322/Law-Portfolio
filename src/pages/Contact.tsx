import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    caseType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Samvidhi Legal Solutions LLP. We will get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", subject: "", caseType: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Samvidhi Legal Solutions LLP", "Lucknow, Uttar Pradesh", "India"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["samvidhilegalsolutionsllp@gmail.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      lines: ["Mon-Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get in touch with our legal team for a free initial consultation. We're here to help you with your legal needs.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">Contact</span>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 bg-royal-blue rounded-full flex items-center justify-center">
                      <info.icon className="w-7 h-7 text-law-gold" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-royal-blue mb-3">
                    {info.title}
                  </h3>
                  {info.lines.map((line, lIndex) => (
                    <p key={lIndex} className="text-gray-600 text-sm">
                      {line}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-serif font-bold text-royal-blue mb-4">
                  Send Us a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold focus:ring-1 focus:ring-law-gold transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold focus:ring-1 focus:ring-law-gold transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold focus:ring-1 focus:ring-law-gold transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Case Type
                    </label>
                    <select
                      name="caseType"
                      value={formData.caseType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold focus:ring-1 focus:ring-law-gold transition-colors bg-white"
                    >
                      <option value="">Select case type</option>
                      <option value="civil">Civil Litigation</option>
                      <option value="criminal">Criminal Defense</option>
                      <option value="corporate">Corporate & Commercial</option>
                      <option value="family">Family & Matrimonial</option>
                      <option value="property">Property & Real Estate</option>
                      <option value="consumer">Consumer Protection</option>
                      <option value="documentation">Documentation & Drafting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold focus:ring-1 focus:ring-law-gold transition-colors"
                    placeholder="Brief subject of your query"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold focus:ring-1 focus:ring-law-gold transition-colors resize-none"
                    placeholder="Describe your legal matter briefly..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4 w-full md:w-auto"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Right Column - Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="bg-royal-blue p-8 text-white">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="w-8 h-8 text-law-gold mr-3" />
                    <h3 className="text-2xl font-serif font-bold">Free Legal Consultation</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    We offer a free initial consultation to understand your legal needs. Our advocates will assess your case and provide you with an honest evaluation and the best course of action.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-law-gold rounded-full mr-3"></div>
                      <span className="text-gray-300">No obligation initial consultation</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-law-gold rounded-full mr-3"></div>
                      <span className="text-gray-300">Confidential discussion of your case</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-law-gold rounded-full mr-3"></div>
                      <span className="text-gray-300">Expert legal opinion and strategy</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-law-gold rounded-full mr-3"></div>
                      <span className="text-gray-300">Transparent fee structure discussion</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-xl font-serif font-bold text-royal-blue mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        q: "How long does a consultation take?",
                        a: "Our initial consultations typically last 30-45 minutes, during which we discuss your case and provide preliminary advice.",
                      },
                      {
                        q: "What documents should I bring?",
                        a: "Bring any relevant documents related to your case — agreements, notices, court orders, or correspondence.",
                      },
                      {
                        q: "Do you offer online consultations?",
                        a: "Yes, we offer consultations via phone call and video call for clients who cannot visit our office in person.",
                      },
                    ].map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <p className="font-semibold text-royal-blue mb-1">{faq.q}</p>
                        <p className="text-gray-600 text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100">
        <div className="w-full h-96">
          <iframe
            title="Samvidhi Legal Solutions Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825624477!2d80.77769935!3d26.8492635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
