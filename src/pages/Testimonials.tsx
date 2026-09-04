import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Gupta",
      location: "Lucknow",
      caseType: "Property Dispute",
      rating: 5,
      text: "Samvidhi Legal Solutions handled my property dispute case with exceptional professionalism. Puneet sir personally ensured every detail was covered. The case was resolved in our favor within a reasonable timeline. Highly recommend their services!",
    },
    {
      name: "Sunita Verma",
      location: "Lucknow",
      caseType: "Divorce & Custody",
      rating: 5,
      text: "Going through a divorce was the hardest phase of my life. Priya ma'am at Samvidhi guided me through every step with compassion and strong legal support. They fought for my custody rights and we got a favorable outcome. Forever grateful to this team.",
    },
    {
      name: "Amit Srivastava",
      location: "Kanpur",
      caseType: "Corporate Compliance",
      rating: 5,
      text: "As a startup founder, navigating legal compliance was overwhelming. The team at Samvidhi helped us with company registration, contract drafting, and regulatory compliance. Their corporate advisory is top-notch and very affordable.",
    },
    {
      name: "Meera Patel",
      location: "Lucknow",
      caseType: "Consumer Complaint",
      rating: 5,
      text: "I had filed a complaint against a builder who delayed possession of my flat by two years. Samvidhi Legal Solutions took up my case at the consumer forum and we received full compensation along with interest. Very efficient team!",
    },
    {
      name: "Vikram Singh",
      location: "Varanasi",
      caseType: "Criminal Defense",
      rating: 5,
      text: "My brother was falsely implicated in a criminal case. We were desperate for help. Puneet sir took the case, prepared a strong defense, and got bail within the first hearing. His courtroom presence and legal knowledge are impressive.",
    },
    {
      name: "Anita Mishra",
      location: "Lucknow",
      caseType: "Domestic Violence",
      rating: 5,
      text: "Samvidhi Legal Solutions gave me the strength to fight for my rights. Priya ma'am handled my domestic violence case with sensitivity and determination. I now have a protection order and feel safe. They truly empower justice.",
    },
    {
      name: "Ravi Kumar Yadav",
      location: "Allahabad",
      caseType: "Land Dispute",
      rating: 4,
      text: "Had a long-standing land dispute that other lawyers couldn't resolve. Samvidhi Legal Solutions took a strategic approach and we finally got a favorable decree. Their attention to detail in documentation was remarkable.",
    },
    {
      name: "Pooja Agarwal",
      location: "Lucknow",
      caseType: "Maintenance Case",
      rating: 5,
      text: "After my divorce, I needed help with maintenance proceedings. The team was extremely supportive and professional. They secured a fair maintenance amount for me and my children. Thank you, Samvidhi!",
    },
    {
      name: "Deepak Tripathi",
      location: "Gorakhpur",
      caseType: "Civil Recovery",
      rating: 5,
      text: "I had lent a significant amount to a friend who refused to return it. Samvidhi filed a recovery suit and handled the entire process smoothly. The case was resolved through mediation and I got my money back. Excellent work!",
    },
  ];

  const averageRating = (
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
  ).toFixed(1);

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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Client Testimonials</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear from our clients about their experience with Samvidhi Legal Solutions LLP.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">Testimonials</span>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12" style={{ backgroundColor: "#D4AE36" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-royal-blue mb-2">{averageRating}/5</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-royal-blue fill-royal-blue" />
                ))}
              </div>
              <p className="text-gray-700 font-medium">Average Rating</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-royal-blue mb-2">500+</h3>
              <p className="text-gray-700 font-medium">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-royal-blue mb-2">98%</h3>
              <p className="text-gray-700 font-medium">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-law-gold/30 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-law-gold fill-law-gold" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-royal-blue rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-royal-blue">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">
                          {testimonial.caseType} | {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            Join Our Satisfied Clients
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the Samvidhi difference. Get expert legal representation backed by a track record of success.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4 text-lg"
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

export default Testimonials;
