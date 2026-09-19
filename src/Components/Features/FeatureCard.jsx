const FeatureCard = ({ feature }) => {
  return (
    <div className="p-8 bg-[#0a0a0a] hover:bg-[#111111] transition-colors group">
      <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white mb-6">
        <img
          src={feature.icon.src}
          alt={feature.icon.alt}
          className="w-5 h-5 invert"
        />
      </div>
      <p className="text-xs font-mono text-neutral-500 mb-1">
        {feature.number} / {feature.category}
      </p>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
        {feature.title}
      </h3>
      <p className="text-sm text-neutral-400 leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
};

export default FeatureCard;
