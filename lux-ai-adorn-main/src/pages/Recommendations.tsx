import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Filter, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const products = [
  {
    id: 1,
    name: "Eternal Diamond Necklace",
    price: 8500,
    metal: "Yellow Gold",
    gemstone: "Diamond",
    occasion: "Wedding",
    match: 98,
  },
  {
    id: 2,
    name: "Sapphire Drop Earrings",
    price: 6200,
    metal: "White Gold",
    gemstone: "Sapphire",
    occasion: "Party",
    match: 95,
  },
  {
    id: 3,
    name: "Ruby Statement Ring",
    price: 4800,
    metal: "Rose Gold",
    gemstone: "Ruby",
    occasion: "Romantic",
    match: 94,
  },
  {
    id: 4,
    name: "Pearl Elegance Set",
    price: 3900,
    metal: "Yellow Gold",
    gemstone: "Pearl",
    occasion: "Work",
    match: 92,
  },
  {
    id: 5,
    name: "Emerald Tennis Bracelet",
    price: 7200,
    metal: "White Gold",
    gemstone: "Emerald",
    occasion: "Party",
    match: 91,
  },
  {
    id: 6,
    name: "Classic Gold Hoops",
    price: 2400,
    metal: "Yellow Gold",
    gemstone: "None",
    occasion: "Casual",
    match: 89,
  },
];

const Recommendations = () => {
  const navigate = useNavigate();
  const [selectedMetal, setSelectedMetal] = useState("all");
  const [selectedGemstone, setSelectedGemstone] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart([...cart, id]);
    toast.success("Added to cart!");
  };

  const filteredProducts = products.filter((p) => {
    if (selectedMetal !== "all" && p.metal !== selectedMetal) return false;
    if (selectedGemstone !== "all" && p.gemstone !== selectedGemstone) return false;
    if (priceRange === "low" && p.price > 5000) return false;
    if (priceRange === "high" && p.price <= 5000) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-4">Your Personalized Collection</h1>
            <p className="text-xl text-muted-foreground">
              Curated based on your style and preferences
            </p>
          </div>
          <Button
            onClick={() => navigate("/checkout")}
            className="touch-target luxury-gradient text-white font-semibold"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Cart ({cart.length})
          </Button>
        </div>

        {/* Filters */}
        <Card className="glass-card p-6 mb-8">
          <div className="flex items-center gap-4">
            <Filter className="w-6 h-6 text-primary" />
            <div className="flex-1 flex gap-4">
              <Select value={selectedMetal} onValueChange={setSelectedMetal}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Metal Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Metals</SelectItem>
                  <SelectItem value="Yellow Gold">Yellow Gold</SelectItem>
                  <SelectItem value="White Gold">White Gold</SelectItem>
                  <SelectItem value="Rose Gold">Rose Gold</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedGemstone} onValueChange={setSelectedGemstone}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Gemstone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Gemstones</SelectItem>
                  <SelectItem value="Diamond">Diamond</SelectItem>
                  <SelectItem value="Ruby">Ruby</SelectItem>
                  <SelectItem value="Sapphire">Sapphire</SelectItem>
                  <SelectItem value="Emerald">Emerald</SelectItem>
                  <SelectItem value="Pearl">Pearl</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $5,000</SelectItem>
                  <SelectItem value="high">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <Card
              key={product.id}
              className="glass-card p-6 hover:scale-105 transition-all animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    {product.match}% Match
                  </Badge>
                  {product.match >= 95 && (
                    <Badge variant="outline">Best Match</Badge>
                  )}
                </div>

                <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-primary" />
                </div>

                <div>
                  <h3 className="text-2xl font-serif font-semibold mb-2">{product.name}</h3>
                  <p className="text-3xl font-bold text-primary mb-3">
                    ${product.price.toLocaleString()}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary">{product.metal}</Badge>
                    {product.gemstone !== "None" && (
                      <Badge variant="secondary">{product.gemstone}</Badge>
                    )}
                    <Badge variant="outline">{product.occasion}</Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => navigate("/ar-tryon")}
                    >
                      Try AR
                    </Button>
                    <Button
                      className="flex-1 luxury-gradient text-white"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
