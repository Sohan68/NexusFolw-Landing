import rightArrowIcon from "../../assets/icons/arrow-right.svg";
import checkIcon from "../../assets/icons/check.svg";
const PricingCard = ({ plan }) => {
  return (
    <>
      <div className="p-8 rounded-xl border border-neutral-800 bg-[#0a0a0a] flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-white">{plan.name} </h3>
            {plan.featured && (
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold text-black bg-white rounded">
                POPULAR
              </span>
            )}
          </div>
          <p className="text-xs text-neutral-400">{plan.description}</p>

          <div className="flex items-baseline gap-1 font-mono">
            <span
              className="text-4xl font-bold text-white pricing-value"
              data-monthly="$0"
              data-annual="$0"
            >
              {plan.price.monthly}
            </span>
            <span className="text-xs text-neutral-500">{plan.priceSuffix}</span>
          </div>

          <div className="pt-4 border-t border-neutral-900 space-y-2.5 text-xs text-neutral-300 font-mono">
            <div className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="w-3.5 h-3.5 invert" />
              <span>{plan.features[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="w-3.5 h-3.5 invert" />
              <span>{plan.features[1]}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="w-3.5 h-3.5 invert" />
              <span>{plan.features[2]}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={checkIcon} alt="" className="w-3.5 h-3.5 invert" />
              <span>{plan.features[3]}</span>
            </div>
          </div>
        </div>

        <a
          href={plan.buttonLink}
          className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono font-medium rounded-lg transition-colors ${
            plan.featured
              ? "text-black bg-white hover:bg-neutral-200"
              : "text-neutral-300 bg-neutral-900 hover:bg-neutral-800 hover:text-white border border-neutral-800"
          }`}
        >
          <span>{plan.buttonText}</span>
          <img
            src={rightArrowIcon}
            alt=""
            className={`w-3.5 h-3.5 ${
              plan.featured ? " " : "invert opacity-70"
            }`}
          />
        </a>
      </div>
    </>
  );
};

export default PricingCard;
