import React from 'react';
import '../assets/css/PrivacyPolicy.css';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-policy-content">
        <p>
          At ArtNest, we are committed to protecting your privacy and ensuring
          the security of your personal information. This Privacy Policy
          explains how we collect, use, and safeguard your data.
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          We may collect various types of information, including personal and
          non-personal data, when you use our platform. This may include your
          name, email address, profile information, and any content you submit.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide and improve our services.
          This includes personalizing content, communicating with you, and
          analyzing usage patterns to enhance user experience.
        </p>

        <h2>3. Data Security</h2>
        <p>
          We implement strict security measures to protect your data from
          unauthorized access, disclosure, or alteration. We regularly review
          our security practices to ensure your information is safe.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell your personal information to third parties. We may
          share your data with trusted partners or service providers to improve
          our services or as required by law.
        </p>

        <h2>5. Your Choices</h2>
        <p>
          You have control over your information. You can update your profile
          and privacy settings, opt-out of promotional emails, and request the
          deletion of your account.
        </p>

        <h2>6. Updates to this Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any significant
          changes will be communicated to you, and your continued use of ArtNest
          constitutes your acceptance of the updated policy.
        </p>

        <h2>7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at privacy@artnest.com.
        </p>

        {/* Add more sections and content as needed */}
      </div>
    </div>
  );
}

export default PrivacyPolicy;
