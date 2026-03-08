import { CheckCircle, ShoppingBag, Mail, Phone, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function OrderConfirmationModal() {
  const { 
    isOrderConfirmationOpen, 
    setIsOrderConfirmationOpen,
    currentOrder,
    clearCart
  } = useCart();

  const [copied, setCopied] = useState(false);

  const handleCopyOrderNumber = () => {
    if (currentOrder?.orderNumber) {
      navigator.clipboard.writeText(currentOrder.orderNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleContinueShopping = () => {
    setIsOrderConfirmationOpen(false);
    clearCart();
  };

  if (!currentOrder) return null;

  return (
    <Dialog open={isOrderConfirmationOpen} onOpenChange={setIsOrderConfirmationOpen}>
      <DialogContent className="max-w-lg bg-white max-h-[90vh] overflow-auto">
        <div className="p-6">
          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-[#11114D] mb-2">
              Thank You For Your Order!
            </h2>
            <p className="text-[#6C6C8A]">
              Your order has been successfully placed. Please contact our support team to complete the payment.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-[#F6F7FB] rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#11114D] mb-4">Order Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[#6C6C8A]">Order Number:</span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-semibold text-[#11114D]">{currentOrder.orderNumber}</span>
                  <button 
                    onClick={handleCopyOrderNumber}
                    className="text-[#7B3FE4] hover:text-[#9b6af0] transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6C6C8A]">Total Amount:</span>
                <span className="font-semibold text-[#7B3FE4]">${currentOrder.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6C6C8A]">Payment Status:</span>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                  Pending
                </span>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#11114D] mb-3">Items Ordered</h3>
            <div className="space-y-3">
              {currentOrder.items.map((item) => (
                <div key={item.id} className="flex items-center gap-3 p-3 bg-[#F6F7FB] rounded-lg">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-lg" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#11114D] truncate">{item.name}</p>
                    <p className="text-sm text-[#6C6C8A]">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-semibold text-[#7B3FE4]">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="bg-[#7B3FE4]/5 border border-[#7B3FE4]/20 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-[#11114D] mb-3">Payment Instructions</h3>
            <p className="text-sm text-[#6C6C8A] mb-3">
              Please contact our support team to complete your payment:
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:info@thrivecodellc.com" 
                className="flex items-center gap-2 text-sm text-[#7B3FE4] hover:underline"
              >
                <Mail className="w-4 h-4" />
                info@thrivecodellc.com
              </a>
              <a 
                href="tel:+17064528597" 
                className="flex items-center gap-2 text-sm text-[#7B3FE4] hover:underline"
              >
                <Phone className="w-4 h-4" />
                +1 706 452 8597
              </a>
            </div>
            <p className="text-sm text-[#6C6C8A] mt-3">
              Please mention your order number when contacting support.
            </p>
          </div>

          {/* Actions */}
          <Button 
            onClick={handleContinueShopping}
            className="w-full bg-[#7B3FE4] hover:bg-[#9b6af0] text-white flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
