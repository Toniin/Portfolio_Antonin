import { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
  return (
    <section className="about flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl">Vous souhaitez me contacter ?</h2>
      <div className="flex justify-evenly items-center w-full py-10">
        <p className="text-lg">
          Mail: <span className="font-bold">antonin.chaudiere@hotmail.fr</span>
        </p>
        <p className="text-lg">
          Téléphone: <span className="font-bold">0660361110</span>
        </p>
        <button className="border-yellow-500 dark:bg-dark dark:border-white mx-5 px-4 py-3 rounded-3xl border-2">
          Télécharger le CV
        </button>
      </div>
      <p className="text-lg">
        Ou bien sur mes réseaux sociaux en bas de page 👇
      </p>
    </section>
  );
};
export default Contact;
