import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Marketplace
        </Link>

        <div className="space-y-8 font-body text-sm text-foreground leading-relaxed">
          <div className="space-y-2">
            <h1 className="font-display text-3xl tracking-tight">
              ImagineApps Marketplace — Terms and Conditions
            </h1>
            <p className="text-xs text-muted-foreground">Last Modified: February 2026</p>
          </div>

          {/* Disclaimer */}
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-5 space-y-2">
            <h2 className="font-display text-base text-destructive">Disclaimer</h2>
            <p className="text-xs text-muted-foreground">
              <strong>Important Legal Notice:</strong> This document is a draft template and does not constitute legal advice. Laws regarding intellectual property assignments, commission payments, and international contractors (e.g., via Deel) are complex and vary by location. Using this document without formal review by a qualified attorney exposes ImagineApps to significant legal and financial risk. You must have a legal professional customize and finalize this document.
            </p>
          </div>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the ImagineApps Marketplace (the "Marketplace"), submitting any product, or clicking "I agree" (or similar) to these Terms and Conditions (the "Terms"), the "person who submits" the product (the "Submitter") agrees to be bound by these Terms and the ImagineApps Privacy Policy. By submitting, you acknowledge that you have read, understood, and accepted all provisions set forth in this document. If you do not agree to these Terms, you are not authorized to use the Marketplace or submit any product.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">2. Product Submission and Scope</h2>
            <p>
              This Marketplace is intended exclusively for "PLUG & PLAY" products. ImagineApps reserves the right, at its sole discretion, to define and determine what constitutes a "PLUG & PLAY" product. Submitting a product is a request for review. It does not guarantee:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The acceptance, listing, or inclusion of the product in the Marketplace.</li>
              <li>The receipt of any commissions or payments.</li>
            </ul>
            <p>The Submitter is responsible for ensuring that all required fields in the submission form are completed accurately and truthfully.</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">3. Portfolio Curation and Management</h2>
            <p>
              ImagineApps will curate the Marketplace portfolio. ImagineApps reserves the complete and absolute right to accept, reject, list, unlist, suspend, or permanently remove any product from the Marketplace for any reason or no reason, without notice or liability.
            </p>
            <p>
              By submitting a product, you acknowledge that ImagineApps retains the full right to manage, organize, and determine the presentation and commercialization strategy for the product portfolio.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">4. Full Assignment of Rights, Copyright, and Intellectual Property</h2>
            <p>
              A fundamental condition of submission is the complete and absolute transfer of ownership. The Submitter hereby irrevocably, perpetually, and worldwide assigns, transfers, and yields to ImagineApps, its successors, and assigns, all right, title, and interest in and to all intellectual property ("IP") and copyrights associated with the submitted product, on a royalty-free basis (except as provided in the Commissions section below).
            </p>
            <p>This assignment includes, but is not limited to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The "Product":</strong> The source code, executable code, design assets, documentation, art, concepts, trade secrets, trademarks, service marks, patentable inventions, and all other components of the specific version submitted.</li>
              <li><strong>Derivatives and Ideas:</strong> The assignment includes the initial idea behind the Product and any non-core enhancements, modifications, or derivative works created from it.</li>
              <li><strong>Commercial Exploitation:</strong> The exclusive, unrestricted right to copy, modify, distribute, publish, license, sublicense, sell, lease, perform, display, and otherwise exploit the Product in any manner and in any medium now known or hereafter developed.</li>
              <li><strong>Enforcement:</strong> The right to enforce the IP and copyright of the Product against third parties, including the right to sue for infringement.</li>
            </ul>
            <p>
              For the avoidance of doubt, the Submitter is NOT the owner of the Project or Product. All ownership and commercial rights reside solely and exclusively with ImagineApps.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">5. Submitter Recognition and Representation</h2>
            <p>
              ImagineApps recognizes the Submitter's contribution as the original creator of the Product and agrees to provide clear, appropriate credit, in a format and location determined by ImagineApps, identifying the Submitter as the creator.
            </p>
            <p>
              <strong>Third-Party Assets:</strong> The Submitter represents and warrants that the Product is their original work and does not infringe upon any third-party IP rights. To the extent the Product contains components, libraries, or assets owned by third parties ("Third-Party Assets") whose rights are not assignable, the Submitter must clearly identify and declare these assets in the product's README file. The Submitter warrants that they have all necessary licenses and permissions for ImagineApps to use, sublicense, and commercialize these Third-Party Assets as part of the Product.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">6. ImagineApps Commercialization Rights</h2>
            <p>
              ImagineApps has the sole and complete right to commercialize, market, and sell the Product through the Marketplace and any other distribution channels it selects. This includes the exclusive right to set and adjust pricing, create promotional offers, bundle the Product, and enter into distribution agreements with third parties.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">7. Commissions and Payment Terms</h2>
            <p>Subject to the successful commercialization of the Product, ImagineApps will pay the Submitter a commission under the following standard terms:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Commissionable Event:</strong> Commissions are payable only if the Submitter is a current contractor or collaborator of ImagineApps at the time of payment.</li>
              <li><strong>Commission Rate:</strong> The Submitter shall receive a commission equal to 40% of the Net Sales generated by their assigned Product.</li>
              <li><strong>Net Sales Definition:</strong> "Net Sales" means the actual purchase price received by ImagineApps from a customer for a Product, less (a) sales, value-added, and other taxes; (b) refunds and credits; (c) third-party transaction fees; (d) chargebacks; and (e) other direct costs associated with that specific sale.</li>
              <li><strong>Method of Payment (Deel):</strong> Payment will be made as a virtual transaction through the Deel platform. The Submitter must maintain a valid Deel account. ImagineApps is not responsible for any transfer, currency conversion, or account fees charged by Deel.</li>
              <li><strong>Payment Schedule (Quarterly):</strong> Commission payments are calculated and distributed on a quarterly basis after the final close of the fiscal quarter.</li>
              <li><strong>Termination and Unearned Commission:</strong> If the Submitter's relationship with ImagineApps is terminated for any reason, no further commissions shall be due for sales occurring after the date of termination.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">8. Submitter Responsibilities, Warranties, and Maintenance</h2>
            <p>The Submitter represents and warrants that:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>They are the sole author and owner of the Product (excluding declared Third-Party Assets).</li>
              <li>The Product does not contain any malicious code, malware, or viruses.</li>
              <li>They have the full power and authority to enter into this agreement and assign the rights specified.</li>
            </ul>
            <p><strong>Product Maintenance Obligation (Warranty):</strong> The Submitter has a legal obligation to provide maintenance and bug fixes for the Product. This is a warranty of functionality and is not customer support.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Up-to-Date Functionality:</strong> The Submitter must ensure the Product remains functional in the supported environments and is kept up-to-date with relevant platform or language version updates.</li>
              <li><strong>Critical Bug Fixes:</strong> For a period of one (1) month following each sale, the Submitter is obligated to fix any "Critical Bugs" — defects that make a major part of the Product's core function unusable.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">9. Customer Support</h2>
            <p>
              ImagineApps will be solely responsible for handling all customer support inquiries, feature requests, and pre-sale questions from customers. The Submitter has no obligation to provide direct support to customers.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">10. Indemnification</h2>
            <p>
              The Submitter agrees to indemnify, defend, and hold harmless ImagineApps, its officers, directors, employees, and agents from and against any and all claims, liabilities, damages, and expenses (including attorney's fees) arising out of the Submitter's breach of any representation, warranty, or obligation under these Terms, including but not limited to, claims of IP infringement.
            </p>
          </section>

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">11. Modifications to Terms</h2>
            <p>
              ImagineApps reserves the right to modify these Terms at any time. Any changes will be posted on this page with an updated "Last Modified" date. Payouts after the date of a change constitute acceptance of the new Terms.
            </p>
          </section>

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="font-display text-lg">12. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Insert Jurisdiction]. Any dispute arising from or relating to these Terms shall be resolved through [Insert Dispute Resolution Method], to the exclusion of any other court system.
            </p>
          </section>

          {/* Checklist */}
          <section className="rounded-lg border border-border bg-muted/30 p-5 space-y-3">
            <h2 className="font-display text-base">Final Checklist for Your Legal Team</h2>
            <ul className="list-disc pl-6 space-y-2 text-xs text-muted-foreground">
              <li><strong>"Non-Core Enhancements" (Section 4):</strong> Refine the definition to be concrete. Does adding an integration count as a non-core enhancement, or a separate product?</li>
              <li><strong>Maintenance Warranty (Section 8):</strong> Confirm "one (1) month following each sale" is enforceable. Define specific remedies for non-compliance.</li>
              <li><strong>IP Assignments (Section 4):</strong> Confirm that T&C acceptance is sufficient, or create a separate assignment addendum.</li>
              <li><strong>Taxation (Section 7):</strong> Verify withholding tax compliance for international contractors via Deel.</li>
              <li><strong>Governing Law (Section 12):</strong> Fill in jurisdiction and dispute resolution method.</li>
            </ul>
          </section>

          <p className="text-center text-xs text-muted-foreground pt-4 pb-8">[End of Document]</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
