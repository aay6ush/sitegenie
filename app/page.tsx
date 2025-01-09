import Hero from "@/components/landing/hero";

const Home = () => {
  return (
    <main className="relative bg-[#020817]">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      <Hero />
    </main>
  );
};

export default Home;
