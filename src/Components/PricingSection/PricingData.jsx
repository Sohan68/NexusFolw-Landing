import PricingCard from "./PricingCard";

const PricingData = () => {
  const pricingPlans = [
    {
      name: "Hobby",
      description: "For individual builders and personal projects",

      price: {
        monthly: "$0",
        annual: "$0",
      },

      priceSuffix: "/ month",

      features: [
        "Up to 3 Projects",
        "Unlimited Kanban Boards",
        "Standard GitHub Sync",
        "Community Support",
      ],

      buttonText: "Start Free",
      buttonLink: "#deploy",

      featured: false,
    },

    {
      name: "Pro",
      description: "For fast-moving engineering teams and scaleups",

      price: {
        monthly: "$20",
        annual: "$16",
      },

      priceSuffix: "/ user / month",

      features: [
        "Unlimited Projects & Sprints",
        "10,000 AI Agent Executions / mo",
        "Predictive Sprint Analytics",
        "Full Ecosystem Integrations",
        "Priority 24/7 SLA Support",
      ],

      buttonText: "Upgrade to Pro",
      buttonLink: "#deploy",

      featured: true,
    },

    {
      name: "Enterprise",
      description: "For mission-critical compliance & security",

      price: {
        monthly: "Custom",
        annual: "Custom",
      },

      priceSuffix: "",

      features: [
        "Dedicated SAML SSO & SCIM",
        "Custom Data Residency",
        "99.99% Uptime Guarantee SLA",
        "Dedicated Technical Architect",
      ],

      buttonText: "Contact Sales",
      buttonLink: "#contact",

      featured: false,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pricingPlans.map((plan) => {
          return (
            <PricingCard
              key={plan.name}
              className="pricing-card"
              plan={plan}
            ></PricingCard>
          );
        })}
      </div>
    </>
  );
};

export default PricingData;
