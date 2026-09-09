import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './legal.css'

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Encegen AI Labs'
  }, [])

  return (
    <div className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <span className="legal-hero__badge">Legal &amp; Compliance</span>
          <h1 className="legal-hero__title">Terms &amp; Conditions</h1>
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
              Welcome to the official website and digital properties of <strong>Encegen AI Labs Pvt. Ltd.</strong> ("Encegen", "we", "us", or "our"). These Terms &amp; Conditions ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and Encegen regarding your access to and use of our website (<Link to="/" style={{ color: '#6d28d9', textDecoration: 'underline' }}>encegen.com</Link>), demonstration modules, platform descriptions, contact channels, and related digital services (collectively, the "Website").
            </p>
            <p>
              By accessing, browsing, or utilizing the Website, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms and our <Link to="/privacy-policy" style={{ color: '#6d28d9', textDecoration: 'underline' }}>Privacy Policy</Link>. If you do not agree to these Terms in their entirety, you must immediately discontinue using the Website.
            </p>
          </div>

          {/* 1. About Encegen */}
          <section className="legal-section">
            <h2 className="legal-section__heading">1. About Encegen</h2>
            <p>
              Encegen AI Labs Pvt. Ltd. is a private limited company incorporated on 24 May 2025 under the Companies Act, 2013, with registered headquarters in Pune, Maharashtra, India. We specialize in Artificial Intelligence research, agentic automation, process intelligence, enterprise execution systems, document analytics, and custom enterprise software development.
            </p>
            <ul>
              <li><strong>Wagholi Office:</strong> BA HUB, Office no: 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207, Maharashtra, India.</li>
              <li><strong>Pashan Office:</strong> Legismith Partners LLP, Pashan, Pune, Maharashtra, India.</li>
            </ul>
          </section>

          {/* 2. Use of the Website */}
          <section className="legal-section">
            <h2 className="legal-section__heading">2. Use of the Website</h2>
            <p>
              You agree to access and use the Website solely for legitimate informational and business evaluation purposes in accordance with all applicable local, national, and international laws. You agree not to:
            </p>
            <ul>
              <li>Use the Website in any manner that impairs, overburdens, damages, or disrupts our servers or network infrastructure.</li>
              <li>Attempt to gain unauthorized access to any accounts, computer systems, or networks connected to Encegen servers through hacking, password mining, or any other means.</li>
              <li>Deploy automated scrapers, crawlers, robots, or extraction tools to harvest data, content, or source code without our prior express written permission.</li>
              <li>Introduce viruses, trojans, worms, logic bombs, or other technologically harmful materials to the Website.</li>
            </ul>
          </section>

          {/* 3. Website Content */}
          <section className="legal-section">
            <h2 className="legal-section__heading">3. Website Content</h2>
            <p>
              All text, diagrams, graphics, screenshots, case study summaries, whitepapers, benchmarks, UI components, code snippets, visual designs, and multimedia materials presented on the Website are provided for general informational and marketing demonstration purposes only. While we strive for absolute precision, we make no representations or warranties regarding the completeness or accuracy of informational content.
            </p>
          </section>

          {/* 4. Products and Services */}
          <section className="legal-section">
            <h2 className="legal-section__heading">4. Products and Services</h2>
            <p>
              Descriptions of proprietary products—including EasyHunt, Encegen Execution Management System (EMS), Process Intelligence Modules, AI Insights Engine, HR Portal, CBMS, HMS, Resume Analyzer, and Voice Agent—on this Website do not constitute a binding unilateral offer to sell. Enterprise commercial engagements, SLAs, licensing, deployment timelines, and support commitments are governed exclusively by formal Master Services Agreements (MSA) or Statements of Work (SOW) executed separately between Encegen and authorized enterprise clients.
            </p>
          </section>

          {/* 5. Demonstrations and Consultations */}
          <section className="legal-section">
            <h2 className="legal-section__heading">5. Demonstrations and Consultations</h2>
            <p>
              Any product walkthrough, proof of concept (PoC), consultation session, or interactive evaluation arranged through the Website is provided on an "as-is" evaluation basis. Encegen reserves the right to qualify, reschedule, or decline demonstration requests based on enterprise fit, capacity, and operational requirements.
            </p>
          </section>

          {/* 6. Intellectual Property */}
          <section className="legal-section">
            <h2 className="legal-section__heading">6. Intellectual Property</h2>
            <p>
              All intellectual property rights in the Website, including but not limited to source code, user interface designs, logos, software architectures, algorithms, graphics, and written copy, are the exclusive property of Encegen AI Labs Pvt. Ltd. or its licensors, protected by Indian and international copyright, patent, trademark, and trade secret laws. No license, right, or title is granted to you except the limited, non-exclusive, revocable right to view the Website for internal evaluation purposes.
            </p>
          </section>

          {/* 7. Encegen Trademarks */}
          <section className="legal-section">
            <h2 className="legal-section__heading">7. Encegen Trademarks</h2>
            <p>
              "Encegen", "Encegen AI Labs", the Encegen logo, "EasyHunt", and other associated names, logos, product tags, and service names are proprietary trademarks and trade dress of Encegen AI Labs Pvt. Ltd. You may not use, copy, reproduce, or display these trademarks without our express written consent.
            </p>
          </section>

          {/* 8. User-Submitted Information */}
          <section className="legal-section">
            <h2 className="legal-section__heading">8. User-Submitted Information</h2>
            <p>
              When you submit enquiries, feedback, RFP documents, or information through our Website, you warrant that you possess all necessary rights and authorizations to share such information and that the content is accurate, non-defamatory, and does not infringe upon any third-party intellectual property or privacy rights.
            </p>
          </section>

          {/* 9. Job Applications */}
          <section className="legal-section">
            <h2 className="legal-section__heading">9. Job Applications</h2>
            <p>
              Submitting a job application or resume through our Careers portal does not establish an employment relationship or guarantee an interview, employment offer, or contractual engagement. You confirm that all employment history, educational credentials, and personal details provided are true and accurate.
            </p>
          </section>

          {/* 10. Third-Party Services and Links */}
          <section className="legal-section">
            <h2 className="legal-section__heading">10. Third-Party Services and Links</h2>
            <p>
              The Website may contain links or references to third-party platforms, external tools, client websites, or industry publications. These links are provided solely for convenience. Encegen does not endorse, control, monitor, or accept liability for the content, privacy practices, or accuracy of any third-party websites.
            </p>
          </section>

          {/* 11. Artificial Intelligence and Automated Systems */}
          <section className="legal-section">
            <h2 className="legal-section__heading">11. Artificial Intelligence and Automated Systems</h2>
            <p>
              Our Website exhibits AI-assisted interfaces, automated search systems, predictive intelligence concepts, and simulated process models. AI-generated outputs, automated recommendations, and simulated insights are provided for demonstration purposes. Users and enterprises must evaluate all outputs and exercise independent professional judgment before making operational or financial decisions.
            </p>
          </section>

          {/* 12. Availability of the Website */}
          <section className="legal-section">
            <h2 className="legal-section__heading">12. Availability of the Website</h2>
            <p>
              We strive to maintain continuous Website uptime; however, we do not warrant that the Website will be uninterrupted, error-free, completely bug-free, or continuously available. We reserve the right to modify, suspend, or discontinue any aspect or feature of the Website at any time without prior notice.
            </p>
          </section>

          {/* 13. Accuracy and Disclaimer */}
          <section className="legal-section">
            <h2 className="legal-section__heading">13. Accuracy and Disclaimer</h2>
            <div className="legal-highlight">
              THE WEBSITE AND ALL CONTENTS ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, ACCURACY, NON-INFRINGEMENT, OR FREEDOM FROM COMPUTER VIRUSES.
            </div>
          </section>

          {/* 14. Limitation of Liability */}
          <section className="legal-section">
            <h2 className="legal-section__heading">14. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ENCEGEN AI LABS PVT. LTD., ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES (INCLUDING LOSS OF PROFITS, DATA, GOODWILL, BUSINESS INTERRUPTION, OR REVENUE) ARISING OUT OF OR IN CONNECTION WITH YOUR USE OR INABILITY TO USE THIS WEBSITE.
            </p>
          </section>

          {/* 15. Indemnification */}
          <section className="legal-section">
            <h2 className="legal-section__heading">15. Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Encegen AI Labs Pvt. Ltd., its directors, employees, contractors, and affiliates from and against any claims, liabilities, damages, judgments, losses, costs, and expenses (including reasonable attorney's fees) arising out of or relating to your violation of these Terms, misuse of the Website, or infringement of any third-party rights.
            </p>
          </section>

          {/* 16. Confidential Information */}
          <section className="legal-section">
            <h2 className="legal-section__heading">16. Confidential Information</h2>
            <p>
              Any non-public technical specifications, proprietary architectures, or commercial pricing discussed during private consultations or demonstrations shall be treated as confidential and shall not be disclosed to any third party without explicit prior written consent from Encegen.
            </p>
          </section>

          {/* 17. Security */}
          <section className="legal-section">
            <h2 className="legal-section__heading">17. Security</h2>
            <p>
              You agree not to bypass, disable, or tamper with security-related features of the Website, probe network vulnerability, or attempt to decompile or reverse-engineer any software running behind the Website.
            </p>
          </section>

          {/* 18. Changes to These Terms */}
          <section className="legal-section">
            <h2 className="legal-section__heading">18. Changes to These Terms</h2>
            <p>
              Encegen reserves the right to amend, update, or replace these Terms at any time at our sole discretion. Any changes will become effective immediately upon posting to this page. Your continued use of the Website following the posting of revisions constitutes full acceptance of the updated Terms.
            </p>
          </section>

          {/* 19. Termination or Restriction of Access */}
          <section className="legal-section">
            <h2 className="legal-section__heading">19. Termination or Restriction of Access</h2>
            <p>
              We reserve the right, without prior notice or liability, to suspend, restrict, or terminate your access to the Website or any portion thereof if we reasonably determine that you have violated these Terms or engaged in conduct detrimental to Encegen or other users.
            </p>
          </section>

          {/* 20. Governing Law and Jurisdiction */}
          <section className="legal-section">
            <h2 className="legal-section__heading">20. Governing Law and Jurisdiction</h2>
            <p>
              These Terms, their interpretation, and any claims or disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India. You irrevocably agree that the courts situated in <strong>Pune, Maharashtra, India</strong> shall have exclusive jurisdiction over any legal proceedings arising from these Terms.
            </p>
          </section>

          {/* 21. Severability */}
          <section className="legal-section">
            <h2 className="legal-section__heading">21. Severability</h2>
            <p>
              If any provision of these Terms is found to be unlawful, invalid, or unenforceable by a court of competent jurisdiction, that provision shall be severed to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 22. Entire Agreement */}
          <section className="legal-section">
            <h2 className="legal-section__heading">22. Entire Agreement</h2>
            <p>
              These Terms, together with our Privacy Policy, constitute the complete agreement between you and Encegen AI Labs regarding your use of the Website, superseding all prior communications, proposals, or understandings, whether electronic, oral, or written.
            </p>
          </section>

          {/* 23. Contact Us */}
          <section className="legal-section">
            <h2 className="legal-section__heading">23. Contact Us</h2>
            <p>
              If you have any questions, legal notices, or feedback concerning these Terms &amp; Conditions, please contact us:
            </p>
            <div className="legal-contact-box">
              <p><strong>Encegen AI Labs Pvt. Ltd.</strong></p>
              <p><strong>Attention:</strong> Legal &amp; Compliance Department</p>
              <p><strong>Email:</strong> <a href="mailto:legal@encegen.com">legal@encegen.com</a> / <a href="mailto:contact@encegen.com">contact@encegen.com</a></p>
              <p><strong>Wagholi Office:</strong> BA HUB, Office no: 03, Sambhaji Nagar (Baif road), Near BA Varmont Society, Wagholi, Pune-412207, Maharashtra, India</p>
              <p><strong>Pashan Office:</strong> Legismith Partners LLP, Pashan, Pune, Maharashtra, India</p>
            </div>
          </section>

          {/* Final Acknowledgement */}
          <div className="legal-highlight" style={{ marginTop: '2.5rem', textAlign: 'center', fontWeight: 600 }}>
            BY ACCESSING OR USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS &amp; CONDITIONS.
          </div>
        </article>
      </main>
    </div>
  )
}
