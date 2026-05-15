import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, CreditCard, Smartphone, Mail, ArrowLeft, Check } from "lucide-react";
import { toast } from "sonner";

const cartItems = [
  { id: 1, name: "Diamond Necklace", price: 8500, quantity: 1 },
  { id: 2, name: "Sapphire Earrings", price: 6200, quantity: 1 },
];

const Checkout = () => {
  const navigate = useNavigate();
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleCheckout = () => {
    toast.success("Processing order...");
    setTimeout(() => {
      setOrderComplete(true);
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background flex items-center justify-center p-8">
        <Card className="glass-card p-12 max-w-2xl text-center animate-scale-in">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-5xl font-serif font-bold mb-4">Order Confirmed!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your luxury jewelry will be prepared with care
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-4 text-lg">
              <Mail className="w-6 h-6 text-primary" />
              <span>Confirmation sent to your email</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-lg">
              <Smartphone className="w-6 h-6 text-primary" />
              <span>Order details saved to mobile app</span>
            </div>
          </div>
          <Button
            onClick={() => navigate("/")}
            className="touch-target luxury-gradient text-white font-semibold text-xl px-12"
          >
            Return to Home
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-4">Checkout</h1>
            <p className="text-xl text-muted-foreground">Complete your luxury purchase</p>
          </div>
          <Button
            onClick={() => navigate("/recommendations")}
            variant="outline"
            className="touch-target"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <ShoppingBag className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-serif font-bold">Your Cart</h2>
              </div>

              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-serif font-semibold mb-2">{item.name}</h3>
                        <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-2xl font-bold text-primary">
                        ${item.price.toLocaleString()}
                      </p>
                    </div>
                    <Separator className="mt-6" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-8">
              <h2 className="text-3xl font-serif font-bold mb-6">Payment Options</h2>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full touch-target justify-start text-xl"
                >
                  <CreditCard className="w-6 h-6 mr-4" />
                  Pay Now
                </Button>
                <Button
                  variant="outline"
                  className="w-full touch-target justify-start text-xl"
                >
                  <Smartphone className="w-6 h-6 mr-4" />
                  Save to Mobile App
                </Button>
                <Button
                  variant="outline"
                  className="w-full touch-target justify-start text-xl"
                >
                  <Mail className="w-6 h-6 mr-4" />
                  Request Customization
                </Button>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="glass-card p-8 sticky top-8">
              <h2 className="text-3xl font-serif font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="font-semibold">${tax.toLocaleString(undefined, { maximumFractionDigits: 2 })}</span>
                </div>
                <Separator />
                <div className="flex justify-between text-2xl">
                  <span className="font-serif font-bold">Total</span>
                  <span className="font-bold text-primary">
                    ${total.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full touch-target luxury-gradient text-white font-semibold text-xl"
              >
                Complete Purchase
              </Button>

              <p className="text-sm text-muted-foreground text-center mt-6">
                Secure payment processing • Free luxury packaging
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
