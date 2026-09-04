import React from "react";
import { Link } from "react-router-dom";

const practiceGuides = [
  {
    title: "Cryptoassets Law Guide 2026 - India Chapter",
    date: "Jun 09, 2026",
    categories: ["Financial Services", "FinTech & Digital", "General Corporate (Financing)"],
  },
  {
    title: "Banking Regulation 2026",
    date: "Jun 04, 2026",
    categories: ["Banking & Finance", "Restructuring & Insolvency"],
  },
  {
    title: "Dispute Resolution 2026",
    date: "Jun 02, 2026",
    categories: ["Dispute Resolution"],
  },
  {
    title: "Debt Finance 2026",
    date: "May 12, 2026",
    categories: ["Banking & Finance"],
  },
  {
    title: "International Fraud & Asset Tracing 2026",
    date: "May 11, 2026",
    categories: ["Compliance & Investigation", "White-Collar Crime"],
  },
  {
    title: "Agribusiness 2025",
    date: "Apr 24, 2026",
    categories: ["Agribusiness & Food"],
  },
  {
    title: "Public Procurement 2026",
    date: "Apr 10, 2026",
    categories: ["Government & Public Sector"],
  },
  {
    title: "Aviation Law 2026",
    date: "Mar 05, 2026",
    categories: ["Aviation"],
  },
  {
    title: "Oil & Gas Laws & Regulations 2026",
    date: "Feb 10, 2026",
    categories: ["Energy", "Infrastructure"],
  },
  {
    title: "Real Estate Law 2026",
    date: "Jan 28, 2026",
    categories: ["Real Estate", "Property Law"],
  },
  {
    title: "Corporate Governance 2026",
    date: "Jan 15, 2026",
    categories: ["Corporate Law", "Compliance"],
  },
  {
    title: "Intellectual Property Rights 2026",
    date: "Dec 20, 2025",
    categories: ["Intellectual Property", "Technology"],
  },
];

const PracticeGuide = () => {
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
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Practice Guides</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive legal guides across various practice areas to help you stay informed on the latest legal developments.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-law-gold transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-law-gold">Practice Guides</span>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceGuides.map((guide, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-law-gold uppercase tracking-wider mb-3">
                    Practice Guides
                  </p>
                  <h3 className="text-xl font-serif font-bold text-royal-blue mb-3 leading-snug">
                    {guide.title}
                  </h3>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">
                    {guide.date}
                    {guide.categories.length > 0 && (
                      <span> | {guide.categories.join(", ")}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeGuide;
