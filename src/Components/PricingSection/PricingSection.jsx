import PricingData from "./PricingData";

const PricingSection = () => {
  return (
    <>
      <section
        id="pricing"
        className="py-24 border-b border-neutral-800 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pricing Header  */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
              [ 05 ] PRICING
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Predictable pricing. No hidden fees.
            </h2>
            <p className="text-sm text-neutral-400">
              Start for free on Hobby, or scale to Pro as your engineering squad
              grows.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="pt-4 flex items-center justify-center gap-3 font-mono text-xs">
              <span id="monthly-label" className="text-white">
                Monthly
              </span>
              <button
                id="billing-toggle"
                type="button"
                role="switch"
                aria-checked="false"
                className="relative inline-flex h-5 w-10 s cursor-pointer rounded-full border border-neutral-700 bg-neutral-900 transition-colors focus:outline-none"
              >
                <span
                  id="toggle-indicator"
                  className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow transition translate-x-0.5 mt-0.5"
                ></span>
              </button>
              <span
                id="annual-label"
                className="text-neutral-500 flex items-center gap-1"
              >
                Annual
                <span className="px-1.5 py-0.5 text-[10px] text-emerald-400 bg-emerald-950 border border-emerald-800 rounded">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
          {/* Pricing Cards */}
          <PricingData />
        </div>
      </section>
    </>
  );
};

export default PricingSection;
