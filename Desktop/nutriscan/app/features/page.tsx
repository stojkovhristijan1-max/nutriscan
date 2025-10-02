import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI FOOD RECOGNITION",
      description: "Advanced computer vision instantly identifies thousands of food items with 99% accuracy",
      details: [
        "Real-time image analysis",
        "Support for 50,000+ food items",
        "Continuous learning system",
      ],
    },
    {
      title: "MACRO OPTIMIZER",
      description: "Intelligent algorithm that optimizes your daily macro distribution based on your goals",
      details: [
        "Personalized recommendations",
        "Dynamic goal adjustments",
        "Performance tracking",
      ],
    },
    {
      title: "QUANTUM ANALYTICS",
      description: "Deep dive into your nutrition data with advanced visualization and predictive insights",
      details: [
        "Interactive dashboards",
        "Trend prediction",
        "Custom report generation",
      ],
    },
    {
      title: "NEURAL MEAL PLANNER",
      description: "AI-powered meal planning that learns your preferences and dietary requirements",
      details: [
        "Smart recipe suggestions",
        "Automated grocery lists",
        "Dietary restriction handling",
      ],
    },
    {
      title: "BIOMETRIC SYNC",
      description: "Seamless integration with wearables and health devices for comprehensive tracking",
      details: [
        "Multi-device support",
        "Real-time data sync",
        "Unified health dashboard",
      ],
    },
    {
      title: "BLOCKCHAIN LEDGER",
      description: "Your nutrition history stored securely on distributed blockchain technology",
      details: [
        "Immutable data records",
        "Full data ownership",
        "Export anywhere",
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="text-[var(--color-cyber-pink)] glow-text">FEATURES</span>
        </h1>
        <p className="text-xl text-[var(--color-cyber-blue)] max-w-2xl mx-auto">
          {'>'} Cutting-edge technology meets intuitive design
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[var(--color-cyber-pink)] font-bold text-xs">
                  [{String(index + 1).padStart(2, '0')}]
                </span>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 space-y-4">
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="text-xs text-[var(--color-cyber-blue)] flex items-center gap-2">
                    <span className="text-[var(--color-neon-green)]">{'>'}</span> {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                LEARN MORE
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card className="max-w-4xl mx-auto bg-gradient-to-br from-[var(--color-card-bg)] via-[var(--color-darker-bg)] to-[var(--color-card-bg)]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">COMING SOON</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            We're constantly pushing the boundaries of what's possible. Here's what's in development:
          </p>
          <div className="grid md:grid-cols-2 gap-4 pt-4">
            <div className="border-l-2 border-[var(--color-cyber-pink)] pl-4 space-y-1">
              <div className="text-[var(--color-cyber-pink)] font-bold text-sm">AUGMENTED REALITY</div>
              <div className="text-xs text-muted-foreground">Scan food using AR overlays</div>
            </div>
            <div className="border-l-2 border-[var(--color-cyber-blue)] pl-4 space-y-1">
              <div className="text-[var(--color-cyber-blue)] font-bold text-sm">VOICE ASSISTANT</div>
              <div className="text-xs text-muted-foreground">Log meals hands-free with AI voice</div>
            </div>
            <div className="border-l-2 border-[var(--color-neon-green)] pl-4 space-y-1">
              <div className="text-[var(--color-neon-green)] font-bold text-sm">SOCIAL PLATFORM</div>
              <div className="text-xs text-muted-foreground">Connect with health-conscious community</div>
            </div>
            <div className="border-l-2 border-[var(--color-cyber-yellow)] pl-4 space-y-1">
              <div className="text-[var(--color-cyber-yellow)] font-bold text-sm">DNA INTEGRATION</div>
              <div className="text-xs text-muted-foreground">Nutrition based on genetic profile</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center">
          <Button size="lg">JOIN BETA PROGRAM</Button>
        </CardFooter>
      </Card>
    </div>
  );
}


