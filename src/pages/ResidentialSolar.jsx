import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ResidentialSolar() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".res-hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: "power3.out",
      });

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={pageRef} className="residential-page">

      <section className="res-hero">

        <div className="res-hero-content">

          <p className="res-eyebrow">
            RESIDENTIAL SOLAR
          </p>

          <h1>
            Power your home.
            <br />
            <span>Save with the sun.</span>
          </h1>

          <p className="res-description">
            Smart rooftop solar solutions designed for homes,
            helping you generate clean electricity and reduce
            your dependence on grid power.
          </p>

          <a href="#contact" className="res-primary-btn">
            Get a Free Quote
            <span>↗</span>
          </a>

        </div>

        <div className="res-hero-orb">
          <div className="res-sun"></div>
        </div>

      </section>


      <section className="res-intro reveal">

        <p className="res-section-label">
          SOLAR FOR YOUR HOME
        </p>

        <h2>
          Solar solutions
          <br />
          designed for <em>your home.</em>
        </h2>

        <p>
          From system design and installation to net metering
          and long-term support, Orion Green helps you make
          the transition to solar simple and reliable.
        </p>

      </section>


      <section className="res-features">

        <article className="res-feature reveal">
          <span>01</span>

          <h3>On-Grid Solar</h3>

          <p>
            Generate electricity from your rooftop and reduce
            your monthly electricity bills.
          </p>

          <div className="feature-arrow">↗</div>
        </article>


        <article className="res-feature reveal">
          <span>02</span>

          <h3>Net Metering</h3>

          <p>
            Export surplus electricity to the grid and make
            better use of your solar generation.
          </p>

          <div className="feature-arrow">↗</div>
        </article>


        <article className="res-feature reveal">
          <span>03</span>

          <h3>PM Surya Ghar</h3>

          <p>
            Explore rooftop solar solutions under the
            PM Surya Ghar scheme.
          </p>

          <div className="feature-arrow">↗</div>
        </article>

      </section>


      <section className="res-cta reveal">

        <p>READY TO SWITCH?</p>

        <h2>
          Let the sun
          <br />
          power your home.
        </h2>

        <a href="#contact">
          Start your solar journey ↗
        </a>

      </section>

    </main>
  );
}

export default ResidentialSolar;