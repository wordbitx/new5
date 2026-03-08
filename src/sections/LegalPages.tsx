import { useEffect } from 'react';
import { X, FileText, Shield, Cookie, RefreshCw, Scale } from 'lucide-react';
import { useLegal } from '@/context/LegalContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

export function LegalPages() {
  const { activePage, openLegalPage, closeLegalPage } = useLegal();

  // Expose openLegalPage to window for Footer access
  useEffect(() => {
    (window as unknown as { openLegalPage: (page: string) => void }).openLegalPage = (page: string) => {
      openLegalPage(page as 'terms' | 'privacy' | 'cookies' | 'refund' | 'legal');
    };
  }, [openLegalPage]);

  const legalContent = {
    terms: {
      title: 'Terms of Service',
      icon: FileText,
      content: `
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">1. Acceptance of Terms</h3>
        <p class="mb-4 text-[#6C6C8A]">By accessing and using THRIVE CODE LLC's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">2. Description of Service</h3>
        <p class="mb-4 text-[#6C6C8A]">THRIVE CODE LLC provides digital products and services including but not limited to social media kits, ebooks, virtual services, and development tools. All products are delivered digitally via email.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">3. Payment Terms</h3>
        <p class="mb-4 text-[#6C6C8A]">All payments are processed securely. Prices are listed in USD and are subject to change without notice. You agree to provide current, complete, and accurate purchase and account information for all purchases made on our site.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">4. Intellectual Property</h3>
        <p class="mb-4 text-[#6C6C8A]">All content, products, and materials available on this site are the property of THRIVE CODE LLC and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">5. Limitation of Liability</h3>
        <p class="mb-4 text-[#6C6C8A]">THRIVE CODE LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the service.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">6. Governing Law</h3>
        <p class="mb-4 text-[#6C6C8A]">These Terms shall be governed by and construed in accordance with the laws of the State of Colorado, United States, without regard to its conflict of law provisions.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">7. Contact Information</h3>
        <p class="text-[#6C6C8A]">Questions about the Terms of Service should be sent to us at info@thrivecodellc.com.</p>
      `
    },
    privacy: {
      title: 'Privacy Policy',
      icon: Shield,
      content: `
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">1. Information We Collect</h3>
        <p class="mb-4 text-[#6C6C8A]">We collect information you provide directly to us, including your name, email address, phone number, and payment information when you make a purchase or contact us.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">2. How We Use Your Information</h3>
        <p class="mb-4 text-[#6C6C8A]">We use the information we collect to process your orders, communicate with you, improve our services, and send you marketing communications (with your consent).</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">3. Information Sharing</h3>
        <p class="mb-4 text-[#6C6C8A]">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">4. Data Security</h3>
        <p class="mb-4 text-[#6C6C8A]">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">5. Your Rights</h3>
        <p class="mb-4 text-[#6C6C8A]">You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications at any time.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">6. Cookies</h3>
        <p class="mb-4 text-[#6C6C8A]">We use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of our website.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">7. Contact Us</h3>
        <p class="text-[#6C6C8A]">If you have any questions about this Privacy Policy, please contact us at info@thrivecodellc.com.</p>
      `
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      content: `
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">1. What Are Cookies</h3>
        <p class="mb-4 text-[#6C6C8A]">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">2. How We Use Cookies</h3>
        <p class="mb-4 text-[#6C6C8A]">We use cookies for the following purposes:</p>
        <ul class="list-disc pl-5 mb-4 space-y-1 text-[#6C6C8A]">
          <li>Essential cookies: Required for the website to function properly</li>
          <li>Analytics cookies: Help us understand how visitors interact with our website</li>
          <li>Preference cookies: Remember your settings and preferences</li>
          <li>Marketing cookies: Used to deliver relevant advertisements</li>
        </ul>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">3. Managing Cookies</h3>
        <p class="mb-4 text-[#6C6C8A]">Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">4. Third-Party Cookies</h3>
        <p class="mb-4 text-[#6C6C8A]">We may use third-party services that place cookies on your device. These services help us analyze website usage and improve our marketing efforts.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">5. Changes to This Policy</h3>
        <p class="text-[#6C6C8A]">We may update this Cookie Policy from time to time. Please review this page periodically for any changes.</p>
      `
    },
    refund: {
      title: 'Refund Policy',
      icon: RefreshCw,
      content: `
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">1. Digital Products</h3>
        <p class="mb-4 text-[#6C6C8A]">Due to the nature of digital products, all sales are final once the product has been downloaded or accessed. We do not offer refunds for digital products unless the product is defective or not as described.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">2. Services</h3>
        <p class="mb-4 text-[#6C6C8A]">For virtual services, you may request a refund within 24 hours of purchase if the service has not yet been rendered. Once work has begun, refunds are provided on a prorated basis.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">3. Defective Products</h3>
        <p class="mb-4 text-[#6C6C8A]">If you receive a defective or corrupted file, please contact us within 7 days of purchase with proof of the issue, and we will provide a replacement or refund.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">4. How to Request a Refund</h3>
        <p class="mb-4 text-[#6C6C8A]">To request a refund, please contact us at info@thrivecodellc.com with your order number and reason for the refund request. We will review your request within 3-5 business days.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">5. Refund Processing</h3>
        <p class="mb-4 text-[#6C6C8A]">Approved refunds will be processed to the original payment method within 5-10 business days. The timing of the refund appearing in your account depends on your payment provider.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">6. Exceptions</h3>
        <p class="text-[#6C6C8A]">We reserve the right to refuse refund requests that abuse our policy or are made in bad faith.</p>
      `
    },
    legal: {
      title: 'Legal Information',
      icon: Scale,
      content: `
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">Company Information</h3>
        <p class="mb-4 text-[#6C6C8A]">
          <strong class="text-[#11114D]">THRIVE CODE LLC</strong><br>
          3801 Morrison Rd<br>
          Denver, CO 80219<br>
          United States
        </p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">Contact</h3>
        <p class="mb-4 text-[#6C6C8A]">
          Email: info@thrivecodellc.com<br>
          Phone: +1 706 452 8597<br>
          Website: thrivecodellc.com
        </p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">Business Hours</h3>
        <p class="mb-4 text-[#6C6C8A]">
          Monday - Friday: 9:00 AM - 6:00 PM MST<br>
          Saturday - Sunday: Closed
        </p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">Disclaimer</h3>
        <p class="mb-4 text-[#6C6C8A]">The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on it.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">External Links</h3>
        <p class="mb-4 text-[#6C6C8A]">Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.</p>
        
        <h3 class="text-lg font-semibold mb-3 text-[#11114D]">Copyright Notice</h3>
        <p class="text-[#6C6C8A]">All content on this website is the property of THRIVE CODE LLC unless otherwise noted. Unauthorized use or reproduction of any materials is strictly prohibited.</p>
      `
    }
  };

  const currentContent = activePage ? legalContent[activePage] : null;

  return (
    <>
      {/* Legal Links Section */}
      <section className="bg-[#F6F7FB] py-12 border-t border-[#11114D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#11114D] mb-2">Legal Information</h3>
            <p className="text-[#6C6C8A]">Please review our policies before making a purchase</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(legalContent).map(([key, content]) => (
              <Button
                key={key}
                variant="outline"
                onClick={() => openLegalPage(key as 'terms' | 'privacy' | 'cookies' | 'refund' | 'legal')}
                className="border-[#11114D]/20 text-[#11114D] bg-white hover:bg-[#7B3FE4] hover:text-white hover:border-[#7B3FE4]"
              >
                <content.icon className="w-4 h-4 mr-2" />
                {content.title}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Content Modal */}
      <Dialog open={!!activePage} onOpenChange={closeLegalPage}>
        <DialogContent className="max-w-3xl max-h-[80vh] bg-white p-0">
          {currentContent && (
            <>
              <DialogHeader className="p-6 border-b border-[#11114D]/10">
                <DialogTitle className="flex items-center gap-3 text-[#11114D]">
                  <currentContent.icon className="w-6 h-6 text-[#7B3FE4]" />
                  {currentContent.title}
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] p-6">
                <div 
                  className="prose prose-slate max-w-none"
                  dangerouslySetInnerHTML={{ __html: currentContent.content }}
                />
              </ScrollArea>
              <div className="p-6 border-t border-[#11114D]/10">
                <Button 
                  onClick={closeLegalPage}
                  className="w-full bg-[#7B3FE4] hover:bg-[#9b6af0] text-white"
                >
                  <X className="w-4 h-4 mr-2" />
                  Close
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
