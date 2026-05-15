import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, RotateCw, ZoomIn, ArrowLeft, ShoppingBag } from "lucide-react";

const jewelryOptions = [
  { id: 1, name: "Diamond Necklace", type: "necklace" },
  { id: 2, name: "Sapphire Earrings", type: "earrings" },
  { id: 3, name: "Ruby Ring", type: "ring" },
  { id: 4, name: "Gold Bracelet", type: "bracelet" },
];

const ARTryOn = () => {
  const navigate = useNavigate();
  const [selectedJewelry, setSelectedJewelry] = useState(jewelryOptions[0]);
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-4">AR Try-On Studio</h1>
            <p className="text-xl text-muted-foreground">
              See how it looks on you in real-time
            </p>
          </div>
          <Button
            onClick={() => navigate("/recommendations")}
            variant="outline"
            className="touch-target"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Collection
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* AR Camera View */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="glass-card p-8">
              <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
                <Camera className="w-24 h-24 text-primary relative z-10" />
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  <div className="bg-background/80 backdrop-blur px-4 py-2 rounded-full text-sm font-semibold">
                    Live AR Preview
                  </div>
                  <div className="bg-primary/80 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-semibold">
                    {selectedJewelry.name}
                  </div>
                </div>
              </div>
            </Card>

            {/* Controls */}
            <div className="flex gap-4">
              <Button
                onClick={handleRotate}
                variant="outline"
                className="flex-1 touch-target"
              >
                <RotateCw className="w-5 h-5 mr-2" />
                Rotate View
              </Button>
              <Button variant="outline" className="flex-1 touch-target">
                <ZoomIn className="w-5 h-5 mr-2" />
                Zoom
              </Button>
              <Button variant="outline" className="flex-1 touch-target">
                <Camera className="w-5 h-5 mr-2" />
                Capture Photo
              </Button>
            </div>
          </div>

          {/* Jewelry Selection Panel */}
          <div className="space-y-4">
            <Card className="glass-card p-6">
              <h2 className="text-2xl font-serif font-bold mb-6">Select Jewelry</h2>
              <div className="space-y-3">
                {jewelryOptions.map((item) => (
                  <Card
                    key={item.id}
                    className={`p-4 cursor-pointer hover:scale-105 transition-all ${
                      selectedJewelry.id === item.id
                        ? "ring-2 ring-primary bg-primary/5"
                        : "hover:bg-accent/20"
                    }`}
                    onClick={() => setSelectedJewelry(item)}
                  >
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground capitalize">{item.type}</p>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold mb-4">Current Selection</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-serif font-semibold mb-2">
                    {selectedJewelry.name}
                  </p>
                  <p className="text-3xl font-bold text-primary mb-4">$8,500</p>
                </div>
                <Button
                  className="w-full touch-target luxury-gradient text-white font-semibold"
                  onClick={() => navigate("/checkout")}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  className="w-full touch-target"
                  onClick={() => navigate("/recommendations")}
                >
                  Choose Different Item
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARTryOn;
