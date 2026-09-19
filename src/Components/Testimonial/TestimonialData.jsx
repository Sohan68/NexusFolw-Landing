import avatar_1 from "../../assets/images/avatar-1.svg";
import avatar_2 from "../../assets/images/avatar-2.svg";
import avatar_3 from "../../assets/images/avatar-3.svg";

import TestimonialCard from "./TestimonialCard";

const TestimonialData = () => {
  const testimonials = [
    {
      quote:
        "NexusFlow transformed our sprint cycles. The automatic PR summaries and real-time canvas eliminated 40% of our daily sync overhead.",
      name: "Sarah Chen",
      role: "VP Eng @ CloudNova",
      avatar: { src: avatar_1 },
    },
    {
      quote:
        "We migrated 60+ engineers from fragmented legacy tools to NexusFlow in one afternoon. The developer experience is world-className.",
      name: "Marcus Vance",
      role: "CTO @ HyperScale",
      avatar: { src: avatar_2 },
    },
    {
      quote:
        "The edge preview pipelines and branch triggers feel magical. NexusFlow makes shipping software as fast as thinking about it.",
      name: "Elena Rostova",
      role: "Lead Architect @ Pulse",
      avatar: { src: avatar_3 },
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => {
          return (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          );
        })}
      </div>
    </>
  );
};

export default TestimonialData;
