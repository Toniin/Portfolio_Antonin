import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import {
  FaComments,
  FaEnvelope,
  FaPhoneFlip,
  FaRegFilePdf,
  FaDownload,
  FaRegPaste,
} from "react-icons/fa6";
import Timeline from "./Timeline";
import Timeline3Branchs from "./Timeline3Branchs";
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
      {window.innerWidth <= 975 ? <Timeline /> : <Timeline3Branchs />}
      <div className="contact__content w-full h-full flex flex-col items-center">
        <h2 className="text__shadow--dark dark:text__shadow--light text-2xl flex gap-4 items-center">
          <FaComments size="1.2em" />
          CONTACT
        </h2>

        <ul className="flex w-full justify-evenly items-center flex-wrap mt-20 gap-5 lg:py-8 text-sm min-[300px]:text-base">
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 md:px-52 lg:px-0 glass--light glass--light--off dark:glass--dark dark:glass--dark--off rounded-md">
            <span className="flex items-center font-bold gap-2 pl-2">
              {window.innerWidth >= 360 && <FaEnvelope size="1.2em" />}
              {contact.email}
            </span>
            <Tooltip
              content="Copier"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <button
                className="neomorphism__secondary--light dark:neomorphism__secondary--dark p-3 rounded-lg"
                onClick={() => copyText(contact.phone)}
              >
                <FaRegPaste size="1.3em" />
              </button>
            </Tooltip>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 md:px-52 lg:px-0 glass--light glass--light--off dark:glass--dark dark:glass--dark--off rounded-md">
            <span className="flex items-center font-bold gap-2 pl-2">
              {window.innerWidth >= 360 && <FaPhoneFlip size="1.2em" />}
              {contact.phone}
            </span>

            <Tooltip
              content="Copier"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <button
                className="neomorphism__secondary--light dark:neomorphism__secondary--dark p-3 rounded-lg"
                onClick={() => copyText(contact.phone)}
              >
                <FaRegPaste size="1.3em" />
              </button>
            </Tooltip>
          </li>
          <li className="flex basis-full lg:basis-auto justify-between items-center gap-4 md:px-52 lg:px-0 glass--light glass--light--off dark:glass--dark dark:glass--dark--off rounded-md">
            <span className="flex items-center font-bold gap-2 pl-2">
              {window.innerWidth >= 360 && <FaRegFilePdf size="1.2em" />}
              Télécharger le CV
            </span>
            <Tooltip
              content="Téléchager"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <Link
                className="neomorphism__secondary--light dark:neomorphism__secondary--dark p-3 rounded-lg"
                to="/CV_Antonin-CHAUDIERE.pdf"
                target="_blank"
                download
              >
                <FaDownload size="1.3em" />
              </Link>
            </Tooltip>
          </li>
        </ul>
        <div className="glass--light glass--light--off dark:glass--dark dark:glass--dark--off mt-6 p-7 rounded-md">
          <p className="text-lg text-center">
            Ou bien sur mes réseaux sociaux 👇
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <SocialLink background="glass" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
