import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

const EntryPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleEnter = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="glass-strong rounded-2xl p-6 animate-float glow-primary">
            <Sparkles className="w-16 h-16 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-fade-in">
          TaskFlow
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Next-generation task management.
          <br />
          Simple. Fluid. Intelligent.
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleEnter}
          size="lg"
          className="group glass-strong hover-glow hover-lift text-lg px-8 py-6 rounded-xl border border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          Enter TaskFlow
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        {/* Features list */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
            <span>Lightning Fast</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
            <span>Beautifully Designed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
            <span>Future Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
