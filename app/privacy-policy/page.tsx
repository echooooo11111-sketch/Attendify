import { PageLayout } from '@/components/page-layout';
import { Card } from '@/components/ui/card';

export const metadata = {
  title: 'Privacy Policy - Attendify',
  description: 'Privacy policy for Attendify attendance management system.',
};

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      title="Privacy Policy"
      description="Last updated: January 2024"
    >
      <div className="max-w-3xl space-y-8">
        {/* Introduction */}
        <Card className="border-border p-6">
          <p className="text-muted-foreground leading-relaxed">
            Attendify (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;) operates the Attendify
            mobile application (&quot;Service&quot;). This page informs you of our policies
            regarding the collection, use, and disclosure of personal data when
            you use our Service and the choices you have associated with that
            data. We are committed to protecting your privacy and ensuring you
            have a positive experience on our platform.
          </p>
        </Card>

        {/* Information Collection */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">1. Information We Collect</h2>
          <div className="space-y-4">
            <Card className="border-border p-6">
              <h3 className="mb-3 font-semibold text-foreground">
                Personal Information
              </h3>
              <p className="mb-3 text-muted-foreground">
                When you register for Attendify, we collect information such as:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>Full name and email address</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>Phone number and school/institution affiliation</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>Username and password (encrypted)</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">•</span>
                  <span>Profile information and preferences</span>
                </li>
              </ul>
            </Card>

            <Card className="border-border p-6">
              <h3 className="mb-3 font-semibold text-foreground">
                Location Data
              </h3>
              <p className="text-muted-foreground">
                For geofencing functionality, we collect GPS coordinates and
                location information. This data is used solely to determine
                attendance status within school boundaries. You can disable
                location tracking in your device settings at any time.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="mb-3 font-semibold text-foreground">
                Camera Access
              </h3>
              <p className="text-muted-foreground">
                To use QR code scanning features, we request camera access. The
                camera is used only for scanning attendance QR codes and is not
                stored or accessed without your explicit permission.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="mb-3 font-semibold text-foreground">
                Attendance Records
              </h3>
              <p className="text-muted-foreground">
                We collect and maintain records including timestamps, location
                data at time of check-in, and attendance status. This information
                is essential for the core functionality of the Attendify system.
              </p>
            </Card>

            <Card className="border-border p-6">
              <h3 className="mb-3 font-semibold text-foreground">
                Device Information
              </h3>
              <p className="text-muted-foreground">
                We automatically collect device identifiers, device type, operating
                system version, mobile network information, and app crash logs to
                improve service quality and functionality.
              </p>
            </Card>
          </div>
        </section>

        {/* Use of Data */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">2. How We Use Your Information</h2>
          <Card className="border-border p-6">
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  To provide and maintain the Attendify service
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  To process attendance records and generate reports
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  To notify you about changes to our Service
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  To provide customer support and respond to inquiries
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  To monitor and analyze usage and trends to improve user experience
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  To detect and prevent fraudulent transactions and other illegal activities
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">✓</span>
                <span className="text-muted-foreground">
                  For anonymous statistical analysis and aggregated reporting
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Data Security */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">3. Data Security</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your Personal Information, we cannot
              guarantee its absolute security.
            </p>
            <p className="text-muted-foreground">
              We implement the following security measures:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>End-to-end encryption for sensitive data transmission</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Secure password hashing and storage protocols</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Regular security audits and vulnerability assessments</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <span className="text-primary">•</span>
                <span>Access controls and role-based permissions</span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Data Sharing */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">4. Sharing Your Information</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              We do not share your personal information with third parties except:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>With Service Providers:</strong> We may share data with
                  vendors who assist us in operating our website and conducting our
                  business (hosting, analytics, customer service)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>With School Administration:</strong> Attendance records are
                  shared with authorized school administrators
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>For Legal Compliance:</strong> If required by law or in
                  response to valid legal requests
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">
                  <strong>Business Transfers:</strong> If we are involved in a merger,
                  acquisition, or asset sale
                </span>
              </li>
            </ul>
          </Card>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">5. Your Rights</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              You have the right to:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">
                  Access your personal information
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">
                  Correct inaccurate data
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">
                  Request deletion of your data
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">
                  Withdraw consent for data collection
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary">→</span>
                <span className="text-muted-foreground">
                  Opt-out of marketing communications
                </span>
              </li>
            </ul>
            <p className="mt-6 text-muted-foreground">
              To exercise any of these rights, please contact us at
              <a href="mailto:privacy@attendify.app" className="ml-1 text-primary hover:underline">
                privacy@attendify.app
              </a>
            </p>
          </Card>
        </section>

        {/* Changes to Policy */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">6. Changes to This Privacy Policy</h2>
          <Card className="border-border p-6">
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the &quot;Last updated&quot; date at the top. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>
          </Card>
        </section>

        {/* Contact */}
        <section>
          <h2 className="mb-4 text-2xl font-bold">7. Contact Us</h2>
          <Card className="border-border p-6">
            <p className="mb-4 text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                Email: <a href="mailto:privacy@attendify.app" className="text-primary hover:underline">privacy@attendify.app</a>
              </li>
              <li className="text-muted-foreground">
                Support: <a href="mailto:support@attendify.app" className="text-primary hover:underline">support@attendify.app</a>
              </li>
              <li className="text-muted-foreground">
                Address: Quezon City, Philippines
              </li>
            </ul>
          </Card>
        </section>
      </div>
    </PageLayout>
  );
}
