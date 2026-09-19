import shieldIcon from "../../assets/icons/shield.svg";
import sparklesIcon from "../../assets/icons/sparkles.svg";
import zapIcon from "../../assets/icons/zap.svg";
import FeatureCard from "./FeatureCard";

const CardData = () => {
  const features = [
    {
      number: "01",
      category: "AUTOMATIONS",
      title: "AI-Driven Sprints",
      description:
        "Auto-generate PR summaries, triage incoming bug tickets, and balance developer capacity with natural language prompts.",
      icon: { src: sparklesIcon, alt: "Sparkles Icon" },
    },
    {
      number: "02",
      category: "CANVAS",
      title: "Real-time Architecture Canvas",
      description:
        "Co-design system architectures, map dependencies, and link live GitHub repositories directly into visual planning boards.",
      icon: { src: zapIcon, alt: "Zap Icon" },
    },
    {
      number: "03",
      category: "ANALYTICS",
      title: "Predictive Cycle Time",
      description:
        "Machine learning forecasts on deployment bottlenecks, PR review lag times, and sprint velocity trends.",
      icon: { src: sparklesIcon, alt: "Sparkles Icon" },
    },
    {
      number: "04",
      category: "COMPLIANCE",
      title: "SOC2 Type II Security",
      description:
        "End-to-end 256-bit encryption, role-based access control, custom SAML SSO, and complete audit logging by default.",
      icon: { src: shieldIcon, alt: "Shield Icon" },
    },
    {
      number: "05",
      category: "ECOSYSTEM",
      title: "100+ Integrations",
      description:
        "Bi-directional webhooks and sync with GitHub, GitLab, Jira, Figma, Linear, Slack, Notion, and Datadog.",
      icon: { src: shieldIcon, alt: "Shield Icon" },
    },
    {
      number: "06",
      category: "PIPELINES",
      title: "Serverless CI/CD Triggers",
      description:
        "Instant execution of build, test, and release gates across isolated edge environments with zero cold starts.",
      icon: { src: zapIcon, alt: "Zap Icon" },
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 border border-neutral-800 rounded-xl overflow-hidden">
        {features.map((feature) => {
          return <FeatureCard key={feature.number} feature={feature} />;
        })}
      </div>
    </>
  );
};

export default CardData;
