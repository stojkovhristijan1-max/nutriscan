import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="text-[var(--color-cyber-pink)] glow-text">ABOUT</span>{" "}
          <span className="text-[var(--color-cyber-blue)]">US</span>
        </h1>
        <p className="text-xl text-[var(--color-cyber-blue)]">
          {'>'} Redefining nutrition in the digital age
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">OUR MISSION</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            At NutriScan, we believe that nutrition tracking should be as advanced as the technology
            we carry in our pockets. We're building a future where health optimization is effortless,
            intuitive, and powered by cutting-edge artificial intelligence.
          </p>
          <p className="text-muted-foreground">
            Our mission is to democratize access to advanced nutritional insights, making it possible
            for everyone to achieve their health goals through data-driven decisions and real-time feedback.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>VISION 2.0</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              We envision a world where nutrition is personalized, predictive, and seamlessly integrated
              into daily life. Through neural networks and advanced algorithms, we're creating the
              ultimate health companion.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TECHNOLOGY</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Built on state-of-the-art machine learning models and real-time data processing,
              our platform delivers instant nutritional analysis with unprecedented accuracy.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SECURITY</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your data is protected with military-grade encryption and stored on distributed
              blockchain networks. Privacy isn't just a feature—it's our foundation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>COMMUNITY</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Join a global community of health enthusiasts, athletes, and biohackers all working
              towards optimal performance and longevity.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-[var(--color-card-bg)] to-[var(--color-darker-bg)]">
        <CardHeader>
          <CardTitle className="text-3xl text-center">THE TEAM</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            We're a team of engineers, nutritionists, designers, and dreamers united by a common goal:
            to make health tracking not just useful, but extraordinary.
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-6">
            <div className="space-y-2">
              <div className="text-[var(--color-cyber-pink)] font-bold">ENGINEERING</div>
              <div className="text-sm text-muted-foreground">AI & ML Specialists</div>
            </div>
            <div className="space-y-2">
              <div className="text-[var(--color-cyber-blue)] font-bold">SCIENCE</div>
              <div className="text-sm text-muted-foreground">Nutrition Experts</div>
            </div>
            <div className="space-y-2">
              <div className="text-[var(--color-neon-green)] font-bold">DESIGN</div>
              <div className="text-sm text-muted-foreground">UX Innovators</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


