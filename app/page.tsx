import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Stats from "@/components/landing/stats";
import Pricing from "@/components/landing/pricing";
import FAQ from "@/components/landing/faq";
import Developer from "@/components/landing/developer";
import CTA from "@/components/landing/cta";
import Testimonials from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main className="relative bg-[#020817]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      <Hero />
      <Features />
      <Testimonials />
      <Stats />
      <Pricing />
      <FAQ />
      <Developer />
      <CTA />
    </main>
  );
}
