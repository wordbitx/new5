import { useState } from 'react';
import { CreditCard, Building2, ArrowLeft } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export function PaymentModal() {
  const { 
    isPaymentModalOpen, 
    setIsPaymentModalOpen, 
    currentOrder,
    setIsRedirectingModalOpen,
    setIsOrderConfirmationOpen,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<'online' | 'bank'>('online');

  const handleProceed = () => {
    if (paymentMethod === 'online') {
      setIsPaymentModalOpen(false);
      setIsRedirectingModalOpen(true);
    } else {
      // Bank transfer - show order confirmation directly
      setIsPaymentModalOpen(false);
      setIsOrderConfirmationOpen(true);
    }
  };

  if (!currentOrder) return null;

  return (
    <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
      <DialogContent className="max-w-md bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#11114D] mb-2">Payment Details</h2>
          <p className="text-[#6C6C8A] mb-6">
            Select your preferred payment method to complete your order.
          </p>

          {/* Order Summary */}
          <div className="bg-[#F6F7FB] rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#11114D] mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6C6C8A]">Subtotal</span>
                <span className="text-[#11114D]">${currentOrder.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6C6C8A]">Tax</span>
                <span className="text-[#11114D]">${currentOrder.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-[#11114D]/10 pt-2 flex justify-between font-semibold">
                <span className="text-[#11114D]">Total</span>
                <span className="text-[#7B3FE4] text-lg">${currentOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <RadioGroup 
            value={paymentMethod} 
            onValueChange={(value) => setPaymentMethod(value as 'online' | 'bank')}
            className="space-y-3 mb-6"
          >
            <div className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
              paymentMethod === 'online' 
                ? 'border-[#7B3FE4] bg-[#7B3FE4]/5' 
                : 'border-[#11114D]/10 hover:border-[#7B3FE4]/50'
            }`}>
              <RadioGroupItem value="online" id="online" className="sr-only" />
              <div className="w-10 h-10 rounded-full bg-[#7B3FE4]/10 flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-[#7B3FE4]" />
              </div>
              <div className="flex-1">
                <Label htmlFor="online" className="font-semibold text-[#11114D] cursor-pointer">
                  Pay Online
                </Label>
                <p className="text-sm text-[#6C6C8A]">Secure payment via credit/debit card</p>
              </div>
            </div>

            <div className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
              paymentMethod === 'bank' 
                ? 'border-[#7B3FE4] bg-[#7B3FE4]/5' 
                : 'border-[#11114D]/10 hover:border-[#7B3FE4]/50'
            }`}>
              <RadioGroupItem value="bank" id="bank" className="sr-only" />
              <div className="w-10 h-10 rounded-full bg-[#7B3FE4]/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-[#7B3FE4]" />
              </div>
              <div className="flex-1">
                <Label htmlFor="bank" className="font-semibold text-[#11114D] cursor-pointer">
                  Bank Transfer
                </Label>
                <p className="text-sm text-[#6C6C8A]">Pay directly to our bank account</p>
              </div>
            </div>
          </RadioGroup>

          {/* Actions */}
          <div className="flex gap-3">
            <Button 
              variant="outline"
              onClick={() => setIsPaymentModalOpen(false)}
              className="flex-1 border-[#11114D]/20 text-[#11114D] bg-white hover:bg-[#F6F7FB]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button 
              onClick={handleProceed}
              className="flex-1 bg-[#7B3FE4] hover:bg-[#9b6af0] text-white"
            >
              {paymentMethod === 'online' ? 'Pay Online' : 'Place Order'}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
