import { FunctionComponent } from "react";
import {
  FaComments,
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
    <section className="contact flex flex-col items-center min-h-screen">
      <Timeline />
      <div className="contact__content w-full h-full flex flex-col items-center">
        <h2 className="text-2xl flex gap-4 items-center">
          <FaComments size="1.2em" />
          CONTACT
        </h2>

        <ul className="flex w-full justify-evenly items-center flex-wrap mt-20 gap-5 lg:py-8 text-sm min-[300px]:text-base">
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 md:px-52 lg:px-0 glass dark:glass--dark">
            <span className="flex items-center font-bold gap-2 pl-2">
              {window.innerWidth >= 360 && <FaEnvelope size="1.2em" />}
              {contact.email}
            </span>
            <button
              className="neomorphism--light dark:neomorphism--dark p-3 rounded-lg"
              onClick={() => copyText(contact.email)}
            >
              <FaRegPaste size="1.3em" />
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 md:px-52 lg:px-0 glass dark:glass--dark">
            <span className="flex items-center font-bold gap-2 pl-2">
              {window.innerWidth >= 360 && <FaPhoneFlip size="1.2em" />}
              {contact.phone}
            </span>
            <button
              className="neomorphism--light dark:neomorphism--dark p-3 rounded-lg"
              onClick={() => copyText(contact.phone)}
            >
              <FaRegPaste size="1.3em" />
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 md:px-52 lg:px-0 glass dark:glass--dark">
            <span className="flex items-center font-bold gap-2 pl-2">
              {window.innerWidth >= 360 && <FaRegFilePdf size="1.2em" />}
              Télécharger le CV
            </span>
            <button className="neomorphism--light dark:neomorphism--dark p-3 rounded-lg">
              <FaDownload size="1.3em" />
            </button>
          </li>
        </ul>
        <div className="glass dark:glass--dark mt-6 p-7">
          <p className="text-lg text-center">
            Ou bien sur mes réseaux sociaux 👇
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <SocialLink />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
