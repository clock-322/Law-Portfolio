import React, { useState } from "react";

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAgree = () => {
    setIsOpen(false);
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-white max-w-3xl w-full mx-4 rounded-lg shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 pb-4 border-b border-gray-200 text-center flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-royal-blue">
            DISCLAIMER & CONFIRMATION
          </h2>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 text-gray-700 text-sm leading-relaxed space-y-4">
          <p>
            Under the rules of the Bar Council of India, Samvidhi Legal Solutions is prohibited from soliciting work
            or advertising in any form or manner. By accessing this website, www.Samvidhi.com, you
            acknowledge that:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>
              You are seeking information about Samvidhi Legal Solutions of your own accord and there has been no
              form of solicitation, advertisement or inducement by Samvidhi Legal Solutions or its members.
            </li>
            <li>
              This website should not be construed as providing legal advice for any purpose.
            </li>
            <li>
              All information, content, and materials available on this website are for general
              informational purposes only.
            </li>
            <li>
              Any information obtained or material downloaded from this website is completely at the
              user's volition, and any transmission, receipt or use of this website is not intended
              to, and will not, create any lawyer-client relationship.
            </li>
            <li>
              Information on this website may not constitute the most up-to-date legal or other
              information. Samvidhi Legal Solutions is not liable for the consequences of any action taken by any
              person based on any material or information available on this website, or for any
              inaccuracy in or exclusion of any information or interpretation thereof.
            </li>
            <li>
              Readers of this website or recipients of content or information available on this
              website should not act based on any or all such content or information, and should
              always seek advice of competent legal counsel licensed to practice in the appropriate
              jurisdiction.
            </li>
            <li>
              Third party links contained on this website re-directing users to such third-party
              websites should neither be construed as legal reference / legal advice, nor considered
              as referrals to, endorsements of, or affiliations with, any such third party website
              operators.
            </li>
            <li>
              The communication platform provided on this website should not be used for exchange of
              any confidential, business or politically sensitive information.
            </li>
            <li>
              The contents of this website are the intellectual property of Samvidhi Legal Solutions.
            </li>
          </ul>

          <p>
            We prioritize your privacy. Before proceeding, we encourage you to read our privacy
            policy, which outlines the below, and terms of use to understand how we handle your
            data:
          </p>

          <ul className="list-disc pl-5 space-y-3">
            <li>The types of information we collect and why we collect them.</li>
            <li>How we use your information to provide a personalized experience.</li>
            <li>The measures we take to ensure the security of your data.</li>
            <li>Your rights and choices in managing your personal information.</li>
            <li>How we may share information with trusted partners for specific purpose.</li>
          </ul>

          <p>
            For more information, please read our terms of use and our privacy policy.
          </p>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-gray-200 flex justify-center gap-4 flex-shrink-0">
          <button
            onClick={handleAgree}
            className="px-8 py-3 bg-royal-blue text-white font-semibold rounded-lg hover:bg-royal-blue/90 transition-colors"
          >
            I Agree
          </button>
          <button
            onClick={handleDisagree}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            I Disagree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
