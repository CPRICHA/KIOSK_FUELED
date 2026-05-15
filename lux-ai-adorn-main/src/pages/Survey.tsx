import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Heart, Briefcase, PartyPopper, Church, Coffee } from "lucide-react";
import { toast } from "sonner";

const occasions = [
  { id: "wedding", label: "Wedding", icon: Church },
  { id: "party", label: "Party", icon: PartyPopper },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "casual", label: "Casual", icon: Coffee },
  { id: "romantic", label: "Romantic", icon: Heart },
];

const styles = [
  { id: "classic", label: "Classic Elegance" },
  { id: "modern", label: "Modern Minimalist" },
  { id: "vintage", label: "Vintage Charm" },
  { id: "bold", label: "Bold & Statement" },
  { id: "delicate", label: "Delicate & Subtle" },
];

const budgets = [
  { id: "luxury", label: "$5,000 - $10,000+" },
  { id: "premium", label: "$2,000 - $5,000" },
  { id: "mid", label: "$500 - $2,000" },
  { id: "accessible", label: "Under $500" },
];

const Survey = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    occasion: "",
    style: "",
    budget: "",
  });

  const handleSelect = (field: keyof typeof selections, value: string) => {
    setSelections((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1 && !selections.occasion) {
      toast.error("Please select an occasion");
      return;
    }
    if (step === 2 && !selections.style) {
      toast.error("Please select a style preference");
      return;
    }
    if (step === 3 && !selections.budget) {
      toast.error("Please select a budget range");
      return;
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      toast.success("Profile complete! Analyzing your preferences...");
      setTimeout(() => navigate("/face-analysis"), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Button
            variant="ghost"
            onClick={() => (step === 1 ? navigate("/") : setStep(step - 1))}
            className="touch-target"
          >
            <ArrowLeft className="w-6 h-6 mr-2" />
            Back
          </Button>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 w-16 rounded-full transition-all ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-serif font-bold mb-4">
            {step === 1 && "What's the occasion?"}
            {step === 2 && "What's your style?"}
            {step === 3 && "What's your budget?"}
          </h1>
          <p className="text-xl text-muted-foreground">
            Help us find the perfect piece for you
          </p>
        </div>

        {/* Step 1: Occasion */}
        {step === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 animate-scale-in">
            {occasions.map((occasion) => {
              const Icon = occasion.icon;
              return (
                <Card
                  key={occasion.id}
                  className={`glass-card p-8 cursor-pointer hover:scale-105 transition-all ${
                    selections.occasion === occasion.id
                      ? "ring-4 ring-primary bg-primary/5"
                      : ""
                  }`}
                  onClick={() => handleSelect("occasion", occasion.id)}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">{occasion.label}</h3>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Step 2: Style */}
        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
            {styles.map((style) => (
              <Card
                key={style.id}
                className={`glass-card p-8 cursor-pointer hover:scale-105 transition-all ${
                  selections.style === style.id
                    ? "ring-4 ring-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => handleSelect("style", style.id)}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-semibold">{style.label}</h3>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
            {budgets.map((budget) => (
              <Card
                key={budget.id}
                className={`glass-card p-8 cursor-pointer hover:scale-105 transition-all ${
                  selections.budget === budget.id
                    ? "ring-4 ring-primary bg-primary/5"
                    : ""
                }`}
                onClick={() => handleSelect("budget", budget.id)}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-semibold">{budget.label}</h3>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Next Button */}
        <div className="mt-12 flex justify-center">
          <Button
            onClick={handleNext}
            className="touch-target luxury-gradient text-white font-semibold text-xl px-12"
          >
            {step === 3 ? "Complete Profile" : "Continue"}
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
