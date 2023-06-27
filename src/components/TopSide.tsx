import { FunctionComponent } from "react";

const TopSide: FunctionComponent = () => {
  return (
    <section className="topside flex items-center h-screen">
      <article className="topside__content flex justify-center items-center flex-wrap">
        <img
          className="topside__content__image md:basis-1/4 sm:basis-9/12"
          src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3-600x600.png"
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-center py-5 text-2xl">Antonin</h1>
          <p className="topside__content__text basis-1/2">
            Porro quidem dicta cumque beatae quis repellat, odit sed obcaecati.
            Expedita. Ut quisquam consectetur laboriosam doloribus ullam
            praesentium aspernatur sequi quae dolor eveniet sapiente sint
            facilis eius commodi, necessitatibus laborum tempore sit architecto!
          </p>
          <button className="border-yellow-500 dark:bg-dark dark:border-white mx-5 px-4 py-3 rounded-3xl border-2">
            Télécharger le CV
          </button>
        </div>
      </article>
    </section>
  );
};
export default TopSide;
