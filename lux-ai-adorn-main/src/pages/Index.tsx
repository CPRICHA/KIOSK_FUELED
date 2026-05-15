import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Star, Wand2 } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-primary" />
            <h1 className="text-6xl font-serif font-bold tracking-tight">
              Luxury Jewelry Studio
            </h1>
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <p className="text-2xl text-muted-foreground font-light">
            AI-Powered Personalized Styling
          </p>
        </header>

        {/* Hero Image */}
        <div className="relative mb-16 rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
          <img
            src={heroImage}
            alt="Luxury jewelry collection"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/40 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-center">
            <h2 className="text-5xl font-serif font-bold text-white mb-4">
              Welcome to AI-Powered Jewelry Styling
            </h2>
            <p className="text-xl text-white/90 font-light">
              Discover your perfect piece with cutting-edge AI technology
            </p>
          </div>
        </div>

        {/* Main Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card
            className="glass-card p-10 hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={() => navigate("/survey")}
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-semibold">Start Styling</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Answer a few questions and let our AI find the perfect jewelry for your style and occasion
              </p>
              <Button className="w-full touch-target luxury-gradient text-white font-semibold hover:opacity-90">
                Begin Journey
              </Button>
            </div>
          </Card>

          <Card
            className="glass-card p-10 hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={() => navigate("/celebrity-match")}
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-semibold">Celebrity Looks</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Get inspired by iconic styles and find jewelry that matches celebrity elegance
              </p>
              <Button className="w-full touch-target luxury-gradient text-white font-semibold hover:opacity-90">
                Explore Styles
              </Button>
            </div>
          </Card>

          <Card
            className="glass-card p-10 hover:scale-105 transition-all duration-300 cursor-pointer group"
            onClick={() => navigate("/custom-design")}
          >
            <div className="text-center space-y-6">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Wand2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-serif font-semibold">Custom Design</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sketch your dream jewelry and watch AI transform it into a stunning 3D design
              </p>
              <Button className="w-full touch-target luxury-gradient text-white font-semibold hover:opacity-90">
                Create Design
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-muted-foreground">
          <p className="text-lg">Touch anywhere to begin your luxury experience</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
