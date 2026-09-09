import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './legal.css'

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Encegen AI Labs'
  }, [])

  return (
    <div className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <span className="legal-hero__badge">Legal &amp; Compliance</span>
          <h1 className="legal-hero__title">Privacy Policy</h1>
          <div className="legal-hero__meta">
            <span><strong>Effective Date:</strong> May 24, 2025</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> February 21, 2026</span>
          </div>
        </div>
      </header>

      <main className="legal-body">
        <article className="legal-card">
          <div className="legal-intro">
            <p>
              This Privacy Policy explains how <strong>Encegen AI Labs Pvt. Ltd.</strong> ("Encegen", "we", "us", or "our") collects, uses, processes, stores, and protects personal data obtained through our official website (<Link to="/" style={{ color: '#6d28d9', textDecoration: 'underline' }}>encegen.com</Link>), customer portals, demonstration platforms, and related online services (collectively, the "Services").
            </p>
            <p>
              We are committed to maintaining the confidentiality, integrity, and security of your personal data in accordance with applicable data protection laws, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Digital Personal Data Protection Act, 2023 (DPDPA), and where applicable, the General Data Protection Regulation (GDPR).
            </p>
          </div>

          {/* 1. About Encegen */}
          <section className="legal-section">
            <h2 className="legal-section__heading">1. About Encegen</h2>
            <p>
              Encegen AI Labs Pvt. Ltd. was incorporated on 24 May 2025 as a technology company specializing in Artificial Intelligence, enterprise automation, process intelligence, document understanding, and custom software engineering.
            </p>
            <p>
              Our corporate offices are located in Pune, Maharashtra, India:
            </p>
            <ul>
              <li><strong>Wagholi Office:</strong> BA HUB, Office no: 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207, Maharashtra, India.</li>
              <li><strong>Pashan Office:</strong> Legismith Partners LLP, Pashan, Pune, Maharashtra, India.</li>
            </ul>
          </section>

          {/* 2. Information We Collect */}
          <section className="legal-section">
            <h2 className="legal-section__heading">2. Information We Collect</h2>
            <p>
              We collect information that identifies, relates to, describes, or is reasonably capable of being associated with you ("Personal Information") across different interactions with our website and platforms.
            </p>

            <h3 className="legal-section__subheading">A. Information You Provide Directly</h3>
            <p>
              When you interact with our website, request product demonstrations, enquire about solutions, download resources, or communicate with our team, we may collect:
            </p>
            <ul>
              <li><strong>Contact Identifiers:</strong> Name, business email address, phone number, job title, company name, and industry sector.</li>
              <li><strong>Communication Records:</strong> Details submitted in contact forms, consultation inquiries, enterprise demo requests, support messages, or feedback.</li>
              <li><strong>Account Credentials:</strong> Usernames and encrypted authentication credentials when accessing authenticated client or enterprise evaluation portals.</li>
            </ul>

            <h3 className="legal-section__subheading">B. Job Application Information</h3>
            <p>
              When you apply for career opportunities at Encegen AI Labs through our Careers portal, we collect:
            </p>
            <ul>
              <li>Resume/CV data, covering letters, employment history, educational qualifications, certifications, and portfolios (e.g., GitHub, LinkedIn, personal websites).</li>
              <li>Contact details, current and expected compensation, notice period availability, and work authorization status.</li>
              <li>Interview notes, assessment responses, and reference check information.</li>
            </ul>

            <h3 className="legal-section__subheading">C. Automatically Collected Information</h3>
            <p>
              When you browse our website, our servers and analytics tools may automatically record standard technical data, including:
            </p>
            <ul>
              <li><strong>Device &amp; Network Data:</strong> IP address, browser type and version, operating system, device identifiers, and language preferences.</li>
              <li><strong>Usage Telemetry:</strong> Pages visited, time spent per page, clickstream patterns, referring URLs, access timestamps, and scroll depth.</li>
            </ul>
          </section>

          {/* 3. How We Use Personal Information */}
          <section className="legal-section">
            <h2 className="legal-section__heading">3. How We Use Personal Information</h2>
            <p>
              We process your Personal Information strictly for legitimate business purposes and service operations, including:
            </p>
            <ul>
              <li>Delivering, operating, maintaining, and improving our website and enterprise AI platforms.</li>
              <li>Scheduling, configuring, and conducting personalized product demonstrations and consultations.</li>
              <li>Responding promptly to enquiries, feedback, RFP submissions, and customer support tickets.</li>
              <li>Evaluating candidates for recruitment and managing talent pipelines.</li>
              <li>Conducting technical diagnostics, preventing fraudulent or malicious activities, and ensuring network security.</li>
              <li>Sending necessary transactional notices, administrative updates, and security alerts.</li>
              <li>Complying with statutory, regulatory, and legal obligations under applicable Indian and international laws.</li>
            </ul>
          </section>

          {/* 4. Legal Basis and Consent */}
          <section className="legal-section">
            <h2 className="legal-section__heading">4. Legal Basis and Consent</h2>
            <p>
              We process personal data based on one or more of the following lawful grounds:
            </p>
            <ul>
              <li><strong>Consent:</strong> Where you have provided clear, affirmative consent (e.g., opting in to newsletters, requesting a consultation, or submitting a job application).</li>
              <li><strong>Contractual Necessity:</strong> Where processing is required to enter into or perform a contract with you or your organization.</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests in operating secure, high-quality enterprise AI services, provided those interests do not override your fundamental rights.</li>
              <li><strong>Legal Obligation:</strong> Where required to comply with court orders, regulatory mandates, or statutory reporting obligations.</li>
            </ul>
          </section>

          {/* 5. Business Enquiries and Demo Requests */}
          <section className="legal-section">
            <h2 className="legal-section__heading">5. Business Enquiries and Demo Requests</h2>
            <p>
              Information submitted through contact forms or demo booking widgets is utilized exclusively to understand your operational requirements, evaluate technical feasibility, and connect you with the appropriate solutions engineer or executive. We do not sell, rent, or lease enquiry contact details to third-party marketing brokers.
            </p>
          </section>

          {/* 6. Recruitment Information */}
          <section className="legal-section">
            <h2 className="legal-section__heading">6. Recruitment Information</h2>
            <p>
              Candidate data submitted via our Careers page is processed solely for hiring purposes. Resumes and candidate records are stored securely within our recruitment database and accessed only by authorized human resources personnel and interviewing managers. If an applicant is not selected for a given role, their resume may be retained for up to 12 months for consideration against future openings, after which it is securely deleted.
            </p>
          </section>

          {/* 7. Cookies and Similar Technologies */}
          <section className="legal-section">
            <h2 className="legal-section__heading">7. Cookies and Similar Technologies</h2>
            <p>
              We use cookies, local storage, and similar web technologies to enable core site functionality, remember your preferences (such as selected language), and analyze website performance.
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for site navigation, security, and load balancing.</li>
              <li><strong>Preference Cookies:</strong> Store language selection and UI state across sessions.</li>
              <li><strong>Analytical Cookies:</strong> Provide aggregate traffic and usage insights without identifying individuals directly.</li>
            </ul>
            <p>
              You can modify your browser settings to block or delete cookies; however, certain interactive features of the website may not function properly without essential cookies.
            </p>
          </section>

          {/* 8. Analytics and Third-Party Technologies */}
          <section className="legal-section">
            <h2 className="legal-section__heading">8. Analytics and Third-Party Technologies</h2>
            <p>
              We may utilize privacy-conscious analytics and hosting providers (such as cloud infrastructure providers, content delivery networks, and diagnostic tools) to measure website reliability and user experience. These service providers process data strictly on our behalf under binding confidentiality and data protection agreements.
            </p>
          </section>

          {/* 9. How We Share Information */}
          <section className="legal-section">
            <h2 className="legal-section__heading">9. How We Share Information</h2>
            <p>
              Encegen does <strong>not sell, monetize, or trade</strong> your personal information. We disclose personal data only under the following limited circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who provide cloud hosting, database management, email delivery, and security scanning under strict confidentiality obligations.</li>
              <li><strong>Corporate Affiliates:</strong> Internal entities, branches, or subsidiaries for administrative and technical support.</li>
              <li><strong>Legal Compliance:</strong> When required by law enforcement, judicial authority, or legal process to comply with valid subpoenas or statutory investigations.</li>
              <li><strong>Business Transitions:</strong> In connection with a merger, acquisition, corporate restructuring, or asset transfer, where the acquiring entity agrees to uphold the terms of this Privacy Policy.</li>
            </ul>
          </section>

          {/* 10. International Data Transfers */}
          <section className="legal-section">
            <h2 className="legal-section__heading">10. International Data Transfers</h2>
            <p>
              Your information is primarily stored and processed on secure cloud servers located in India and tier-1 secure global cloud data centers. If data is transferred cross-border, we ensure appropriate safeguards are implemented in compliance with applicable data transfer regulations.
            </p>
          </section>

          {/* 11. Data Retention */}
          <section className="legal-section">
            <h2 className="legal-section__heading">11. Data Retention</h2>
            <p>
              We retain personal data only for the duration necessary to fulfill the purposes for which it was collected, resolve disputes, enforce agreements, and meet statutory accounting and legal requirements. When personal data is no longer needed, it is deleted or rendered permanently anonymized.
            </p>
          </section>

          {/* 12. Data Security */}
          <section className="legal-section">
            <h2 className="legal-section__heading">12. Data Security</h2>
            <p>
              We implement industry-standard technical, organizational, and physical security measures to protect your personal data from unauthorized access, loss, misuse, alteration, or destruction. These measures include:
            </p>
            <ul>
              <li>End-to-end TLS 1.3 encryption for data in transit.</li>
              <li>AES-256 encryption for data at rest.</li>
              <li>Role-based access controls (RBAC) and least-privilege administrative access policies.</li>
              <li>Regular security reviews, vulnerability assessments, and automated audit trails.</li>
            </ul>
            <div className="legal-highlight">
              While we adhere to the highest enterprise security standards, no method of electronic transmission or cloud storage is 100% immune from security risks. We encourage users to maintain strong passwords and exercise caution online.
            </div>
          </section>

          {/* 13. Your Rights */}
          <section className="legal-section">
            <h2 className="legal-section__heading">13. Your Rights</h2>
            <p>
              Subject to applicable laws, you may exercise the following rights regarding your personal information:
            </p>
            <ul>
              <li><strong>Right to Access:</strong> Request confirmation of whether we process your data and obtain a summary of your personal information.</li>
              <li><strong>Right to Correction:</strong> Request correction or updating of inaccurate, outdated, or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data where retention is no longer necessary.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw previously given consent for marketing or specific processing activities at any time.</li>
              <li><strong>Right to Grievance Redressal:</strong> Submit grievances regarding the processing of your personal information to our designated Grievance Officer.</li>
            </ul>
            <p>
              To exercise any of these rights, please write to us at <a href="mailto:privacy@encegen.com" style={{ color: '#6d28d9', textDecoration: 'underline' }}>privacy@encegen.com</a>.
            </p>
          </section>

          {/* 14. Children's Privacy */}
          <section className="legal-section">
            <h2 className="legal-section__heading">14. Children's Privacy</h2>
            <p>
              Our website and enterprise AI services are intended exclusively for commercial organizations, professionals, and individuals aged 18 and older. We do not knowingly collect or solicit personal data from children under the age of 18. If we become aware that personal information from a minor has been collected without verifiable parental consent, we will take immediate steps to delete the data.
            </p>
          </section>

          {/* 15. Third-Party Websites */}
          <section className="legal-section">
            <h2 className="legal-section__heading">15. Third-Party Websites</h2>
            <p>
              Our website may include links to third-party websites, external research portals, or social media networks. We do not control and are not responsible for the privacy practices, content, or data protection policies of such third-party sites. We encourage you to review their respective privacy notices.
            </p>
          </section>

          {/* 16. Changes to This Privacy Policy */}
          <section className="legal-section">
            <h2 className="legal-section__heading">16. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our technology, operational practices, legal obligations, or regulatory requirements. Any modifications will be posted on this page with an updated "Last Updated" date. Continued use of our website after such changes constitutes acceptance of the revised policy.
            </p>
          </section>

          {/* 17. Contact and Grievance */}
          <section className="legal-section">
            <h2 className="legal-section__heading">17. Contact and Grievance</h2>
            <p>
              For any questions, concerns, clarifications, or complaints regarding this Privacy Policy or our data handling practices, you may reach out to our team:
            </p>
            <div className="legal-contact-box">
              <p><strong>Encegen AI Labs Pvt. Ltd.</strong></p>
              <p><strong>Attention:</strong> Data Privacy &amp; Grievance Officer</p>
              <p><strong>Email:</strong> <a href="mailto:privacy@encegen.com">privacy@encegen.com</a> / <a href="mailto:contact@encegen.com">contact@encegen.com</a></p>
              <p><strong>Wagholi Office:</strong> BA HUB, Office no: 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207, Maharashtra, India</p>
              <p><strong>Pashan Office:</strong> Legismith Partners LLP, Pashan, Pune, Maharashtra, India</p>
            </div>
          </section>

          {/* 18. Governing Law */}
          <section className="legal-section">
            <h2 className="legal-section__heading">18. Governing Law</h2>
            <p>
              This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to this Policy or our data protection practices shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Pune, Maharashtra, India</strong>.
            </p>
          </section>
        </article>
      </main>
    </div>
  )
}
