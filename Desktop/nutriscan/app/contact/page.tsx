import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">
          <span className="text-[var(--color-cyber-pink)] glow-text">CONTACT</span>{" "}
          <span className="text-[var(--color-cyber-blue)]">US</span>
        </h1>
        <p className="text-xl text-[var(--color-cyber-blue)]">
          {'>'} Get in touch with our cyber team
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>SEND MESSAGE</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-cyber-blue)] font-medium">NAME</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-[var(--color-darker-bg)] border-2 border-[var(--color-cyber-blue)]/30 rounded-md focus:border-[var(--color-cyber-pink)] focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-cyber-blue)] font-medium">EMAIL</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 bg-[var(--color-darker-bg)] border-2 border-[var(--color-cyber-blue)]/30 rounded-md focus:border-[var(--color-cyber-pink)] focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-[var(--color-cyber-blue)] font-medium">MESSAGE</label>
              <textarea
                rows={4}
                placeholder="Your message here..."
                className="w-full px-4 py-2 bg-[var(--color-darker-bg)] border-2 border-[var(--color-cyber-blue)]/30 rounded-md focus:border-[var(--color-cyber-pink)] focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all resize-none text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">TRANSMIT MESSAGE</Button>
          </CardFooter>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>DIRECT LINK</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="text-sm text-[var(--color-cyber-pink)] font-medium">EMAIL</div>
                <div className="text-sm text-muted-foreground">support@nutriscan.cyber</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[var(--color-cyber-pink)] font-medium">EMERGENCY HOTLINE</div>
                <div className="text-sm text-muted-foreground">1-800-NUTRI-SCAN</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-[var(--color-cyber-pink)] font-medium">NEURAL NETWORK</div>
                <div className="text-sm text-muted-foreground">@nutriscan_official</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>OFFICE LOCATION</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">Neo-Tokyo District</p>
              <p className="text-sm text-muted-foreground">Cyber Plaza, Floor 42</p>
              <p className="text-sm text-muted-foreground">Digital Boulevard 2077</p>
              <p className="text-sm text-[var(--color-cyber-blue)] mt-4">
                {'>'} Virtual tours available 24/7
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SUPPORT HOURS</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-[var(--color-neon-green)]">24/7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Weekend</span>
                <span className="text-[var(--color-neon-green)]">24/7</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Holidays</span>
                <span className="text-[var(--color-neon-green)]">24/7</span>
              </div>
              <p className="text-xs text-[var(--color-cyber-blue)] pt-2">
                {'>'} AI support always online
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-[var(--color-card-bg)] to-[var(--color-darker-bg)]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">JOIN THE REVOLUTION</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Be part of the future. Subscribe to our neural feed for updates, exclusive features, and early access to new technology.
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="neural.link@email.com"
              className="flex-1 px-4 py-2 bg-[var(--color-darker-bg)] border-2 border-[var(--color-cyber-blue)]/30 rounded-md focus:border-[var(--color-cyber-pink)] focus:outline-none focus:shadow-[0_0_15px_rgba(255,0,128,0.3)] transition-all text-foreground placeholder:text-muted-foreground"
            />
            <Button>CONNECT</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


