import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function RedirectingModal() {
  const { 
    isRedirectingModalOpen, 
    setIsRedirectingModalOpen,
    setIsPaymentDisabledModalOpen,
  } = useCart();

  useEffect(() => {
    if (isRedirectingModalOpen) {
      const timer = setTimeout(() => {
        setIsRedirectingModalOpen(false);
        setIsPaymentDisabledModalOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isRedirectingModalOpen, setIsRedirectingModalOpen, setIsPaymentDisabledModalOpen]);

  return (
    <Dialog open={isRedirectingModalOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-sm bg-white">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-[#7B3FE4]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Loader2 className="w-8 h-8 text-[#7B3FE4] animate-spin" />
          </div>
          
          <h2 className="text-xl font-bold text-[#11114D] mb-2">
            Redirecting...
          </h2>
          
          <p className="text-[#6C6C8A] text-sm">
            Please wait while we redirect you to the payment gateway
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
