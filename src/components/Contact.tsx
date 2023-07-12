import { FunctionComponent } from "react";
import {
  FaEnvelope,
  FaPhoneFlip,
  FaRegFilePdf,
  FaDownload,
  FaRegPaste,
  FaLinkedin,
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
      <div className="contact__content w-full h-screen flex flex-col items-center">
        <h2 className="text-2xl">Vous souhaitez me contacter ?</h2>

        <ul className="flex w-full justify-evenly items-center gap-5 py-10 flex-wrap">
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-4 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaEnvelope size="1.5em" />
              {contact.email}
            </span>
            <button
              className="neomorphism--light dark:neomorphism--dark flex flex-col gap-2 p-3 rounded-lg"
              onClick={() => copyText(contact.email)}
            >
              <FaRegPaste />
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-4 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaPhoneFlip size="1.5em" />
              {contact.phone}
            </span>
            <button
              className="neomorphism--light dark:neomorphism--dark flex flex-col gap-2 p-3 rounded-lg"
              onClick={() => copyText(contact.phone)}
            >
              <FaRegPaste />
            </button>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 px-4 md:px-52 lg:px-0">
            <span className="flex items-center font-bold gap-4">
              <FaRegFilePdf size="1.5em" />
              Télécharger le CV
            </span>
            <button className="neomorphism--light dark:neomorphism--dark flex flex-col gap-2 p-3 rounded-lg">
              <FaDownload />
            </button>
          </li>
        </ul>
        <p className="text-lg">Ou bien sur mes réseaux sociaux 👇</p>
        <div className="flex justify-center gap-4 mt-6">
          <SocialLink />
          {/* <SocialLink social="Linkedin"/> */}
          <a
            className="z-0 linkedin-color hover:linkedin-color--hover dark:linkedin-color--dark dark:hover:linkedin-color--dark--hover"
            href="https://www.linkedin.com/in/antonin-chaudiere/"
            target="_blank"
          >
            <FaLinkedin size="3em" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
