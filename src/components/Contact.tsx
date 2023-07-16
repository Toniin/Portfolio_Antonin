import { FunctionComponent } from "react";
import {
  FaEnvelope,
  FaPhoneFlip,
  FaRegFilePdf,
  FaDownload,
  FaRegPaste,
} from "react-icons/fa6";
import Timeline from "./Timeline";
import SocialLink from "./SocialLink";

const Contact: FunctionComponent = () => {
  const contact = {
    email: "antonin.chaudiere@hotmail.fr",
    phone: "06 60 36 11 10",
  };

  const copyText: (text: string) => void = (text) => {
    navigator.clipboard.writeText(text).then(function () {
      console.log("Copier dans le presse papier!");
    });
  };

  return (
    <section className="contact flex flex-col items-center h-screen">
      <Timeline />
      <div className="contact__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl">Vous souhaitez me contacter ?</h2>

        <ul className="flex w-full justify-evenly items-center flex-wrap mt-20 gap-5 lg:py-8">
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-2 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaEnvelope size="1.5em" />
              {contact.email}
            </span>
            <button
              className="neomorphism--light dark:neomorphism--dark p-3 rounded-lg"
              onClick={() => copyText(contact.email)}
            >
              <FaRegPaste size="1.25em"/>
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-2 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaPhoneFlip size="1.5em" />
              {contact.phone}
            </span>
            <button
              className="neomorphism--light dark:neomorphism--dark p-3 rounded-lg"
              onClick={() => copyText(contact.phone)}
            >
              <FaRegPaste size="1.25em"/>
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-2 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaRegFilePdf size="1.5em" />
              Télécharger le CV
            </span>
            <button className="neomorphism--light dark:neomorphism--dark p-3 rounded-lg">
              <FaDownload size="1.25em"/>
            </button>
          </li>
        </ul>
        <div className="glass dark:glass--dark mt-6 p-7">
          <p className="text-lg">Ou bien sur mes réseaux sociaux 👇</p>
          <div className="flex justify-center gap-4 mt-6">
            <SocialLink />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
