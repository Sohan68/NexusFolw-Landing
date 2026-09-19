import TestimonialData from "./TestimonialData";

const Testimonial = () => {
  return (
    <>
      <section
        id="testimonials"
        className="py-24 border-b border-neutral-800 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading  */}
          <div className="text-left max-w-2xl space-y-2 mb-16">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              [ 04 ] CUSTOMERS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Loved by engineers. Trusted by founders.
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              How leading technology organizations leverage NexusFlow every
              single day.
            </p>
          </div>
          {/* Testimonials  */}
          <TestimonialData />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
