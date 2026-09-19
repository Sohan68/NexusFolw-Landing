import crovronIcon from "../../assets/icons/chevron-down.svg";
const FaqCard = ({ question, answer }) => {
  return (
    <div className="faq-item py-6 px-3">
      <button
        className="faq-trigger w-full flex items-center justify-between text-left focus:outline-none"
        aria-expanded="false"
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <img
          src={crovronIcon}
          alt="Expand"
          className="faq-icon w-4 h-4 invert opacity-60 transition-transform"
        />
      </button>
      <div className="faq-content hidden pt-4 text-sm text-neutral-400 leading-relaxed">
        {answer}
        to remain on Pro or continue on the free Hobby tier.
      </div>
    </div>
  );
};

export default FaqCard;
