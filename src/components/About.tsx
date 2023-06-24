import { FunctionComponent } from "react";

const About: FunctionComponent = () => {
  return (
    <section className="about flex items-center">
      <article className="about__content flex justify-center items-center flex-wrap">
        <img
          className="about__content__image md:basis-1/4 sm:basis-9/12"
          src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-600x600.png"
          alt=""
        />
        <p className="about__content__text basis-1/2">
          Porro quidem dicta cumque beatae quis repellat, odit sed obcaecati.
          Expedita. Ut quisquam consectetur laboriosam doloribus ullam
          praesentium aspernatur sequi quae dolor eveniet sapiente sint facilis
          eius commodi, necessitatibus laborum tempore sit architecto!
        </p>
      </article>
    </section>
  );
};
export default About;
