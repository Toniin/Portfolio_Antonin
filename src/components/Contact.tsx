import { FunctionComponent } from "react";
import {
  FaEnvelope,
  FaPhoneFlip,
  FaRegFilePdf,
  FaDownload,
  FaRegPaste,
} from "react-icons/fa6";
import Timeline from "./Timeline";

const Contact: FunctionComponent = () => {
  const contact = {
    email: "antonin.chaudiere@hotmail.fr",
    phone: "0660361110",
  };

  const copyText: (text: string) => void = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      console.log("Copier ;)");
    });
  };

  return (
    <section className="contact flex flex-col items-center h-screen">
      <Timeline />
      <div className="contact__content w-full h-screen flex flex-col items-center">
        <h2 className="text-xl">Vous souhaitez me contacter ?</h2>

        <ul className="flex w-full justify-evenly items-center gap-5 py-10 flex-wrap">
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-4 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaEnvelope />
              antonin.chaudiere@hotmail.fr
            </span>
            <button
              className="contact__content__button flex justify-center items-center rounded-lg"
              onClick={() => copyText(contact.email)}
            >
              <FaRegPaste />
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-4 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaPhoneFlip />
              0660361110
            </span>
            <button
              className="contact__content__button flex justify-center items-center rounded-lg"
              onClick={() => copyText(contact.phone)}
            >
              <FaRegPaste />
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-4 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaRegFilePdf />
              Télécharger le CV
            </span>
            <button className="contact__content__button flex flex-col gap-2 rounded-lg">
              <FaDownload />
            </button>
          </li>
        </ul>
        <p className="text-lg">
          Ou bien sur mes réseaux sociaux en bas de page 👇
        </p>
      </div>
    </section>
  );
};
export default Contact;
