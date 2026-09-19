import MetricsCard from "./MetricsCard";

const MetricsData = () => {
  const metrics = [
    {
      value: "99.99%",
      label: "UPTIME SLA",
      description: "Enterprise grade availability",
    },
    {
      value: "250K+",
      label: "DEVELOPERS",
      description: "Building across 140+ countries",
    },
    {
      value: "15M+",
      label: "BUILDS / MO",
      description: "Automated with zero failures",
    },
    {
      value: "4.9 / 5",
      label: "SATISFACTION",
      description: "From over 3,000+ verified teams",
    },
  ];
  return (
    <>
      <section className="py-20 border-b border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric) => {
              return <MetricsCard key={metric.label} metric={metric} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MetricsData;
