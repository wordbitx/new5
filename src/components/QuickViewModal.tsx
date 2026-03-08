import { ShoppingCart, Check, Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function QuickViewModal() {
  const { 
    viewedProduct, 
    isQuickViewOpen, 
    setIsQuickViewOpen, 
    addToCart,
    setIsCartOpen
  } = useCart();

  if (!viewedProduct) return null;

  const handleAddToCart = () => {
    addToCart(viewedProduct);
    setIsQuickViewOpen(false);
    setIsCartOpen(true);
  };

  return (
    <Dialog open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
      <DialogContent className="max-w-3xl bg-white p-0 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square">
            <img
              src={viewedProduct.image}
              alt={viewedProduct.name}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-4 left-4 bg-[#7B3FE4]">
              {viewedProduct.category}
            </Badge>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 flex flex-col">
            <DialogHeader className="text-left mb-4">
              <DialogTitle className="text-2xl font-bold text-[#11114D]">
                {viewedProduct.name}
              </DialogTitle>
            </DialogHeader>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(viewedProduct.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6C6C8A]">
                {viewedProduct.rating} ({viewedProduct.reviews} reviews)
              </span>
            </div>

            <p className="text-[#6C6C8A] mb-6 leading-relaxed">
              {viewedProduct.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-[#11114D] mb-3">Features:</h4>
              <ul className="space-y-2">
                {viewedProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-[#6C6C8A]">
                    <Check className="w-4 h-4 text-[#7B3FE4]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-6 border-t border-[#11114D]/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-[#7B3FE4]">
                  ${viewedProduct.price.toFixed(2)}
                </span>
                <span className="text-sm text-[#6C6C8A]">
                  Instant Email Delivery
                </span>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-primary flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </Button>
                <Button 
                  onClick={() => {
                    addToCart(viewedProduct);
                    setIsQuickViewOpen(false);
                  }}
                  variant="outline"
                  className="btn-outline"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
