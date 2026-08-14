import { ShieldCheck, Settings2, Sun, Headphones } from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: Sun,
    title: "Smart Solar Solutions",
    description:
      "Thoughtfully designed solar systems tailored to your energy requirements, property and long-term goals.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality Components",
    description:
      "We focus on reliable, industry-grade components to build systems designed for dependable performance.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Professional Installation",
    description:
      "From system design to installation and commissioning, every stage is handled with attention to detail.",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "Our relationship doesn't end after installation. We remain available for service, maintenance and support.",
  },
];

function WhyOrion() {
  return (
    <section className="why-orion" id="about">
      <div className="why-container">
        <div className="why-heading">
          <p className="section-eyebrow">
            <span></span>
            WHY ORION GREEN
          </p>

          <h2>
            Energy solutions
            <br />
            <em>built to last.</em>
          </h2>

          <p className="why-intro">
            We combine thoughtful engineering, quality components and
            professional execution to make the transition to solar simple,
            reliable and worthwhile.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article className="reason-card" key={reason.number}>
                <div className="reason-top">
                  <span className="reason-number">{reason.number}</span>

                  <div className="reason-icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <div className="reason-line"></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyOrion;