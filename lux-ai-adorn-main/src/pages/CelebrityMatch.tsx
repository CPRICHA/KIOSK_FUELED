import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Filter, ArrowRight, Sparkles } from "lucide-react";

const celebrities = [
  { id: 1, name: "Classic Hollywood", style: "Timeless Elegance", era: "Classic" },
  { id: 2, name: "Modern Icon", style: "Contemporary Chic", era: "Modern" },
  { id: 3, name: "Vintage Glamour", style: "Art Deco Inspired", era: "Classic" },
  { id: 4, name: "Minimalist Style", style: "Clean Lines", era: "Modern" },
  { id: 5, name: "Bold Statement", style: "Dramatic Pieces", era: "Modern" },
  { id: 6, name: "Romantic Look", style: "Delicate & Feminine", era: "Classic" },
];

const jewelryItems = [
  { id: 1, name: "Diamond Solitaire Necklace", price: "$8,500", match: 98 },
  { id: 2, name: "Emerald Drop Earrings", price: "$6,200", match: 95 },
  { id: 3, name: "Pearl Statement Ring", price: "$4,800", match: 92 },
  { id: 4, name: "Gold Bracelet Set", price: "$3,900", match: 90 },
];

const CelebrityMatch = () => {
  const navigate = useNavigate();
  const [selectedStyle, setSelectedStyle] = useState<number | null>(null);
  const [filterEra, setFilterEra] = useState<string>("all");

  const filteredCelebrities = filterEra === "all" 
    ? celebrities 
    : celebrities.filter(c => c.era.toLowerCase() === filterEra);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">Find Your Celebrity Style Match</h1>
          <p className="text-xl text-muted-foreground">
            Discover jewelry inspired by iconic looks
          </p>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="px-4 py-2 text-base">
              <Sparkles className="w-4 h-4 mr-2" />
              Oval Face Shape
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-base">
              Warm Skin Tone
            </Badge>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button
            variant="outline"
            className="touch-target"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </Button>
          <div className="flex gap-2">
            <Button
              variant={filterEra === "all" ? "default" : "outline"}
              onClick={() => setFilterEra("all")}
            >
              All Styles
            </Button>
            <Button
              variant={filterEra === "classic" ? "default" : "outline"}
              onClick={() => setFilterEra("classic")}
            >
              Classic
            </Button>
            <Button
              variant={filterEra === "modern" ? "default" : "outline"}
              onClick={() => setFilterEra("modern")}
            >
              Modern
            </Button>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Celebrity Styles */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold mb-6">Celebrity Styles</h2>
            <div className="grid gap-4">
              {filteredCelebrities.map((celebrity) => (
                <Card
                  key={celebrity.id}
                  className={`glass-card p-6 cursor-pointer hover:scale-102 transition-all ${
                    selectedStyle === celebrity.id ? "ring-4 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => setSelectedStyle(celebrity.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Star className="w-10 h-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-semibold mb-1">
                        {celebrity.name}
                      </h3>
                      <p className="text-muted-foreground">{celebrity.style}</p>
                      <Badge variant="outline" className="mt-2">
                        {celebrity.era}
                      </Badge>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right: Matching Jewelry */}
          <div className="space-y-4">
            <h2 className="text-3xl font-serif font-bold mb-6">Matching Jewelry</h2>
            {selectedStyle ? (
              <div className="space-y-4 animate-scale-in">
                {jewelryItems.map((item) => (
                  <Card key={item.id} className="glass-card p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-primary/10 text-primary border-primary/20">
                            {item.match}% Match
                          </Badge>
                          <Badge variant="outline">AI Recommended</Badge>
                        </div>
                        <h3 className="text-2xl font-serif font-semibold mb-2">{item.name}</h3>
                        <p className="text-3xl font-bold text-primary mb-4">{item.price}</p>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                          <Button
                            className="flex-1 luxury-gradient text-white"
                            onClick={() => navigate("/ar-tryon")}
                          >
                            Try in AR
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="glass-card p-12 text-center">
                <Star className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-xl text-muted-foreground">
                  Select a celebrity style to see matching jewelry
                </p>
              </Card>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate("/face-analysis")}
            className="touch-target"
          >
            Back to Analysis
          </Button>
          <Button
            onClick={() => navigate("/recommendations")}
            className="touch-target luxury-gradient text-white font-semibold text-xl px-12"
          >
            View All Recommendations
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CelebrityMatch;
