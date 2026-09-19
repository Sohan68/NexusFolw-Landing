import CardData from "./CardData";

const Features = () => {
  return (
    <div>
      <section
        id="features"
        className="py-24 border-b border-neutral-800 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-left max-w-2xl space-y-2 mb-16">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              [ 01 ] CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineered for velocity, reliability, and scale.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Everything required to build, orchestrate, and automate
              mission-critical software workflows.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <CardData></CardData>
        </div>
      </section>
    </div>
  );
};

export default Features;
