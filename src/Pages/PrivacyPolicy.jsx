import React from 'react';
import Container from '../Componants/Container/Container';

const PrivacyPolicy = () => {
    return (
      <Container>
        <title>Privacy Policy - PlateShare Community</title>
        <section className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold mb-6 text-center text-orange-500">
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-2 text-orange-500">
                Our Commitment
              </h2>
              <p>
                At PlateShare, we deeply value your privacy and are committed to
                protecting your personal information. This policy explains how
                we collect, use, and safeguard your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-orange-500">
                Information We Collect
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>Your name, email, and contact details</li>
                <li>Details about food you share or request</li>
                <li>Usage data and analytics to improve our service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-orange-500">
                How We Use Your Information
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>To connect you with community members</li>
                <li>To enhance your experience on our platform</li>
                <li>To maintain safety, trust, and transparency</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-orange-500">
                Sharing Policy
              </h2>
              <p>
                We do not share your personal information with third parties
                unless required by law or with your explicit consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 text-orange-500">
                Your Rights
              </h2>
              <ul className="list-disc ml-5 space-y-1">
                <li>You can view, edit, or delete your personal data</li>
                <li>You may contact us with any privacy-related questions</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    );
};

export default PrivacyPolicy;