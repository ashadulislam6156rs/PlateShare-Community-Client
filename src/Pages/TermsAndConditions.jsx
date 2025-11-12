import React from 'react';
import Container from '../Componants/Container/Container';

const TermsAndConditions = () => {
    return (
      <Container>
        <title>Terms & Conditions - PlateShare Community</title>
        <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 text-gray-800">
          <div className="max-w-4xl mx-auto  p-8">
            <h1 className="text-3xl font-bold text-center mb-6 text-orange-600">
              Terms & Conditions
            </h1>

            <p className="mb-6 text-gray-600 text-center">
              Welcome to <strong>PlateShare</strong>! Please read these Terms
              and Conditions carefully before using our platform.
            </p>

            <section className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the PlateShare website, you agree to
                  comply with these Terms and all applicable laws and
                  regulations. If you do not agree, please do not use our
                  platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  2. Purpose of Service
                </h2>
                <p>
                  PlateShare is a community-based platform that connects food
                  donors with people who need food. We act only as a medium and
                  are not responsible for the quality, safety, or accuracy of
                  the shared food.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  3. User Responsibilities
                </h2>
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    Users must provide accurate information when registering.
                  </li>
                  <li>
                    Donors must ensure that donated food is fresh, safe, and
                    properly packed.
                  </li>
                  <li>
                    Users may not misuse the platform or engage in any illegal
                    activities.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  4. Content Ownership
                </h2>
                <p>
                  All materials, including logos, text, and design, are owned by
                  PlateShare. Unauthorized use or reproduction is strictly
                  prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  5. Limitation of Liability
                </h2>
                <p>
                  PlateShare shall not be held liable for any loss, illness, or
                  damage resulting from food sharing activities or misuse of our
                  platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  6. Privacy Policy
                </h2>
                <p>
                  We respect your privacy. Your personal data will not be shared
                  without your consent. For more details, visit our Privacy
                  Policy page.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2 text-orange-500">
                  7. Changes to Terms
                </h2>
                <p>
                  PlateShare reserves the right to modify these Terms at any
                  time. Updated terms will be effective immediately upon posting
                  on the website.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    );
};

export default TermsAndConditions;