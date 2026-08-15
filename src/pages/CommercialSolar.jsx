import React from "react";

const CommercialSolar = () => {
  return (
    <main className="solution-page">
      <section className="solution-hero">
        <span className="solution-label">COMMERCIAL SOLAR</span>

        <h1>
          Reduce energy costs.
          <br />
          <span>Power your business.</span>
        </h1>

        <p>
          Reliable solar solutions for offices, shops,
          institutions and commercial properties looking
          to reduce energy costs.
        </p>

        <button>Get a Free Quote ↗</button>
      </section>

      <section className="solution-content">
        <h2>Commercial solar built around your business.</h2>

        <p>
          We design and install solar systems according to
          your property's energy consumption, available
          rooftop area and long-term business requirements.
        </p>

        <div className="solution-features">
          <div>
            <h3>Rooftop Solar</h3>
            <p>
              Make productive use of your commercial rooftop
              and generate clean electricity.
            </p>
          </div>

          <div>
            <h3>Energy Savings</h3>
            <p>
              Reduce your dependence on conventional grid
              electricity and control operating costs.
            </p>
          </div>

          <div>
            <h3>Custom Design</h3>
            <p>
              Solar systems designed around your load,
              property and business requirements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommercialSolar;