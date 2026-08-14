import { Home, Building2, Factory, ArrowUpRight } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Home,
    title: "Residential Solar",
    description:
      "Rooftop solar systems designed to help homes generate clean electricity and reduce dependence on grid power.",
    tags: ["Rooftop Solar", "On-Grid", "Net Metering"],
  },
  {
    number: "02",
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Reliable solar solutions for offices, shops, institutions and commercial properties looking to reduce energy costs.",
    tags: ["Commercial", "Rooftop", "Energy Savings"],
  },
  {
    number: "03",
    icon: Factory,
    title: "Industrial Solar",
    description:
      "Scalable solar installations for industrial facilities with solutions designed around larger energy requirements.",
    tags: ["Industrial", "High Capacity", "Custom Design"],
  },
];

function Solutions() {
  return (
    <section className="solutions" id="solutions">
      <div className="solutions-container">

        <div className="solutions-header">
          <div>
            <p className="section-eyebrow dark">
              <span></span>
              OUR SOLUTIONS
            </p>

            <h2>
              Solar that works
              <br />
              <em>for you.</em>
            </h2>
          </div>

          <p className="solutions-intro">
            From your home rooftop to large-scale industrial installations,
            we design and deliver solar systems around your actual energy
            requirements.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article className="solution-card" key={solution.number}>

                <div className="solution-top">
                  <span>{solution.number}</span>

                  <div className="solution-icon">
                    <Icon size={25} strokeWidth={1.6} />
                  </div>
                </div>

                <div className="solution-content">
                  <h3>{solution.title}</h3>

                  <p>{solution.description}</p>

                  <div className="solution-tags">
                    {solution.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="solution-bottom">
                  <span>Explore solution</span>
                  <ArrowUpRight size={20} />
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Solutions;