import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Sparkles, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const FaceAnalysis = () => {
  const navigate = useNavigate();
  const [analyzing, setAnalyzing] = useState(true);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        faceShape: "Oval",
        skinTone: "Warm",
        recommendations: {
          metals: ["Yellow Gold", "Rose Gold"],
          gemstones: ["Ruby", "Citrine", "Amber"],
        },
      });
      setAnalyzing(false);
      toast.success("Analysis complete!");
    }, 3000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">Face & Skin Analysis</h1>
          <p className="text-xl text-muted-foreground">
            AI-powered recommendations for your unique features
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Camera Preview */}
          <Card className="glass-card p-8">
            <div className="aspect-[3/4] bg-muted rounded-xl flex items-center justify-center relative overflow-hidden">
              {analyzing ? (
                <div className="text-center space-y-4">
                  <Camera className="w-20 h-20 text-primary mx-auto animate-pulse" />
                  <p className="text-xl font-semibold">Analyzing your features...</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/30 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Sparkles className="w-16 h-16 text-primary mx-auto" />
                    <p className="text-xl font-semibold">Analysis Complete!</p>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Results Panel */}
          <div className="space-y-6">
            <Card className="glass-card p-8 animate-scale-in">
              <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                Your Profile
              </h2>
              
              {analyzing ? (
                <div className="space-y-4">
                  <div className="h-12 bg-muted/50 rounded animate-pulse" />
                  <div className="h-12 bg-muted/50 rounded animate-pulse" />
                  <div className="h-24 bg-muted/50 rounded animate-pulse" />
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Face Shape</p>
                    <div className="text-2xl font-semibold flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      {results.faceShape}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Skin Tone</p>
                    <div className="text-2xl font-semibold flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                      {results.skinTone}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Recommended Metals</p>
                    <div className="flex flex-wrap gap-2">
                      {results.recommendations.metals.map((metal: string) => (
                        <span
                          key={metal}
                          className="px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold"
                        >
                          {metal}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Recommended Gemstones</p>
                    <div className="flex flex-wrap gap-2">
                      {results.recommendations.gemstones.map((stone: string) => (
                        <span
                          key={stone}
                          className="px-4 py-2 bg-accent/50 rounded-full font-semibold"
                        >
                          {stone}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {!analyzing && (
              <Button
                onClick={() => navigate("/celebrity-match")}
                className="w-full touch-target luxury-gradient text-white font-semibold text-xl"
              >
                Continue to Style Matching
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaceAnalysis;
