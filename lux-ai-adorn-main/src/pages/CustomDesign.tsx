import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Pencil, Wand2, RotateCw, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const CustomDesign = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasDesign, setHasDesign] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    toast.info("AI is converting your sketch to 3D...");
    setTimeout(() => {
      setIsGenerating(false);
      setHasDesign(true);
      toast.success("Your design is ready!");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl font-serif font-bold mb-4">Custom Design Studio</h1>
            <p className="text-xl text-muted-foreground">
              Sketch your dream jewelry and watch AI bring it to life
            </p>
          </div>
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="touch-target"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Sketch Area */}
          <div className="space-y-4">
            <Card className="glass-card p-8">
              <h2 className="text-3xl font-serif font-bold mb-6">Your Sketch</h2>
              <div className="aspect-square bg-muted rounded-xl flex items-center justify-center border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer">
                <div className="text-center space-y-4">
                  <Pencil className="w-16 h-16 text-muted-foreground mx-auto" />
                  <div>
                    <p className="text-xl font-semibold mb-2">Draw or Upload</p>
                    <p className="text-muted-foreground">
                      Sketch your design or upload an image
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 touch-target">
                <Upload className="w-5 h-5 mr-2" />
                Upload Image
              </Button>
              <Button variant="outline" className="flex-1 touch-target">
                <RotateCw className="w-5 h-5 mr-2" />
                Clear Canvas
              </Button>
            </div>
          </div>

          {/* AI Preview */}
          <div className="space-y-4">
            <Card className="glass-card p-8">
              <h2 className="text-3xl font-serif font-bold mb-6">AI Preview</h2>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/20 rounded-xl flex items-center justify-center">
                {isGenerating ? (
                  <div className="text-center space-y-4">
                    <Wand2 className="w-20 h-20 text-primary mx-auto animate-pulse" />
                    <p className="text-xl font-semibold">Generating 3D model...</p>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
                    </div>
                  </div>
                ) : hasDesign ? (
                  <div className="text-center space-y-4 w-full p-8">
                    <Wand2 className="w-20 h-20 text-primary mx-auto" />
                    <p className="text-2xl font-serif font-bold">Your Custom Design</p>
                    <p className="text-muted-foreground">3D Model Generated</p>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <Wand2 className="w-16 h-16 text-muted-foreground mx-auto" />
                    <p className="text-xl text-muted-foreground">
                      AI preview will appear here
                    </p>
                  </div>
                )}
              </div>
            </Card>

            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full touch-target luxury-gradient text-white font-semibold text-xl"
            >
              <Wand2 className="w-6 h-6 mr-2" />
              {isGenerating ? "Generating..." : "Generate My Design"}
            </Button>

            {hasDesign && (
              <Card className="glass-card p-6 animate-scale-in">
                <h3 className="text-2xl font-serif font-bold mb-4">Design Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Estimated Price:</span>
                    <span className="font-bold text-xl text-primary">$12,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Production Time:</span>
                    <span className="font-semibold">4-6 weeks</span>
                  </div>
                  <Button
                    className="w-full touch-target mt-4"
                    onClick={() => {
                      toast.success("Consultation request sent!");
                      navigate("/checkout");
                    }}
                  >
                    Request Customization Quote
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
