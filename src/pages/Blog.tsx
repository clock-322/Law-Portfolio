import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Understanding Property Rights in India: A Comprehensive Guide",
      excerpt:
        "Property disputes are among the most common legal issues in India. Learn about your property rights, title verification, and how to protect your real estate investments.",
      author: "Adv. Puneet Kumar Pathak",
      date: "August 5, 2026",
      readTime: "8 min read",
      category: "Property Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    },
    {
      title: "Divorce Proceedings in India: What You Need to Know",
      excerpt:
        "Navigating divorce can be overwhelming. This guide covers the types of divorce, grounds, procedure, maintenance, and child custody provisions under Indian law.",
      author: "Adv. Pragya Phatak",
      date: "July 28, 2026",
      readTime: "10 min read",
      category: "Family Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
    },
    {
      title: "How to File a Consumer Complaint: Step-by-Step Guide",
      excerpt:
        "Consumer protection laws in India empower buyers to seek redressal. Learn how to file a complaint, what documents you need, and what remedies are available.",
      author: "Adv. Pragya Phatak",
      date: "July 15, 2026",
      readTime: "6 min read",
      category: "Consumer Protection",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
    },
    {
      title: "Bail in India: Types, Procedure, and Your Rights",
      excerpt:
        "Understanding bail provisions is crucial if you or someone you know faces criminal charges. Learn about regular bail, anticipatory bail, and the procedure involved.",
      author: "Adv. Puneet Kumar Pathak",
      date: "July 2, 2026",
      readTime: "7 min read",
      category: "Criminal Law",
      image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=600&q=80",
    },
    {
      title: "Starting a Business in India: Legal Checklist for Entrepreneurs",
      excerpt:
        "From choosing the right business structure to obtaining licenses and drafting contracts, here's your legal checklist for starting a business in India.",
      author: "Adv. Puneet Kumar Pathak",
      date: "June 20, 2026",
      readTime: "9 min read",
      category: "Corporate Law",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    },
    {
      title: "Tenant Rights and Landlord Obligations Under Indian Law",
      excerpt:
        "Rent disputes are common in urban India. Understand the rights and obligations of both tenants and landlords, eviction procedures, and rent control laws.",
      author: "Adv. Pragya Phatak",
      date: "June 8, 2026",
      readTime: "7 min read",
      category: "Property Law",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    },
  ];

  const categories = [
    "All",
    "Property Law",
    "Family Law",
    "Criminal Law",
    "Corporate Law",
    "Consumer Protection",
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Legal Insights</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay informed with expert legal articles, guides, and updates from our team at Samvidhi Legal Solutions LLP.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">Blog</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? "bg-royal-blue text-white"
                    : "bg-white text-gray-600 hover:bg-royal-blue hover:text-white border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-royal-blue/60"></div>
                  <span className="bg-law-gold text-royal-blue text-xs font-bold px-3 py-1 rounded-full absolute top-4 left-4 z-10">
                    {post.category}
                  </span>
                  <h3 className="absolute inset-0 flex items-center justify-center text-xl font-serif font-bold text-white text-center leading-tight p-6 z-10">
                    {post.title}
                  </h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span className="truncate max-w-[140px]">{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 mt-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="mt-4 text-royal-blue hover:text-law-gold p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                  >
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-serif font-bold text-royal-blue mb-4">
              Stay Updated with Legal Insights
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive the latest legal articles, guides, and updates from Samvidhi Legal Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-law-gold"
              />
              <Button className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-6 py-3">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 relative"
        style={{
          background: "linear-gradient(135deg, #1b0738 0%, #2d1059 50%, #1b0738 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Have a Legal Question?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help. Reach out for expert legal advice.
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

export default Blog;
